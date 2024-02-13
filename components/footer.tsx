import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center border-t border-gray-200 px-6 py-10">
        <div className="items-cente flex">
          <Image src="/logo.svg" alt="logo" width={0} height={0} className="h-auto w-4" />
          <span>Books</span>
        </div>
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">©2024 Tailwind Labs Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
