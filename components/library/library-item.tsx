import Link from 'next/link'
import Image from 'next/image'

type LibraryItemProps = {
  id: string
  title: string
  thumbnail: string | null
  authors: string | null
  publisher: string | null
}

export default function LibraryItem({ book }: { book: LibraryItemProps }) {
  return (
    <Link href={`/search/${book.id}`} className="block h-full px-6 py-4 hover:bg-gray-50 hover:ring-1 hover:ring-gray-200">
      <div className="flex gap-x-4">
        <div className="shrink-0">
          {book.thumbnail ? (
            <Image
              className="h-auto w-16 rounded border border-slate-200"
              src={book.thumbnail.replace('http', 'https')}
              width={80}
              height={112}
              alt={book.title}
              unoptimized
            />
          ) : (
            <div className="flex h-[90px] w-16 items-center justify-center rounded border border-slate-200 bg-slate-50 text-xs text-slate-400">not image</div>
          )}
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">{book.title}</div>
          {book.authors && <div className="mt-2 text-xs text-slate-500">寄稿者 : {book.authors}</div>}
          {book.publisher && <div className="mt-1 text-xs text-slate-500">出版社 : {book.publisher}</div>}
        </div>
      </div>
    </Link>
  )
}
