import Link from 'next/link'

export default function RootPage() {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <img className="border border-gray-300 rounded-lg shadow-sm" src="demo.gif" />
      </div>
      <div className="mt-4 px-6 text-3xl text-gray-600">本を検索</div>
      <div className="mt-4 px-6 text-lg text-gray-600">
        Google Books APIを使用した本の検索機能の実装。
        <br />
      </div>
      <div className="mt-6 px-6">
        <Link href="/search" className="inline-flex px-5 py-2.5 text-md text-white font-semibold bg-emerald-500 rounded-full">
          本の検索はこちら
        </Link>
      </div>
    </>
  )
}
