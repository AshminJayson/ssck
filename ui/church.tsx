"use client"

import { once } from "events"
import Image from "next/image"
import { motion } from "framer-motion"

export function Church() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div className="relative h-[50vh] w-full md:h-[80vh]">
        <Image
          src="/assets/churchfront.jpg"
          fill
          className="object-cover object-right"
          alt="church-image"
        />
      </motion.div>
      <div className="flex w-screen flex-col items-center justify-center gap-8 bg-secondary p-10 text-white md:items-start">
        <p className="text-3xl lg:text-6xl">Our Church</p>
        <p className="w-full text-xl md:w-1/2 md:text-2xl">
          Blessed by the Rev Bishop on the 8th of March 1970. Our Parish began
          construction soon after, the church of today has undergone various
          construction project those which have added to it’s beauty and it’s
          purpose as a center of praise and worship
        </p>
      </div>
    </motion.div>
  )
}
