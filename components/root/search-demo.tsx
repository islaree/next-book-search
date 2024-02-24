'use client'

import { Suspense, useState } from 'react'
import SearchResultsList from './books'
import { IconContext } from 'react-icons'
import { CgSearch } from 'react-icons/cg'

export default function SearchDemo() {
  const [value, setValue] = useState('')

  return (
    <div className="">
      <div className="p-12">
        <div className="relative">
          <input
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 shadow-sm placeholder:text-gray-400 visited:outline-emerald-400 target:outline-emerald-400 focus-within:outline-emerald-400 focus:outline-emerald-400 focus-visible:outline-emerald-400 active:outline-emerald-400"
            placeholder="本を検索する"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="search"
          />
          <div className="absolute left-4 top-1/2 translate-y-[-50%]">
            <IconContext.Provider value={{ color: '#9ca3af' }}>
              <CgSearch />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="rounded-[16px] border border-[#ebebeb] bg-white shadow-sm">
          <div className="flex gap-x-2 border-b border-[#ebebeb] p-4">
            <div className="h-2 w-2 rounded-full bg-[#ebebeb]"></div>
            <div className="h-2 w-2 rounded-full bg-[#ebebeb]"></div>
            <div className="h-2 w-2 rounded-full bg-[#ebebeb]"></div>
          </div>
          <div className="h-[400px] p-4">
            {value.length > 0 && (
              <Suspense>
                <SearchResultsList keyword={value} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
