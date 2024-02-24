'use client'

import { motion } from 'framer-motion'

export function Section({ backgroundColor, children }: { backgroundColor?: string; children: any }) {
  return (
    <section className={`${backgroundColor} overflow-hidden`}>
      <div className="mx-auto w-full max-w-[1200px] pb-[120px] pt-[160px]">
        {/* <motion.div
          variants={{
            offscreen: {
              y: 50,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'tween',
                duration: 0.8,
              },
            },
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        > */}
        {children}
        {/* </motion.div> */}
      </div>
    </section>
  )
}
