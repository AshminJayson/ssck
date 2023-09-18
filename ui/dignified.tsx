import Image from "next/image"

export function Dignified() {
  return (
    <div className="relative flex h-96 w-full">
      <div className="relative w-1/2">
        <Image
          src="/assets/churchfront.jpg"
          width={0}
          height={0}
          // sizes="100vw"
          // style={{ width: "100%", height: "100%" }}
          layout="fill"
          alt="church-image"
        />
      </div>
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-40">
        <p>Our Vicar</p>
      </div>
      <div className="relative w-1/2 text-white">
        <div className="relative z-0 h-full w-full">
          <Image
            src="/assets/Fr. Robin Padinjarekuttu.jpg"
            width={0}
            height={0}
            // sizes="100vw"
            // style={{ width: "100%", height: "100%" }}
            layout="fill"
            alt="church-image"
          />
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col justify-end bg-black bg-opacity-40 p-10">
          <p className="text-3xl">Our Vicar</p>
          <p className="w-3/4 text-2xl">
            Fr. Robin Padinjarekuttu is a man devoted to the praise of god in
            all his endeavors. He is the driving force behind the parish and the
            corner stone of the spiritual as well as humanitarian activities of
            the parish.
          </p>
        </div>
      </div>
    </div>
  )
}
