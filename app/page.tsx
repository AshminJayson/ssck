import { Church } from "@/ui/church"
import { Dignified } from "@/ui/dignified"
import { Footer } from "@/ui/footer"
import { Hero } from "@/ui/hero"
import { MassTimings } from "@/ui/masstimings"
import { Navbar } from "@/ui/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="h-screen"></div>
      <MassTimings />
      <Church />
      <div className="flex flex-col items-center justify-center bg-primary p-8 text-2xl text-white md:text-3xl">
        <p>In that little host is the solution to all problems of the world</p>
        <p>- St. John Paul II</p>
      </div>
      <Dignified />
      <Footer />
    </main>
  )
}
