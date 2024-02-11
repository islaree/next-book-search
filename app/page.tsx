import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden z-10">
        <img src="logo.svg" className="absolute z-[-1] w-[16rem] max-w-none left-[15rem] top-[-8rem]" />
        <div className="pt-40 px-6">
          <div className="font-medium text-md text-emerald-400">using Google Books API</div>
          <div className="mt-4 font-extrabold text-4xl text-gray-900">本が見つかる</div>
          <div className="text-lg text-gray-600 mt-4">
            世界には本がたくさんあります。あなたが知っている本を検索して情報を確認することができます。
            <br />
          </div>
        </div>
        <div className="mt-8 px-6">
          <Link href="/search" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700">
            検索で本を探す
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 my-16">
          <div className="flex gap-x-4 px-6">
            <div className="shrink-0">
              <img src="logo.svg" className="shadow-sm border border-gray-200 bg-gray-50 rounded w-10 p-2.5" />
            </div>
            <div className="">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">検索はとっても簡単</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Each template is a well-structured Next.js project, giving you a codebase that’s productive and enjoyable to work in.</p>
            </div>
          </div>
          <div className="flex gap-x-4 px-6">
            <div className="shrink-0">
              <img src="logo.svg" className="shadow-sm border border-gray-200 bg-gray-50 rounded w-10 p-2.5" />
            </div>
            <div className="">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">お気に入りを保存</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Each template is a well-structured Next.js project, giving you a codebase that’s productive and enjoyable to work in.</p>
            </div>
          </div>
          <div className="flex gap-x-4 px-6">
            <div className="shrink-0">
              <img src="logo.svg" className="shadow-sm border border-gray-200 bg-gray-50 rounded w-10 p-2.5" />
            </div>
            <div className="">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">Built with modern technologies</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Each template is a well-structured Next.js project, giving you a codebase that’s productive and enjoyable to work in.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 h-40 bg-gray-50"></div>
      </div>
    </>
  )
}
