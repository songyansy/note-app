'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useNoteStore } from '@/store/noteStore'

export default function NoteList() {
  const { notes, removeNote } = useNoteStore()
  const [filter, setFilter] = useState('全部')

  const categories = ['全部', 'React', 'TypeScript', 'Next.js', '其他']
  const filteredNotes =
    filter === '全部' ? notes : notes.filter((n) => n.category === filter)

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        笔记列表（{filteredNotes.length}篇）
      </h2>

      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm ${
              filter === cat
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredNotes.length === 0 ? (
        <p className="text-gray-400 text-center py-8">没有笔记</p>
      ) : (
        <div className="space-y-4">
          {filteredNotes.map((note) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="block border rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {note.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded">
                    {note.category}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    removeNote(note.id)
                  }}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  删除
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{note.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}