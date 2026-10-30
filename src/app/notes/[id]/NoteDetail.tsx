'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useNoteStore } from '@/store/noteStore'

export default function NoteDetail() {
  // 客户端组件里读动态路由参数，用 useParams 比 await params 更直接
  const { id } = useParams<{ id: string }>()

  // Zustand 数据来自 localStorage，服务端渲染时 store 是空的。
  // 用 mounted 标记等浏览器端水合完成后再展示，避免首屏闪现「笔记不存在」、
  // 也避免服务端 HTML 与客户端渲染结果不一致导致的水合警告。
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // 选择器订阅：只关心当前这条笔记，find 返回的是数组里的同一个对象引用，
  // 所以引用稳定，不会引起无谓的重渲染
  const note = useNoteStore((state) => state.notes.find((n) => n.id === id))

  if (!mounted) {
    return <p className="mt-8 text-gray-500">加载中...</p>
  }

  if (!note) {
    return <h1 className="text-3xl font-bold mt-4">笔记不存在</h1>
  }

  return (
    <>
      <h1 className="text-3xl font-bold mt-4">{note.title}</h1>
      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded inline-block mt-2">
        {note.category}
      </span>
      <p className="text-gray-600 mt-6 leading-relaxed">{note.content}</p>
    </>
  )
}
