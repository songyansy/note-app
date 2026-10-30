import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Note {
  id: string
  title: string
  content: string
  category: string
  createdAt: number
}

interface NoteStore {
  notes: Note[]
  addNote: (title: string, content: string, category: string) => void
  removeNote: (id: string) => void
  updateNote: (id: string, title: string, content: string) => void
}

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: [],

      addNote: (title, content, category) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              id: Date.now().toString(),
              title,
              content,
              category,
              createdAt: Date.now(),
            },
          ],
        })),

      removeNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),

      updateNote: (id, title, content) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, title, content } : note
          ),
        })),
    }),
    { name: 'notes-storage' }
  )
)