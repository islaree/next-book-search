'use client'

import Book from '@/components/my-library/book'
import { Suspense } from 'react'
import { useDataContext } from '../../components/client/dataContext'
import Loading from '@/components/client/loading'

export default function LibraryPage() {
  const { data, setData } = useDataContext()

  return (
    <>
      <h1 className="px-6 py-10 text-lg font-bold">マイライブラリ</h1>
      <div className="flex flex-col">
        {data.map((id: string) => (
          <div key={id} className="border-t border-gray-200 px-6 py-4">
            <Suspense fallback={<Loading />}>
              <Book id={id} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  )
}
