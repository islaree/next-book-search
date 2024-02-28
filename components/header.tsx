'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

interface HeaderProps {
  isActive: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}

export default function Header({ isActive, onClick }: HeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-30 flex w-full justify-center bg-white px-6">
        <div className="flex h-16 w-full max-w-[1400px] items-center justify-between lg:justify-start lg:gap-x-10">
          <Link href="/">
            <Image src="/icons/icon-logo.svg" alt="logo" width={0} height={0} className="h-auto w-6" priority={true} />
          </Link>
          <div className="mr-[-24px] flex flex-col items-center justify-center lg:hidden">
            <div onClick={onClick} className="flex h-16 w-16 items-center justify-center">
              <RiMenuFill className="h-6 w-6" />
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-4">
            <Link href="/search" className="text-sm">
              検索する
            </Link>
            <Link href="/library" className="text-sm">
              マイライブラリ
            </Link>
          </div>
        </div>
      </header>
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-full bg-black/50 transition-all duration-500 ${isActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={onClick}
      ></div>
      <div
        className={`fixed right-0 top-0 z-50 h-[100vh] w-3/4 border-l border-gray-200 bg-white shadow-md transition-all duration-500 ${isActive ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div>
          <div className="flex h-16 w-full items-center justify-between border-b border-gray-200">
            <div onClick={onClick}>
              <Link href="/" className="flex items-center gap-x-1 pl-6">
                <Image src="/icons/icon-logo.svg" alt="logo" width={0} height={0} className="h-auto w-6" />
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
