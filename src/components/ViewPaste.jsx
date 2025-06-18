import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Input from './ui/Input'
import Button from './ui/Button'
import Card from './ui/Card'
import CardContent from './ui/CardContent'
import Textarea from './ui/Textarea'


const ViewPaste = () => {
  const { id } = useParams()
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.find((p) => p._id === id)

  if (!paste) {
    return <div className="p-4 text-red-600 text-center">Paste not found or invalid ID.</div>
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
  <Card className="border border-indigo-300 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
    <CardContent className="space-y-6 p-6">
      <div className="text-2xl font-semibold text-indigo-700 break-words">
        {paste?.title || <span className="italic text-indigo-400">Untitled</span>}
      </div>

      <div className="whitespace-pre-wrap p-6 rounded-xl text-gray-800 border border-indigo-200  break-words">
        {paste?.content || <span className="italic text-gray-400">No content</span>}
      </div>

      <div className="text-right text-sm text-gray-500">
        {paste?.createdAt ? new Date(paste.createdAt).toLocaleString() : ''}
      </div>
    </CardContent>
  </Card>
</div>

  )
}

export default ViewPaste
