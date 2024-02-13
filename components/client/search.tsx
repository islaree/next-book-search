import { ChangeEventHandler } from 'react'
import { IconContext } from 'react-icons'
import { CgSearch } from 'react-icons/cg'

export default function Search({ value, onChange }: { value: string; onChange: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <>
      <div className="p-6">
        <div className="relative">
          <input
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 shadow-sm placeholder:text-gray-400 visited:outline-emerald-400 target:outline-emerald-400 focus-within:outline-emerald-400 focus:outline-emerald-400 focus-visible:outline-emerald-400 active:outline-emerald-400"
            placeholder="本を検索する"
            value={value}
            onChange={onChange}
            type="search"
          />
          <div className="absolute left-4 top-1/2 translate-y-[-50%]">
            <IconContext.Provider value={{ color: '#9ca3af' }}>
              <CgSearch />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      {value.length > 0 && (
        <div className="flex items-center border-b border-gray-200 px-6 py-1 text-sm text-gray-500">
          <div className="max-w-[calc(100%-80px)] shrink-0 overflow-clip whitespace-nowrap">{value}</div>
          <div className="ml-1 shrink-0">の検索結果</div>
        </div>
      )}
    </>
  )
}
