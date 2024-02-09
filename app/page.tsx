'use client'

import Books from '@/components/books'
import { Suspense, useState } from 'react'
import Loading from '@/dashboard/loading'

export default function Home() {
  const [value, setValue] = useState('')
  const [keyword, setKeyword] = useState('')

  function handleClick() {
    setKeyword(value)
    setValue('')
  }

  return (
    <>
      <main>
        <div className="pt-10 px-4 border-b border-gray-200">
          <div className="mb-2 text-xs text-gray-400">キーワードから本を検索する</div>
          <input
            className="w-full px-4 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-lg focus:outline-emerald-400 active:outline-emerald-400 focus-visible:outline-emerald-400"
            placeholder="検索"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex justify-center pb-4">
            <button className="mt-4 px-4 py-2 bg-gray-900 rounded-lg shadow-md text-sm text-white" onClick={handleClick}>
              検索する
            </button>
          </div>
        </div>
        {keyword.length > 0 && (
          <Suspense fallback={<Loading />}>
            <Books value={keyword} />
          </Suspense>
        )}
      </main>
    </>
  )
}
