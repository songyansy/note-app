import Link from 'next/link'
import AddNoteDialog from './AddNoteDialog'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DashboardPage() {
  const stats = [
    { title: '笔记总数', value: '12', desc: '本周新增 5 篇' },
    { title: '学习天数', value: '8', desc: '连续打卡中' },
    { title: '待复习', value: '3', desc: '有 3 篇标记待复习' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-5xl mx-auto">
        {/* 顶部 */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              我的学习看板
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Next.js + shadcn/ui 构建
            </p>
          </div>
          <div className="flex gap-3">
            <AddNoteDialog />
            <Button render={<Link href="/notes" />} nativeButton={false}>进入笔记 →</Button>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 标签示例 */}
        <Card>
          <CardHeader>
            <CardTitle>技术标签</CardTitle>
            <CardDescription>正在学习的技术栈</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap">
            <Badge>React 19</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="secondary">Tailwind</Badge>
            <Badge variant="outline">Zustand</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}