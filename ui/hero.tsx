import Image from "next/image"

export function Hero() {
  return (
    <div className="absolute top-0 h-screen w-screen">
      <Image
        priority
        src="/assets/heroimage.jpg"
        className="object-cover object-center"
        layout="fill"
        alt="hero-bg-image"
      />
      <div className="absolute flex h-full w-screen flex-col justify-end bg-black bg-opacity-40 p-8 py-12 md:p-10">
        <p className="text-4xl text-white lg:text-8xl">
          The Lord is my <span className="text-primary">shepherd,</span>
        </p>
        <p className="text-4xl text-white lg:text-8xl">
          I shall not <span className="text-secondary">want</span>
        </p>
      </div>
    </div>
  )
}
