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
        {images.map((image) => (
          <CarouselItem key={image}>
            <img src={image} alt="Thirunal" className="w-full" />
            {/* <Card className="h-full">
              <CardContent>
              </CardContent>
            </Card> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
