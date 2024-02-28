'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PreviewSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const transform = useTransform(scrollYProgress, [0, 1], ['scale(1.5) translateY(20%)', 'scale(1) translateY(0%)'])

  return (
    <div className="w-full overflow-hidden py-[200px]">
      <h2 className="p-6 text-center text-[40px] font-extrabold leading-none tracking-tighter text-[#171717] lg:text-[48px]">
        Lets Go on a Journey to Find a Book
      </h2>
      <motion.div
        className="relative mt-14 flex w-full justify-center gap-x-6 overflow-hidden"
        ref={ref}
        style={{ transformOrigin: 'center', transform: transform, willChange: 'transform' }}
      >
        <div className="flex w-[400px] shrink-0 flex-col gap-y-6">
          <div className="overflow-hidden rounded border border-[#ebebeb] shadow-sm">
            <Image src="/images/preview-pc.png" width={1280} height={1024} alt="a" />
          </div>
          <div className="overflow-hidden rounded border border-[#ebebeb] shadow-sm">
            <Image src="/images/preview-pc.png" width={1280} height={1024} alt="a" />
          </div>
        </div>
        <div className="flex w-[300px] shrink-0 flex-col gap-y-6 overflow-hidden rounded border border-[#ebebeb] shadow-sm">
          <div className="bg-black">
            <Image src="/images/preview-sp.jpg" width={600} height={1200} alt="a" />
          </div>
        </div>
        <div className="flex w-[400px] shrink-0 flex-col gap-y-6">
          <div className="overflow-hidden rounded border border-[#ebebeb] shadow-sm">
            <Image src="/images/preview-pc.png" width={1280} height={1024} alt="a" />
          </div>
          <div className="flex gap-x-6">
            <div className="w-1/2">
              <div className="overflow-hidden rounded border border-[#ebebeb] shadow-sm">
                <Image src="/images/preview-pc.png" width={1280} height={1024} alt="a" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="overflow-hidden rounded border border-[#ebebeb] shadow-sm">
                <Image src="/images/preview-pc.png" width={1280} height={1024} alt="a" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[400px] shrink-0 flex-col gap-y-6">
          <div className="overflow-hidden rounded border border-[#ebebeb] shadow-sm">
            <Image src="/images/preview-pc.png" width={1280} height={1024} alt="a" />
          </div>
          <div className="overflow-hidden rounded border border-[#ebebeb] shadow-sm">
            <Image src="/images/preview-pc.png" width={1280} height={1024} alt="a" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[400px] w-screen bg-gradient-to-b from-transparent to-[#fafafa] to-70%"></div>
      </motion.div>
      <div className="flex items-center justify-center gap-x-4">
        <Link href="/search" className="font-meidum rounded-lg bg-[#171717] px-3.5 py-4 text-sm text-white opacity-100 shadow-sm hover:opacity-70">
          本を検索する
        </Link>
        <Link
          href="/library"
          className="font-meidum rounded-lg border border-[#ebebeb] bg-white px-3.5 py-4 text-sm text-[#171717] opacity-100 shadow-sm hover:opacity-70"
        >
          マイライブラリを見る
        </Link>
      </div>
    </div>
  )
}
