import Link from 'next/link'
import Image from 'next/image'
import { RiMenuFill } from 'react-icons/ri'

export default function Header() {
  return (
    <header className="">
      <div className="flex justify-between items-center px-6 h-16 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-x-1">
          <Image src="/logo.svg" alt="logo" width={0} height={0} className="w-6 h-auto" />
          <div className="text-lg font-medium text-[#1c2b33] leading-none">Books</div>
        </Link>
        <div className="flex flex-col">
          <div>
            <RiMenuFill className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  )
}
