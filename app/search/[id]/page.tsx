import Book from '@/components/search/book'
import { Suspense } from 'react'
import Loading from '@/components/search/loading-book'

export default function Library({ params }: { params: { id: string } }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Book id={params.id} />
      </Suspense>
      <div></div>
    </>
  )
}
