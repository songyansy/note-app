import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        📖 读书笔记管理
      </h1>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8">
        用 Next.js + Zustand + Tailwind 构建
      </p>

      <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Link
          href="/notes"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 text-center"
        >
          进入笔记 →
        </Link>
        <Link
          href="/about"
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
        >
          关于
        </Link>
      </nav>
    </main>
  )
}