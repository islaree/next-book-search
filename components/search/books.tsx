import Link from 'next/link'
import Image from 'next/image'
import { cache } from 'react'
import { bookItems } from '@/types/book'

const getData = cache(async (keyword: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
  const data = await res.json()
  return data
})

export default async function SearchResultsList({ keyword }: { keyword: string }) {
  const data = await getData(keyword)
  let booksData = null
  if (data) booksData = data.items

  return (
    <div className="flex flex-col lg:col-auto lg:grid lg:grid-cols-2">
      {booksData ? (
        booksData.map((book: bookItems) => (
          <div key={book.id}>
            <Link href={`search/${book.id}`} scroll={true} className="block h-full hover:bg-gray-50 hover:ring-1 hover:ring-gray-200">
              <div className="flex gap-x-4 px-6 py-4">
                <div className="w-20 shrink-0">
                  {book.volumeInfo.imageLinks ? (
                    <Image
                      className="h-auto w-28 rounded-lg border border-gray-200"
                      src={book.volumeInfo.imageLinks.thumbnail.replace('http', 'https')}
                      width={128}
                      height={168}
                      alt="thumbnail"
                    />
                  ) : (
                    <div className="flex h-[104px] w-20 items-center justify-center rounded bg-gray-200 text-xs font-bold italic text-gray-400">no image</div>
                  )}
                </div>
                <div>
                  <div className="mt-1 text-sm font-bold">{book.volumeInfo.title}</div>
                  {book.volumeInfo.authors && <div className="mt-2 text-xs text-gray-400">寄稿者: {book.volumeInfo.authors.join(', ')}</div>}
                  {book.volumeInfo.publisher && <div className="mt-1 text-xs text-gray-400">出版社: {book.volumeInfo.publisher}</div>}
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="text-md flex items-center justify-center px-6 pt-40 text-center font-bold text-gray-400">
          キーワードに一致する本が
          <br />
          見つかりませんでした
        </div>
      )}
    </div>
  )
}
