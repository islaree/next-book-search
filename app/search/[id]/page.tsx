import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import Book from '@/components/server/book'

export default function Library({ params }: { params: { id: string } }) {
  return (
    <div className="relative">
      <Book id={params.id} />
    </div>
  )
}
