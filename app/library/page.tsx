import { LibraryList } from '@/components/library-list'

export default function LibraryPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <h1 className="mt-6 px-6 text-2xl font-bold text-slate-900">マイライブラリ</h1>
      <LibraryList />
    </div>
  )
}
