import Image from "next/image"

export function Hero() {
  return (
    <div className="absolute top-0 h-screen w-screen">
      <Image
        src="/assets/heroimage.jpg"
        width={0}
        height={0}
        // sizes="100vw"
        // style={{ width: "100%", height: "100%" }}
        layout="fill"
        alt="hero-bg-image"
      ></Image>
      <div className="absolute top-0 flex h-full w-screen flex-col justify-center bg-black bg-opacity-40 p-10 lg:justify-end">
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
