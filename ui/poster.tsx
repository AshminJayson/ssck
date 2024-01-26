import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/assets/thirunal/1.png",
  "/assets/thirunal/2.png",
  "/assets/thirunal/3.png",
  "/assets/thirunal/4.png",
  "/assets/thirunal/5.png",
]

export function Poster() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="m-10 h-full">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-5">
                  <img src={image} alt="poster" className="h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
