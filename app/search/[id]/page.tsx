import Link from 'next/link'
import Book from '@/components/server/book'
import { IoArrowBack } from 'react-icons/io5'

export default function SearchItemPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <Link href="/search" className="inline-flex items-center gap-x-1">
        <IoArrowBack />
        <span className="leading-none text-sm">検索に戻る</span>
      </Link>
      <Book id={params.id} />
    </div>
  )
}
