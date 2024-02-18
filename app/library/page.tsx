'use client'

import { useDataContext } from '../../components/dataContext'
import LibraryList from '@/components/library/library-list'

export default function LibraryPage() {
  const { data, setData } = useDataContext()

  return (
    <>
      <h1 className="mt-6 px-6 text-2xl font-bold text-slate-900">マイライブラリ</h1>
      <LibraryList data={data} />
    </>
  )
}
