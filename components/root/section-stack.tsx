'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function StackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="mt-[100px]">
      <h2
        className="p-6 text-center text-[40px] font-extrabold leading-none tracking-tighter text-[#171717] lg:text-[48px]"
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateY(100px)',
          opacity: isInView ? 1 : 0,
          transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
        }}
      >
        Development
      </h2>
      <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-x-4 gap-y-4 px-6 lg:grid-cols-3 lg:px-10">
        <Card title="Next.js" imgUrl="/icons/icon-nextjs.png">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quo aliquam nemo excepturi perferendis vero nulla hic, iusto voluptas, cumque rem
          similique quisquam ex repellat ut iure sequi provident incidunt.
        </Card>
        <Card title="React" imgUrl="/icons/icon-react.png">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minima aliquam recusandae ex quibusdam totam, sed, dolores dolor rem sunt quos.
          Nesciunt harum earum animi et voluptate tempora eligendi officia!
        </Card>
        <Card title="TypeScript" imgUrl="/icons/icon-ts.png">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus possimus quaerat consectetur ipsa laudantium reiciendis ducimus illo vero, repudiandae
          aliquid, soluta magni dolorum, eveniet iusto nam optio. Corporis, asperiores omnis.
        </Card>
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  children: string
  imgUrl: string
}

function Card({ title, children, imgUrl }: CardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      className="rounded-lg border border-[#ebebeb] bg-white px-6 py-8 shadow-sm"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
      }}
    >
      <div className="h-10 w-10">
        <Image src={imgUrl} alt={title} width={100} height={100} />
      </div>
      <h3 className="mt-6 text-[20px] font-bold text-[#171717]">{title}</h3>
      <p className="mt-2 text-sm text-[#666]">{children}</p>
    </div>
  )
}
