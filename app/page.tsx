import { Church } from "@/ui/church"
import { Dignified } from "@/ui/dignified"
import { Footer } from "@/ui/footer"
import { Hero } from "@/ui/hero"
import { MassTimings } from "@/ui/masstimings"
import { Poster } from "@/ui/poster"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {/* <Poster /> */}
      <iframe
        src="https://www.youtube.com/embed/G3FC4X_7HSU?si=jkwoKLZIZFdm5esf&autoplay=1&mute=1"
        title="SSCK Walkathon"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="h-[90vh] w-full"
      />
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
