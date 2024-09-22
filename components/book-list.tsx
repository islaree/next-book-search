'use client'

import { BookItem } from './book-item'
import { useBookStore } from '@/store/books'

export const BookList = () => {
  const { books } = useBookStore()

  if (books.length == 0) return <p>検索してね</p>

  return (
    <div className="divide-y divide-gray-300">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  )
}
