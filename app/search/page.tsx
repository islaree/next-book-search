'use client'

import { SetStateAction, Suspense, useState } from 'react'
import Search from '@/components/search/search'
import Loading from '@/components/loading'
import Books from '@/components/search/books'

export default function SearchPage() {
  const [value, setValue] = useState('')

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  return (
    <>
      <h1 className="mt-6 px-6 text-2xl font-bold text-slate-900">検索する</h1>
      <Search value={value} onChange={handleChange} />
      {value.length > 0 && (
        <Suspense fallback={<Loading />}>
          <Books keyword={value} />
        </Suspense>
      )}
    </>
  )
}
