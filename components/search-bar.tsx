'use client'

// 検索文字列の管理とデータ取得

import { getBooksData } from '@/lib/api'
import { useBookStore } from '@/store/books'
import { useSearchStore } from '@/store/store'
import { Search } from 'lucide-react'

export const SearchBar = () => {
  const { setBooks } = useBookStore()
  const { searchTerm, setSearchTerm } = useSearchStore()

  const handleChange = async (e: any) => {
    setSearchTerm(e.target.value)
    if (searchTerm !== e.target.value && e.target.value.length > 0) {
      const data = await getBooksData(e.target.value)
      setBooks(data.items)
    } else {
      setBooks([])
    }
  }

  return (
    <div className="relative">
      <input
        type="search"
        value={searchTerm}
        placeholder="本を検索する"
        className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 shadow-sm placeholder:text-gray-400 visited:outline-emerald-400 target:outline-emerald-400 focus-within:outline-emerald-400 focus:outline-emerald-400 focus-visible:outline-emerald-400 active:outline-emerald-400"
        onChange={handleChange}
      />
      <div className="absolute left-4 top-1/2 translate-y-[-50%]">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  )
}
