import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice'

import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Input from './ui/Input'
import Button from './ui/Button'
import Card from './ui/Card'
import CardContent from './ui/CardContent'

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const filteredData = Array.isArray(pastes)
    ? pastes.filter((paste) =>
        paste?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId))
  }

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content)
    toast.success('Copied')
  }

  const handleShare = (pasteId) => {
    const shareUrl = `${window.location.origin}/paste/${pasteId}`
    navigator.clipboard.writeText(shareUrl)
    toast.success('Link copied to clipboard')
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-8 px-4">
  <Input
    type="search"
    placeholder="Search pastes by title..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-xl px-4 py-2"
  />

  {filteredData.length > 0 ? (
    <div className="space-y-4">
      {filteredData.map((paste) => (
        <Card
          key={paste._id}
          className="border border-indigo-200 shadow-sm rounded-xl"
        >
          <CardContent className="p-5 space-y-4">
            <div className="text-xl font-semibold text-indigo-700 hover:text-indigo-800 transition-colors cursor-pointer">
              {paste.title}
            </div>
            <div className="whitespace-pre-wrap text-gray-600">{paste.content}</div>
            <div className="flex flex-wrap gap-3">
              <Link to={`/?pasteId=${paste._id}`}>
                <Button variant="outline">Edit</Button>
              </Link>
              <Link to={`/paste/${paste._id}`}>
                <Button variant="outline">View</Button>
              </Link>
                <Button onClick={() => handleDelete(paste._id)} variant="destructive">
                  Delete
                 </Button>
              <Button onClick={() => handleCopy(paste.content)} variant="secondary">
                 Copy
              </Button>
              <Button onClick={() => handleShare(paste._id)} variant="outline">
                Share
              </Button>
            </div> 
            <div className="text-xs text-right text-gray-500">
              {new Date(paste.createdAt).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ) : (
    <div className="text-center text-indigo-400 italic">No pastes found.</div>
  )}
</div>

  )
}

export default Paste
