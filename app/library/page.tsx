'use client'

import { useDataContext } from '../../components/dataContext'
import Link from 'next/link'
import Image from 'next/image'

export default function LibraryPage() {
  const { data, setData } = useDataContext()

  return (
    <>
      <h1 className="mt-6 px-6 text-2xl font-bold text-slate-900">マイライブラリ</h1>
      <div className="mt-6 flex flex-col">
        {data.length > 0 ? (
          data.map((book: any) => (
            <div key={book.id} className="px-6 py-4">
              <Link href={`/search/${book.id}`}>
                <div className="flex gap-x-4">
                  <div className="shrink-0">
                    {book.thumbnail ? (
                      <Image className="h-auto w-16 rounded border border-slate-200" src={book.thumbnail} width={80} height={112} alt={book.title} />
                    ) : (
                      <div className="flex h-[90px] w-16 items-center justify-center rounded border border-slate-200 bg-slate-50 text-xs text-slate-400">
                        not image
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{book.title}</div>
                    <div className="mt-2 text-xs text-slate-500">寄稿者 : {book.authors}</div>
                    <div className="mt-1 text-xs text-slate-500">出版社 : {book.publisher}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-md px-6 text-slate-400">マイライブラリに追加した本がありません</div>
        )}
      </div>
    </>
  )
}
