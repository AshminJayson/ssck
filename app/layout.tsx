import { Navbar } from "@/ui/navbar"

import "./globals.css"

import { Dancing_Script } from "next/font/google"

export const metadata = {
  title: "St. Sebastian's Church Kottappady",
  description: "Official website of St. Sebastian's Church Kottappady",
}

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nav = () => {}
  return (
    <html lang="en">
      <body className={dancingScript.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
