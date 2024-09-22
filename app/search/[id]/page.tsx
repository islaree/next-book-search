import Link from 'next/link'
import { Suspense } from 'react'
import { BookDetail } from '@/components/book-detail'

export default async function Library({ params }: { params: { id: string } }) {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="mx-6">
        <Link href="/search">← 戻る</Link>
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <BookDetail id={params.id} />
      </Suspense>
    </div>
  )
}
