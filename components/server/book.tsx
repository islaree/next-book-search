import { cache } from 'react'
import parse from 'html-react-parser'

const getData = cache(async (bookId: string) => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    const data = await res.json()
    return data
})

export default async function Book({id}: {id:string}) {
    const data = await getData(id)
    console.log(data)

    return (
        <>
            <div className="mt-4 font-bold">{data.volumeInfo.title}</div>
            <div>{data.volumeInfo.subtitle && data.volumeInfo.subtitle}</div>
                {data.saleInfo.hasOwnProperty("buyLink") && (
                <a href={data.saleInfo.buyLink} target='_blank' className='inline-flex px-2 py-1 text-sm text-white bg-emerald-500 rounded'>Google Playで購入する</a>
                )}
            <div className="text-sm text-gray-500">
                著者：{data.volumeInfo.publisher} {data.volumeInfo.publishedDate}
            </div>
            <div className="flex justify-center">
                {data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('imageLinks') && (
                <img className="rounded-lg border border-gray-200" src={data.volumeInfo.imageLinks.thumbnail} width="128" height="168" />
                )}
            </div>
            <div>ページ数{data.volumeInfo.pageCount}</div>
            <div className="mt-4 text-md text-[#344854]">{data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('description') && parse(data.volumeInfo.description)}</div>
        </>
    )
}