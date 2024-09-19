// bookitemの表示を担当

import Link from 'next/link'

import { BookThumbnail } from './book-thumbnail'
import { BookTitle } from './book-title'
import { BookLead } from './book-lead'
import { bookItems } from '@/types/book'

export const BookItem = ({ book }: { book: bookItems }) => {
  return (
    <Link href={`search/${book.id}`} className="block h-full hover:bg-gray-50">
      <div className="flex gap-x-4 px-6 py-4">
        <div className="w-20 shrink-0">
          <BookThumbnail src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
        </div>
        <div>
          <div className="mt-1">
            <BookTitle>{book.volumeInfo.title}</BookTitle>
          </div>
          {book.volumeInfo.authors && (
            <div className="mt-2">
              <BookLead>寄稿者: {book.volumeInfo.authors.join(', ')}</BookLead>
            </div>
          )}
          {book.volumeInfo.publisher && (
            <div className="mt-2">
              <BookLead>出版社: {book.volumeInfo.publisher}</BookLead>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
