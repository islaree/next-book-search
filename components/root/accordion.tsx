'use client'

import { useState } from 'react'

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageUrl = ['/a.png', '/b.png']

  return (
    <div className="flex max-h-[400px] overflow-hidden rounded-lg bg-gray-50 p-6">
      <div className="w-1/2">
        <Panel title="本の検索" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
          With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel title="マイライブラリ" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ab. Alias veritatis molestias laboriosam placeat adipisci in, fuga repellendus,
          fugiat libero, nostrum sapiente id eius nobis nemo quo minima voluptatum.
        </Panel>
      </div>
      <div className="w-1/2 pt-8">
        <div className="max-w-lg border-l border-r border-t border-gray-200">
          <Picture url={imageUrl[activeIndex]} />
        </div>
      </div>
    </div>
  )
}

function Panel({ title, children, isActive, onShow }: { title: string; children: any; isActive: boolean; onShow: any }) {
  return (
    <div className="border-b border-gray-200">
      {isActive ? (
        <div>
          <h3 className="py-8 text-[24px] font-semibold">{title}</h3>
          <p className="text-md pb-8  text-gray-600">{children}</p>
        </div>
      ) : (
        <div className="cursor-pointer" onClick={onShow}>
          <h3 className="py-8 text-[24px] font-semibold">{title}</h3>
        </div>
      )}
    </div>
  )
}

function Picture({ url }: { url: string }) {
  return (
    <div className="mr-[-20px]">
      <img src={url} />
    </div>
  )
}
