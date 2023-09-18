import "./globals.css"

import { Dancing_Script } from "next/font/google"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
  return (
    <html lang="en">
      <body className={dancingScript.className}>{children}</body>
    </html>
  )
}
