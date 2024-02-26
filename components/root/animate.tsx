'use client'

import React, { ReactElement, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function AnimateScale({ children }: { children: ReactElement }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], ['scale(0.8)', 'scale(1)'])

  return (
    <section>
      <div ref={ref}>
        <div>
          <motion.div style={{ transformOrigin: 'center', transform: scale, willChange: 'transform' }}>{children}</motion.div>
        </div>
      </div>
    </section>
  )
}

export function AnimateTranslateX({ children }: { children: ReactElement }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  })

  const translateX = useTransform(scrollYProgress, [0, 1], ['translateY(50%)', 'translateY(0%)'])
  const opacity = useTransform(scrollYProgress, [0, 1], ['0', '1'])

  return (
    <motion.div ref={ref} style={{ transformOrigin: 'center', transform: translateX, willChange: 'transform opacity', opacity: opacity }}>
      {children}
    </motion.div>
  )
}
