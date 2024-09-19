// 本のデータを表示する -> 本のデータを取得する
'use client'

import { useEffect, useState } from 'react'
import { BookItem } from './book-item'
import { bookItems } from '@/types/book'
import { getBooksData } from '@/lib/api'
import { useSearchStore } from '@/store/store'

export const BookList = () => {
  const [books, setBooks] = useState<bookItems[]>([])
  const { searchTerm } = useSearchStore()

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim().length > 0) {
        const data = await getBooksData(searchTerm)
        setBooks(data.items)
      }
    }

    fetchData()
  }, [searchTerm])

  return (
    <div className="divide-y divide-gray-300">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  )
}
