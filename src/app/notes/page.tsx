// import NoteForm from './noteForm'

// export default function NotesPage() {
//     // 这行在服务器端执行，不会暴露给浏览器
//   console.log('这段代码在服务器运行')
//   return (
//     <div>
//       <h1> 我的笔记</h1>
//       <p>这是笔记页面，路由是 /notes</p>
//       <NoteForm />
//     </div>
//   )
// }


import Link from 'next/link'
import NoteForm from './noteForm'
import NoteList from './NoteList'

export default function NotesPage() {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto">
      <nav className="flex gap-4 mb-8">
        <Link href="/" className="text-blue-600 underline">首页</Link>
        <Link href="/notes" className="text-blue-600 underline font-bold">笔记</Link>
        <Link href="/about" className="text-blue-600 underline">关于</Link>
      </nav>

      <h1 className="text-3xl font-bold">📖 读书笔记管理</h1>

      <NoteForm />
      <NoteList />
    </div>
  )
}