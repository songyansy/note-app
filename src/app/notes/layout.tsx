import Link from 'next/link'

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">
          📖 读书笔记
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            首页
          </Link>
          <Link href="/notes" className="text-blue-600 font-medium">
            笔记
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            关于
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6">
        {children}
      </main>
    </div>
  )
}