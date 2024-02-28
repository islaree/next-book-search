'use client'

import Image from 'next/image'
import { wrap } from '@motionone/utils'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion'

function Card({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="h-auto w-[80px] overflow-hidden rounded-[8px] border border-[#ebebeb] bg-gray-200 shadow-md lg:w-[200px]">
      <Image src={imgUrl} alt="slider item content" width={200} height={250} />
    </div>
  )
}

function Cards({ baseVelocity = 100 }: { baseVelocity: number }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax mb-6 lg:mb-10">
      <motion.div className="flex gap-x-4" style={{ x }}>
        <Card imgUrl="/slides/slide1.jpg" />
        <Card imgUrl="/slides/slide2.jpg" />
        <Card imgUrl="/slides/slide3.jpg" />
        <Card imgUrl="/slides/slide4.jpg" />
        <Card imgUrl="/slides/slide5.jpg" />
        <Card imgUrl="/slides/slide6.jpg" />
        <Card imgUrl="/slides/slide1.jpg" />
        <Card imgUrl="/slides/slide2.jpg" />
        <Card imgUrl="/slides/slide3.jpg" />
        <Card imgUrl="/slides/slide4.jpg" />
        <Card imgUrl="/slides/slide5.jpg" />
        <Card imgUrl="/slides/slide6.jpg" />
        <Card imgUrl="/slides/slide1.jpg" />
        <Card imgUrl="/slides/slide2.jpg" />
        <Card imgUrl="/slides/slide3.jpg" />
        <Card imgUrl="/slides/slide4.jpg" />
        <Card imgUrl="/slides/slide5.jpg" />
        <Card imgUrl="/slides/slide6.jpg" />
        <Card imgUrl="/slides/slide1.jpg" />
        <Card imgUrl="/slides/slide2.jpg" />
        <Card imgUrl="/slides/slide3.jpg" />
        <Card imgUrl="/slides/slide4.jpg" />
        <Card imgUrl="/slides/slide5.jpg" />
        <Card imgUrl="/slides/slide6.jpg" />
      </motion.div>
    </div>
  )
}

export default function ParallaxSection() {
  return (
    <div className="mt-[80px] lg:mt-[200px]">
      <Cards baseVelocity={-5} />
      <Cards baseVelocity={5} />
    </div>
  )
}
