'use client'

import Link from 'next/link'
import Image from 'next/image'
import { RiMenuFill } from 'react-icons/ri'
import { MouseEventHandler } from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function Header({ isActive, onClick }: { isActive: boolean; onClick: MouseEventHandler<HTMLDivElement> }) {
  return (
    <>
      <header className="sticky top-0 z-30 bg-white">
        <div className="flex h-16 items-center justify-between pl-6">
          <Link href="/" className="flex items-center gap-x-1">
            <Image src="/logo.svg" alt="logo" width={0} height={0} className="h-auto w-6" priority={true} />
            <div className="text-md font-bold leading-none text-[#1c2b33]">bookmark</div>
          </Link>
          <div className="flex flex-col items-center justify-center">
            <div onClick={onClick} className="flex h-16 w-16 items-center justify-center">
              <RiMenuFill className="h-6 w-6" />
            </div>
          </div>
        </div>
      </header>
      {isActive && <div className="fixed left-0 top-0 z-40 h-screen w-full bg-black/50" onClick={onClick}></div>}
      <div
        className={`fixed right-0 top-0 z-50 h-[100vh] w-3/4 border-l border-gray-200 bg-white shadow-md transition-all duration-500 ${isActive ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div>
          <div className="flex h-16 w-full items-center justify-between border-b border-gray-200">
            <div onClick={onClick}>
              <Link href="/" className="flex items-center gap-x-1 pl-6">
                <Image src="/logo.svg" alt="logo" width={0} height={0} className="h-auto w-6" />
                <div className="text-md font-bold leading-none text-[#1c2b33]">bookmark</div>
              </Link>
            </div>
            <div onClick={onClick} className="ml-auto flex h-16 w-16 items-center justify-center">
              <RxCross2 className="h-6 w-6" />
            </div>
          </div>
          <div className="flex flex-col gap-y-6 p-6">
            <div onClick={onClick}>
              <Link href="/search" className="font-semibold">
                検索する
              </Link>
            </div>
            <div onClick={onClick}>
              <Link href="/library" className="font-semibold">
                マイライブラリ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
