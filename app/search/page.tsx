'use client'

import { SetStateAction, Suspense, useState } from 'react'
import Search from '@/components/client/search'
import Loading from '@/components/client/loading'
import SearchingWord from '@/components/client/searching-word'
import Books from '@/components/server/books'

export default function SearchPage() {
  const [value, setValue] = useState('')

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Search value={value} onChange={handleChange} />
      <SearchingWord keyword={value} />
      {value.length > 0 && (
        <Suspense fallback={<Loading />}>
          <Books keyword={value} />
        </Suspense>
      )}
    </>
  )
}
