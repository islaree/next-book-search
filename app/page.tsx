import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden z-10">
        <img src="beams-home@95.jpg" className="absolute z-[-1] w-[80rem] max-w-none left-[-10rem] top-[-4rem]" />
        <div className="pt-40 px-6">
          <div className="font-extrabold text-4xl text-gray-900">本が見つかる</div>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Visually-stunning, easy to customize site templates built with React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how experts build
            real websites with Tailwind CSS.
          </p>
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
