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
    "hover:text-white  transition-all duration-100 ease-in"
  const activeNavlinkStyle = "text-primary"

  return (
    <div className="absolute z-50 flex w-screen justify-between bg-transparent p-10">
      <Link href="/">
        <Image
          src="/assets/Jubilee Logo.png"
          alt="church-logo"
          width={100}
          height={100}
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="mx-10 flex items-center gap-8 text-2xl">
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
          <NavigationMenuItem>
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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
