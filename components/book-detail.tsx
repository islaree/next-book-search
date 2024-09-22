import parse from 'html-react-parser'

import { getBookData } from '@/lib/api'
import LikeButton from './search/like-button'
import { BookThumbnail } from './book-thumbnail'

export const BookDetail = async ({ id }: { id: string }) => {
  const book = await getBookData(id)

  if (!book) return <p>書籍データが見つかりませんでした。</p>

  const { volumeInfo } = book

  const { imageLinks, title, subtitle, pageCount, publishedDate, publisher, authors, description } = volumeInfo

  return (
    <>
      <div className="relative overflow-hidden border-b border-gray-200">
        <div className="flex h-56 w-full items-center justify-center overflow-hidden bg-gray-100 opacity-60"></div>
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <BookThumbnail src={imageLinks.thumbnail} alt={title} />
        </div>
      </div>
      <div className="px-6">
        <div className="mt-8 text-xl font-bold text-slate-900">{title}</div>
        {subtitle && <div className="mt-1 text-sm text-gray-500">{subtitle}</div>}
        <div className="mt-2">
          <LikeButton book={book} />
        </div>
        <BookDetailInfoList>
          <BookDetailInfoItem>ページ数 : {pageCount}</BookDetailInfoItem>
          <BookDetailInfoItem>公開日 : {publishedDate}</BookDetailInfoItem>
          <BookDetailInfoItem>出版社 : {publisher}</BookDetailInfoItem>
          {authors && <BookDetailInfoItem>寄稿者 : {Array.isArray(authors) ? authors.join(', ') : authors}</BookDetailInfoItem>}
        </BookDetailInfoList>
        {description && (
          <div className="my-8 border-t border-slate-200">
            <div className="mt-8 text-sm leading-6 text-slate-600">{parse(description)}</div>
          </div>
        )}
      </div>
    </>
  )
}

const BookDetailInfoList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="mt-4 flex flex-col gap-y-1">{children}</ul>
}

const BookDetailInfoItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="text-sm text-gray-500">{children}</li>
}
