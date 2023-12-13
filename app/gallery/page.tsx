"use client"

import fs from "fs"
import path from "path"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"

function ImageCard({ src }: { src: string }) {
  return (
    <Image
      priority
      src={src}
      width={400}
      height={400}
      className="rounded-lg"
      alt="alternate"
    />
  )
}

const images2023: string[] = [
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

function Album2023() {
  return (
    <div className="columns-1 space-y-4 pt-4 sm:columns-2 md:columns-3 lg:columns-4">
      {images2023.map((imagesrc: string, idx) => (
        <ImageCard src={imagesrc} key={idx} />
      ))}
    </div>
  )
}

const imagesLaFamilia: string[] = [
  "/assets/lafamilia/LaFamilia (1).jpg",
  "/assets/lafamilia/LaFamilia (2).jpg",
  "/assets/lafamilia/LaFamilia (3).jpg",
  "/assets/lafamilia/LaFamilia (4).jpg",
  "/assets/lafamilia/LaFamilia (5).jpg",
  "/assets/lafamilia/LaFamilia (6).jpg",
  "/assets/lafamilia/LaFamilia (7).jpg",
  "/assets/lafamilia/LaFamilia (8).jpg",
  "/assets/lafamilia/LaFamilia (9).jpg",
  "/assets/lafamilia/LaFamilia (10).jpg",
  "/assets/lafamilia/LaFamilia (11).jpg",
  "/assets/lafamilia/LaFamilia (12).jpg",
  "/assets/lafamilia/LaFamilia (13).jpg",
  "/assets/lafamilia/LaFamilia (14).jpg",
  "/assets/lafamilia/LaFamilia (15).jpg",
  "/assets/lafamilia/LaFamilia (16).jpg",
  "/assets/lafamilia/LaFamilia (17).jpg",
  "/assets/lafamilia/LaFamilia (18).jpg",
  "/assets/lafamilia/LaFamilia (19).jpg",
  "/assets/lafamilia/LaFamilia (20).jpg",
  "/assets/lafamilia/LaFamilia (21).jpg",
  "/assets/lafamilia/LaFamilia (22).jpg",
  "/assets/lafamilia/LaFamilia (23).jpg",
  "/assets/lafamilia/LaFamilia (24).jpg",
  "/assets/lafamilia/LaFamilia (25).jpg",
  "/assets/lafamilia/LaFamilia (26).jpg",
  "/assets/lafamilia/LaFamilia (27).jpg",
  "/assets/lafamilia/LaFamilia (28).jpg",
  "/assets/lafamilia/LaFamilia (29).jpg",
  "/assets/lafamilia/LaFamilia (30).jpg",
  "/assets/lafamilia/LaFamilia (31).jpg",
  "/assets/lafamilia/LaFamilia (32).jpg",
  "/assets/lafamilia/LaFamilia (33).jpg",
  "/assets/lafamilia/LaFamilia (34).jpg",
  "/assets/lafamilia/LaFamilia (35).jpg",
  "/assets/lafamilia/LaFamilia (36).jpg",
  "/assets/lafamilia/LaFamilia (37).jpg",
]

// function getImagesFromPublicFolder() {
//   const publicDirectory = path.join(process.cwd(), "public")
//   const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"] // Add more extensions if needed

//   const imageFiles = fs.readdirSync(publicDirectory).filter((file) => {
//     const extname = path.extname(file).toLowerCase()
//     return imageExtensions.includes(extname)
//   })
// }

function AlbumLaFamilia() {
  return (
    <div className="columns-1 space-y-4 pt-4 sm:columns-2 md:columns-3 lg:columns-4">
      {imagesLaFamilia.map((imagesrc: string, idx) => (
        <ImageCard src={imagesrc} key={idx} />
      ))}
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="w-full px-4 pt-40 text-2xl">
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        <AccordionItem
          value="item-1"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            La Familia
          </AccordionTrigger>
          <AccordionContent>
            <AlbumLaFamilia />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2023
          </AccordionTrigger>
          <AccordionContent>
            <Album2023 />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2022
          </AccordionTrigger>
          <AccordionContent>{/* <Album /> */}</AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
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
