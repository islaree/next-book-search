import { cache } from 'react'
import parse from 'html-react-parser'
import LikeButton from '@/components/client/like-button'

const getData = cache(async (bookId: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
  const data = await res.json()
  return data
})

export default async function Book({ id }: { id: string }) {
  const data = await getData(id)
  console.log(data)

  return (
    <>
      <div className="border-b border-gray-200 overflow-hidden relative">
        <div className="w-full h-56 bg-gray-300 overflow-hidden flex justify-center items-center opacity-60">
          <img className="w-full scale-150 blur" src={data.volumeInfo.imageLinks.thumbnail} alt="" />
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          {data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('imageLinks') && (
            <img className="rounded-lg border border-gray-200" src={data.volumeInfo.imageLinks.thumbnail} width="128" height="168" />
          )}
        </div>
      </div>
      <div className="px-4">
        <div className="mt-8 text-xl text-slate-900 font-bold">{data.volumeInfo.title}</div>
        <div className="mt-2">
          <LikeButton id={id} />
        </div>
        {data.volumeInfo.hasOwnProperty('subtitle') && <div className="text-sm text-gray-500">{data.volumeInfo.subtitle}</div>}

        <ul className="mt-4">
          {data.volumeInfo.hasOwnProperty('publishedDate') && <li className="text-sm text-gray-500">ページ数{data.volumeInfo.pageCount}</li>}
          {data.volumeInfo.hasOwnProperty('publishedDate') && <li className="text-sm text-gray-500">公開日: {data.volumeInfo.publishedDate}</li>}
          {data.volumeInfo.hasOwnProperty('publisher') && <li className="text-sm text-gray-500">出版社: {data.volumeInfo.publisher}</li>}
          {data.volumeInfo.hasOwnProperty('authors') && <li className="text-sm text-gray-500">寄稿者: {data.volumeInfo.authors}</li>}
        </ul>

        {data.saleInfo.hasOwnProperty('buyLink') && (
          <a href={data.saleInfo.buyLink} target="_blank" className="inline-flex px-2 py-1 text-sm text-white bg-emerald-500 rounded">
            Google Playで購入する
          </a>
        )}

        <div>本の概要</div>
        <div className="mt-4 text-sm text-[#344854]">{data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('description') && parse(data.volumeInfo.description)}</div>
      </div>
    </>
  )
}
