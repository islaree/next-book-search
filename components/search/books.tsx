import { cache } from 'react'
import Link from 'next/link'
import { bookItems } from '@/types/book'

const getData = cache(async (keyword: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
  const data = await res.json()
  return data
})

export default async function Books({ keyword }: { keyword: string }) {
  let data = await getData(keyword)
  let booksData = null
  if (data != null) booksData = data.items

  return (
    <div className="flex flex-col">
      {booksData != null ? (
        booksData.map((book: bookItems) => (
          <div key={book.id}>
            <Link href={`search/${book.id}`} scroll={true}>
              <div className="flex gap-x-4 border-b border-gray-200 bg-gray-50 p-4">
                <div className="w-20 shrink-0">
                  <img
                    className="h-auto w-full overflow-hidden rounded-md border border-slate-200"
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                    width={80}
                    height={112}
                  />
                </div>
                <div>
                  <div className="mt-1 text-sm font-bold">{book.volumeInfo.title}</div>
                  <div className="mt-2 text-xs text-gray-400">寄稿者 : {book.volumeInfo.authors}</div>
                  <div className="mt-1 text-xs text-gray-400">出版社 : {book.volumeInfo.publisher}</div>
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
