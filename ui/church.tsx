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
      className="relative h-[calc(100vh-100px)] w-full"
    >
      <Image
        src="/assets/churchfront.jpg"
        fill
        className="object-cover object-right md:object-center"
        alt="church-image"
      />
      <div className="absolute right-0 top-0 flex h-full w-screen flex-col items-center justify-center gap-8 bg-black/40 p-10  text-white md:items-start">
        <p className="text-3xl lg:text-6xl">Our Church</p>
        <p className="w-1/2 text-xl md:text-2xl">
          Blessed by the Rev Bishop on the 8th of March 1970. Our Parish began
          construction soon after, the church of today has undergone various
          construction project those which have added to it’s beauty and it’s
          purpose as a center of praise and worship
        </p>
      </div>
    </motion.div>
  )
}
