import Image from "next/image"
import { Church } from "@/ui/church"
import { Dignified } from "@/ui/dignified"
import { Footer } from "@/ui/footer"
import { Hero } from "@/ui/hero"
import { MassTimings } from "@/ui/masstimings"
import { Navbar } from "@/ui/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <div className="h-screen"></div>
      <MassTimings />
      <Church />
      <div className="flex h-36 flex-col items-center justify-center bg-primary text-3xl text-white">
        <p>In that little host is the solution to all problems of the world</p>
        <p>- St. John Paul II</p>
      </div>
      <Dignified />
      <Footer />
    </main>
  )
}
