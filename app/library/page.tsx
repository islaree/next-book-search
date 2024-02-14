'use client'

import Book from '@/components/library/book'
import { Suspense } from 'react'
import { useDataContext } from '../../components/dataContext'
import Loading from '@/components/loading'

export default function LibraryPage() {
  const { data, setData } = useDataContext()

  return (
    <>
      <h1 className="mt-6 px-6 text-2xl font-bold text-slate-900">マイライブラリ</h1>
      <div className="mt-6 flex flex-col">
        {data.length > 0 ? (
          data.map((id: string) => (
            <div key={id} className="px-6 py-4">
              <Suspense fallback={<Loading />}>
                <Book id={id} />
              </Suspense>
            </div>
          ))
        ) : (
          <div className="text-md px-6 text-slate-400">マイライブラリに追加した本がありません</div>
        )}
      </div>
    </>
  )
}
