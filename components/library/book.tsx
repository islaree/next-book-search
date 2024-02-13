import { cache } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const getData = cache(async (bookId: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
  const data = await res.json()
  return data
})

export default async function Book({ id }: { id: string }) {
  const data = await getData(id)

  return (
    <Link href={`/search/${id}`}>
      <div className="flex gap-x-2">
        <div className="shrink-0">
          {data.volumeInfo.hasOwnProperty('imageLinks') ? (
            <Image
              className="h-auto w-full rounded border border-slate-200"
              src={data.volumeInfo.imageLinks.thumbnail}
              width={80}
              height={112}
              alt={data.volumeInfo.title}
            />
          ) : (
            <div>not image</div>
          )}
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">{data.volumeInfo.title}</div>
          <div className="mt-2 text-xs text-slate-500">寄稿者 : {data.volumeInfo.authors}</div>
          <div className="mt-1 text-xs text-slate-500">出版社 : {data.volumeInfo.publisher}</div>
        </div>
      </div>
    </Link>
  )
}
