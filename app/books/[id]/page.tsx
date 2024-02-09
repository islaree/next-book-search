import Link from 'next/link'
import parse from 'html-react-parser'

export default async function Library({ params }: { params: { id: string } }) {
  console.log(params)
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
  const data = await res.json()
  console.log(data)

  return (
    <div className="p-6">
      <Link href={'/'}>戻る</Link>
      <div className="flex justify-center">
        {data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('imageLinks') && (
          <img className="rounded-lg border border-gray-200" src={data.volumeInfo.imageLinks.thumbnail} width="128" height="168" />
        )}
      </div>
      <div className="mt-4 font-bold">{data.volumeInfo.title}</div>
      <div>{data.volumeInfo.subtitle && data.volumeInfo.subtitle}</div>
      <div className="text-sm text-gray-500">
        著者：{data.volumeInfo.publisher} {data.volumeInfo.publishedDate}
      </div>
      <div className="mt-4 text-md text-[#344854]">{data.hasOwnProperty('volumeInfo') && data.volumeInfo.hasOwnProperty('description') && parse(data.volumeInfo.description)}</div>
    </div>
  )
}
