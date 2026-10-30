// src/app/notes/[id]/page.tsx
import Link from 'next/link'

// Next.js 15+ App Router：动态路由的 params / searchParams 都是 Promise
// 见 .next/types/routes.d.ts 中的 PageProps 类型定义
export default async function NoteDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // 先用写死数据测试路由（Zustand 数据在浏览器，服务端读不到）
  const notes = [
    { id: '1', title: 'React Hooks 总结', content: 'useState、useEffect、useContext...', category: 'React' },
    { id: '2', title: 'TypeScript 泛型', content: '泛型让代码更灵活，可复用...', category: 'TypeScript' },
    { id: '3', title: 'Next.js App Router', content: '文件系统路由，Server Components...', category: 'Next.js' },
  ]

  const note = notes.find((n) => n.id === id)

  return (
    <div>
      <Link href="/notes" className="text-blue-600 text-sm">
        ← 返回列表
      </Link>
      {note ? (
        <>
          <h1 className="text-3xl font-bold mt-4">{note.title}</h1>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded inline-block mt-2">
            {note.category}
          </span>
          <p className="text-gray-600 mt-6 leading-relaxed">{note.content}</p>
        </>
      ) : (
        <h1 className="text-3xl font-bold mt-4">笔记不存在</h1>
      )}
    </div>
  )
}