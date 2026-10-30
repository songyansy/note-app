// src/app/notes/[id]/page.tsx
import Link from 'next/link'
import { Suspense } from 'react'
import NoteDetail from './NoteDetail'

// 笔记数据存在浏览器 localStorage（Zustand persist），服务端读不到，
// 所以真正的查询放到客户端组件 NoteDetail 里做。
// cacheComponents 模式下，客户端组件里读取路由参数（useParams）属于运行时数据，
// 必须包在 <Suspense> 边界内，构建期才能预渲染静态外壳。
export default function NoteDetailPage() {
  return (
    <div>
      <Link href="/notes" className="text-blue-600 text-sm">
        ← 返回列表
      </Link>
      <Suspense fallback={<p className="mt-8 text-gray-500">加载中...</p>}>
        <NoteDetail />
      </Suspense>
    </div>
  )
}
