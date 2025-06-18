import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateToPastes, addToPastes } from '../redux/pasteSlice'

import Input from './ui/Input'
import Button from './ui/Button'
import Textarea from './ui/Textarea'
import Card from './ui/Card'
import CardContent from './ui/CardContent'

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams('')
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch()
  const allPastes = useSelector((state) => state.paste.pastes)

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId)
      if (paste) {
        setTitle(paste.title)
        setValue(paste.content)
      }
    }
  }, [pasteId])

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      dispatch(updateToPastes(paste))
    } else {
      dispatch(addToPastes(paste))
    }

    setTitle('')
    setValue('')
    setSearchParams({})
  }

  return (
    <Card className="max-w-5xl mx-auto mt-10 bg-white shadow-sm border border-indigo-600 rounded-xl">
  <CardContent className="p-6 space-y-6">
    <div className="flex flex-col md:flex-row items-center gap-4">
      <Input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full md:flex-1 px-4 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      />
      <Button
        onClick={createPaste}
        className="w-full md:w-auto px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {pasteId ? 'Update Paste' : 'Create My Paste'}
      </Button>
    </div>
    <Textarea
      placeholder="Enter content"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      rows={15}
      className="w-full resize-none px-4 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    />
  </CardContent>
</Card>

  )
}

export default Home
