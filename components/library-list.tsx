'use client'

import { useLibraryStore } from '@/store/library'
import { BookItem } from './book-item'

export const LibraryList = () => {
  const { library } = useLibraryStore()

  return (
    <>
      {library.map((l) => (
        <BookItem key={l.id} book={l} />
      ))}
    </>
  )
}
