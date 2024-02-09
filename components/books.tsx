import { bookItems } from '@/types/book'
import { getData } from './getVolumes'
import Link from 'next/link'

export default async function Books({ value }: { value: string }) {
  const data = await getData(value)
  let booksData = null
  if (data != null) {
    booksData = data.items
  }

  return (
    <>
      <div className="py-1 bg-gray-100 border-b border-gray-200 px-4 text-sm text-gray-500">”{value}”の検索結果</div>
      <div className="flex flex-col">
        {booksData != null ? (
          booksData.map((book: bookItems) => (
            <div key={book.id}>
              <Link href={`books/${book.id}`}>
                <div className="flex gap-x-4 p-4 border-gray-200 border-b">
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
                    <div className="text-sm font-bold">{book.volumeInfo.title}</div>
                    <div className="mt-2 text-xs text-gray-400">{book.volumeInfo.subtitle}</div>
                  </div>
                </div>
              </Link>
              {/* <img src={book.volumeInfo.imageLinks.thumbnail} /> */}
            </div>
          ))
        ) : (
          <div className="flex pt-40 justify-center items-center font-bold text-2xl text-gray-400">404 Not Found</div>
        )}
      </div>
    </>
  )
}
