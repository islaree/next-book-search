'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { PiHeartBold } from 'react-icons/pi'
import { AiFillHeart } from 'react-icons/ai'

export default function LibraryDemo() {
  const [libs, setLibs] = useState<any[]>([])
  const data = [
    {
      id: 1,
      title: 'Book1',
      imageUrl: '/slide-item1.jpg',
    },
    {
      id: 2,
      title: 'Book2',
      imageUrl: '/slide-item1.jpg',
    },
    {
      id: 3,
      title: 'Book3',
      imageUrl: '/slide-item1.jpg',
    },
  ]

  return (
    <>
      <div className="grid grid-cols-2 gap-x-10 px-10">
        <div>
          <div className="flex rounded border border-[#ebebeb] bg-[#fafafa] p-4 shadow-sm">
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4">
                <Image className="h-auto w-16 rounded border border-gray-200" src="/slide-item1.jpg" width={128} height={168} alt="thumbnail" />
                <div>
                  <div className="mb-2">Book1</div>
                  {!libs.find((data) => data.id == 1) ? (
                    <button onClick={() => setLibs([...libs, data[0]])} className="flex items-center gap-x-1">
                      <IconContext.Provider value={{ color: '#666', size: '16px' }}>
                        <PiHeartBold />
                      </IconContext.Provider>
                      <div className="text-sm font-medium text-[#666]">マイライブラリに追加</div>
                    </button>
                  ) : (
                    <button onClick={() => setLibs(libs.filter((lib: any) => lib.id != data[0].id))} className="flex items-center gap-x-1">
                      <IconContext.Provider value={{ color: '#eb4667', size: '16px' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                      <div className="text-sm font-medium text-[#eb4667]">マイライブラリから削除</div>
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-x-4">
                <Image className="h-auto w-16 rounded border border-gray-200" src="/slide-item1.jpg" width={128} height={168} alt="thumbnail" />
                <div>
                  <div>Book2</div>
                  {!libs.find((data) => data.id == 2) ? (
                    <button onClick={() => setLibs([...libs, data[1]])} className="flex items-center gap-x-1">
                      <IconContext.Provider value={{ color: '#666', size: '16px' }}>
                        <PiHeartBold />
                      </IconContext.Provider>
                      <div className="text-sm font-medium text-[#666]">マイライブラリに追加</div>
                    </button>
                  ) : (
                    <button onClick={() => setLibs(libs.filter((lib: any) => lib.id != data[1].id))} className="flex items-center gap-x-1">
                      <IconContext.Provider value={{ color: '#eb4667', size: '16px' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                      <div className="text-sm font-medium text-[#eb4667]">マイライブラリから削除</div>
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-x-4">
                <Image className="h-auto w-16 rounded border border-gray-200" src="/slide-item1.jpg" width={128} height={168} alt="thumbnail" />
                <div>
                  <div>Book3</div>
                  {!libs.find((data) => data.id == 3) ? (
                    <button onClick={() => setLibs([...libs, data[2]])} className="flex items-center gap-x-1">
                      <IconContext.Provider value={{ color: '#666', size: '16px' }}>
                        <PiHeartBold />
                      </IconContext.Provider>
                      <div className="text-sm font-medium text-[#666]">マイライブラリに追加</div>
                    </button>
                  ) : (
                    <button onClick={() => setLibs(libs.filter((lib: any) => lib.id != data[2].id))} className="flex items-center gap-x-1">
                      <IconContext.Provider value={{ color: '#eb4667', size: '16px' }}>
                        <AiFillHeart />
                      </IconContext.Provider>
                      <div className="text-sm font-medium text-[#eb4667]">マイライブラリから削除</div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded border border-[#ebebeb]">
          <div className="flex flex-col gap-y-4 p-4">
            {libs.map((lib: any) => (
              <div key={lib.id} className="flex gap-x-4">
                <Image className="h-auto w-16 rounded border border-gray-200" src={lib.imageUrl} width={128} height={168} alt="thumbnail" />
                <div>
                  <div className="mb-2">{lib.title}</div>
                  <div>{lib.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
