import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import Book from '@/components/server/book'

export default function Library({ params }: { params: { id: string } }) {
  return (
    <div className="relative">
      <Book id={params.id} />
      <Link href="/search" className="inline-flex items-center gap-x-1">
        <IoArrowBack />
        <span className="leading-none text-sm">検索に戻る</span>
      </Link>
    </div>
  )
}
