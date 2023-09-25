"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu"

export function Navbar() {
  const pathname = usePathname()

  const defaultNavlinkStyle =
    "hover:text-white  transition-all duration-100 ease-in border px-4 py-2 rounded-full border-primary hover:border-white shadow-xl"
  const activeNavlinkStyle =
    "text-primary border px-4 py-2 rounded-full border-primary shadow-lg"

  return (
    <div className="absolute z-50 flex w-screen items-center justify-between bg-transparent p-8">
      <Link href="/">
        <Image
          src="/assets/Jubilee Logo.png"
          alt="church-logo"
          priority
          width={100}
          height={100}
        />
      </Link>
      <p className="text-center text-lg font-bold md:text-2xl">
        <span className="text-primary">1949</span> -{" "}
        <span className="text-secondary">2024</span>{" "}
        <span className="hidden md:inline">|</span>{" "}
        <span className="block md:inline">Diamond Jubilee Year</span>
      </p>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-8 text-2xl">
          <NavigationMenuItem>
            <Link href="/gallery" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  pathname == "/gallery"
                    ? activeNavlinkStyle
                    : defaultNavlinkStyle
                }
              >
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="/blogs" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  pathname == "/blogs"
                    ? activeNavlinkStyle
                    : defaultNavlinkStyle
                }
              >
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
