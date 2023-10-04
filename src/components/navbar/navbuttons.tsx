"use client"

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { ThemeToggle } from "@/components/navbar/theme-toggle"
import { siteConfig } from "@/config/site"


export default function NavButtons() {
  return (
      <section className="flex items-center gap-1 lg:ml-1 lg:gap-4 ">
        <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
          <Icons.instagram className='hidden h-9 w-9 stroke-2 p-1 xs:flex lg:p-[2px]'/>
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <Icons.twitter className='hidden h-9 w-9 stroke-2 p-1 xs:ml-[3px] xs:flex lg:p-[2px]'/>
          <span className="sr-only">Twitter</span>
        </Link>
        <ThemeToggle />
      </section>
  )
}