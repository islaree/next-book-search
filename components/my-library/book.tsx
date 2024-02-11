import { cache } from 'react'

const getData = cache(async (bookId: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
  const data = await res.json()
  return data
})

export default async function Book({ id }: { id: string }) {
  const data = await getData(id)

  return (
    <>
      <div>{data.volumeInfo.title}</div>
    </>
  )
}
