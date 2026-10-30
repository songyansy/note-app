'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export default function AddNoteDialog() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>
        快速添加笔记
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>添加笔记</DialogTitle>
          <DialogDescription>
            输入标题，点击保存
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="笔记标题"
          />
          <Button
            onClick={() => {
              alert(`保存了：${title}`)
              setTitle('')
              setOpen(false)
            }}
            className="w-full"
          >
            保存
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}