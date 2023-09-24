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
      className="relative h-[40rem] w-full"
    >
      <Image
        src="/assets/churchfront.jpg"
        width={0}
        height={0}
        // sizes="100vw"
        // style={{ width: "100%", height: "100%" }}
        layout="fill"
        alt="church-image"
      />
      <div className="absolute top-0 flex h-full w-screen flex-col justify-center gap-8 bg-black bg-opacity-40 p-10 text-white lg:justify-end">
        <p className="text-3xl lg:text-6xl">Our Church</p>
        <p className="w-1/2 text-2xl">
          Blessed by the Rev Bishop on the 8th of March 1970. Our Parish began
          construction soon after, the church of today has undergone various
          construction project those which have added to it’s beauty and it’s
          purpose as a center of praise and worship
        </p>
      </div>
    </motion.div>
  )
}
