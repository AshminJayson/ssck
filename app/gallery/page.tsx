"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"

function ImageCard({ src }: { src: string }) {
  return <Image src={src} width={200} height={200} alt="alternate"></Image>
}

const images2023: any[] = [
  "/assets/2023/1.jpg",
  "/assets/2023/2.jpg",
  "/assets/2023/3.jpg",
  "/assets/2023/4.jpg",
  "/assets/2023/5.jpg",
  "/assets/2023/6.jpg",
  "/assets/2023/7.jpg",
  "/assets/2023/8.jpg",
  "/assets/2023/9.jpg",
  "/assets/2023/10.jpg",
  "/assets/2023/11.jpg",
  "/assets/2023/12.jpg",
]

function Album() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4 p-5">
      {images2023.map((imagesrc: string, idx) => (
        <ImageCard src={imagesrc} />
      ))}
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
          <AccordionContent>{/* <Album /> */}</AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2021
          </AccordionTrigger>
          <AccordionContent>{/* <Album /> */}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
