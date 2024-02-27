'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function LibrarySection() {
  return (
    <div className="mt-[200px] flex w-full flex-col justify-center px-6">
      <Title title="Get book data from API by search" />
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni saepe eaque aut eum, explicabo voluptatum animi veritatis aperiam labore perspiciatis
        repudiandae sint repellat velit ullam doloribus officia maxime soluta atque?
      </Description>
      <Preview />
    </div>
  )
}

function Title({ title }: { title: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <h2
      className="p-6 text-center text-[40px] font-extrabold leading-none tracking-tighter text-[#171717] lg:text-[48px]"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
      }}
    >
      {title}
    </h2>
  )
}

function Description({ children }: { children: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      className="mx-auto w-full max-w-[800px]"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
      }}
    >
      <p className="py-6 text-center text-[16px] leading-[1.8] text-[#666] lg:text-[18px]">{children}</p>
    </div>
  )
}

function Preview() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  })
  const transform = useTransform(scrollYProgress, [0, 1], ['scale(1.5) translateY(20%)', 'scale(1) translateY(0%)'])

  return (
    <motion.div ref={ref} style={{ transformOrigin: 'center', transform: transform, willChange: 'transform' }}>
      <div className="mx-auto mt-[80px] flex h-[200px] w-full flex-col overflow-hidden rounded-[16px] border border-[#ebebeb] shadow-sm lg:h-[490px] lg:w-[700px]">
        <div className="flex h-10 w-full items-center gap-x-2 border-b border-[#ebebeb] bg-[#171717] px-6">
          <div className="h-2 w-2 rounded-full bg-[#ebebeb]"></div>
          <div className="h-2 w-2 rounded-full bg-[#ebebeb]"></div>
          <div className="h-2 w-2 rounded-full bg-[#ebebeb]"></div>
        </div>
        <div className="relative h-full w-full overflow-hidden bg-white">
          <Image src="/preview-pc.png" alt="default" width={1400} height={980} />
        </div>
      </div>
    </motion.div>
  )
}
