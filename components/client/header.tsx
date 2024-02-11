'use client'

import Link from 'next/link'
import Image from 'next/image'
import { RiMenuFill } from 'react-icons/ri'
import { MouseEventHandler } from 'react'

export default function Header({ isActive, onClick }: { isActive: boolean; onClick: MouseEventHandler<HTMLDivElement> }) {
  return (
    <header className="">
      <div className="flex justify-between items-center px-6 h-16 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-x-1">
          <Image src="/logo.svg" alt="logo" width={0} height={0} className="w-6 h-auto" />
          <div className="text-lg font-semibold text-[#1c2b33] leading-none">bookshelf</div>
        </Link>
        <div className="flex flex-col">
          <div onClick={onClick}>
            <RiMenuFill className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className={`fixed flex flex-col z-20 w-full h-[100vh] bg-white transition-all delay-200 ${isActive ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div onClick={onClick}>
          <Link href="/">ホーム</Link>
        </div>
        <div onClick={onClick}>
          <Link href="/search">検索</Link>
        </div>
      </div>
    </header>
  )
}
