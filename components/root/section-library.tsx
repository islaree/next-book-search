'use client'

import Image from "next/image"
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'


export default function LibrarySection() {
    return (
        <div className="mt-[200px] flex justify-center flex-col w-full px-6">
            <Title title="You can keep your favorite books" />
            <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni saepe eaque aut eum, explicabo voluptatum animi veritatis aperiam labore perspiciatis repudiandae sint repellat velit ullam doloribus officia maxime soluta atque?
            </Description>
            <Preview />
        </div>
    )
}

function Title({title}: {title: string}){
    return (
        <h2 className="p-6 text-center text-[40px] font-extrabold leading-none tracking-tighter text-[#171717] lg:text-[48px]">{title}</h2>
    )
}

function Description({children}: {children: string}){
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    return (
        <div className="max-w-[800px] mx-auto w-full" ref={ref} style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
          }}>
            <p className="text-center py-6 text-[16px] lg:text-[18px] leading-[1.8] text-[#666]">{children}</p>
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
    <motion.div ref={ref} style={{transformOrigin: "center", transform: transform, willChange: "transform"}}>
        <div className="flex flex-col overflow-hidden w-full h-[200px] lg:w-[700px] mx-auto lg:h-[490px] border border-[#ebebeb] rounded-[16px] shadow-sm mt-[80px]">
            <div className="flex gap-x-2 items-center w-full h-10 border-b border-[#ebebeb] bg-[#171717] px-6">
                <div className="w-2 h-2 bg-[#ebebeb] rounded-full"></div>
                <div className="w-2 h-2 bg-[#ebebeb] rounded-full"></div>
                <div className="w-2 h-2 bg-[#ebebeb] rounded-full"></div>
            </div>
            <div className="w-full h-full bg-white relative overflow-hidden">
                    <Image src="/preview-pc.png" alt="default" width={1400} height={980} />
            </div>
        </div>
    </motion.div>
  )
}