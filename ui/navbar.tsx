import Image from "next/image"

export function Navbar() {
  return (
    <div className="absolute top-0 z-50 flex w-screen p-10">
      <Image
        src="/assets/Jubilee Logo.png"
        alt="church-logo"
        width={100}
        height={100}
      />
    </div>
  )
}
