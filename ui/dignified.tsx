import Image from "next/image"

export function Dignified() {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <iframe
        src="https://www.youtube.com/embed/ZGpAHE1RlQk?si=LFVbXRrIAiX_s86e&autoplay=1&mute=1"
        title="SSCK Jubilee Song"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="h-96 w-full md:w-1/2"
      />
      {/* <div className="absolute top-0 h-full w-full bg-black bg-opacity-40"></div> */}
      <div className="relative w-full text-white md:w-1/2">
        <div className="absolute inset-0">
          <Image
            src="/assets/Fr. Robin Padinjarekuttu.jpg"
            fill
            className="bg-black object-cover object-top"
            alt="church-image"
          />
        </div>
        <div className="relative z-10 flex h-full w-full flex-col justify-end bg-black bg-opacity-40 p-10 pt-32">
          <p className="text-xl md:text-3xl">Our Vicar</p>
          <p className="text-md w-3/4 md:text-2xl">
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
