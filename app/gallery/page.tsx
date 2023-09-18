"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"

function ImageCard() {
  return <Image src="" width={100} height={100} alt="something"></Image>
}

function Album() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4 p-5">
      <ImageCard />
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="w-full px-10 pt-40 text-2xl">
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        <AccordionItem
          value="item-1"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2023
          </AccordionTrigger>
          <AccordionContent>
            <Album />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2022
          </AccordionTrigger>
          <AccordionContent>
            <Album />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2021
          </AccordionTrigger>
          <AccordionContent>
            <Album />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
