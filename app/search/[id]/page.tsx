import Link from 'next/link'
import parse from 'html-react-parser'
import { IoArrowBack } from 'react-icons/io5'
import { RiFolderAddFill } from 'react-icons/ri'
import Book from '@/components/server/book'

export default function Library({ params }: { params: { id: string } }) {
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
