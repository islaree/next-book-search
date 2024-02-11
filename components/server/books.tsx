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
            <Link href={`search/${book.id}`}>
              <div className="flex gap-x-4 p-4 border-gray-200 border-b bg-gray-50">
                <div className="shrink-0 w-20">
                  <img
                    className="w-full h-auto overflow-hidden rounded-lg border border-gray-300"
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                    width={80}
                    height={112}
                  />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">{book.volumeInfo.language}</div>
                  <div className="mt-1 text-sm font-bold">{book.volumeInfo.title}</div>
                  <div className="mt-2 text-xs text-gray-400">{book.volumeInfo.subtitle}</div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="flex pt-40 px-6 justify-center items-center font-bold text-md text-gray-400 text-center">
          キーワードに一致する本が
          <br />
          見つかりませんでした
        </div>
      )}
    </div>
  )
}
