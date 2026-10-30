'use client'

import { useState } from 'react'
import { useNoteStore } from '@/store/noteStore'

export default function NoteForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('React')
  const addNote = useNoteStore((state) => state.addNote)

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return
    addNote(title, content, category)
    setTitle('')
    setContent('')
  }

  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">添加笔记</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="标题"
        className="w-full border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="内容"
        rows={4}
        className="w-full border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-500"
      />
      <div className="flex gap-3">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        >
          <option value="React">React</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Next.js">Next.js</option>
          <option value="其他">其他</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          添加
        </button>
      </div>
    </div>
  )
}