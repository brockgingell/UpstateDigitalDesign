"use client"
import React from "react"
import { siteConfig } from "@/config/site"
import { MenuIcon, XIcon } from "lucide-react"
import { ThemeToggle } from "@/components/navbar/theme-toggle"
import NavLinks from "@/components/navbar/navlinks"
import NavTitle from "@/components/navbar/navtitle"
import NavButtons from "@/components/navbar/navbuttons"
import MobileNavLinks from "@/components/navbar/mobile-links"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <header> {isMenuOpen ? 
      <section>
        <div className="fixed top-0 z-50 flex h-[72px] w-screen flex-row items-center justify-between border-b-2 bg-background px-2">
          <div className="top-0 flex h-[72px] items-center md:h-20 xl:h-[88px]">
            <NavTitle />
          </div>
          <div className="absolute right-2 top-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <XIcon className="h-8 w-8 p-[1px]"/>
          </div>
        </div>
        <button className='relative top-20 z-40 flex h-screen justify-start bg-background xl:top-[88px]' onClick={() => setIsMenuOpen(false)}>
          <MobileNavLinks items={siteConfig.mainNav} />
        </button>
      </section>
      :
      <section>
        <div className="sticky top-0 flex h-[72px] w-screen flex-row items-center justify-between border-b-2 bg-background px-2 md:h-20 md:px-4 lg:px-6 xl:h-[88px] 2xl:px-8">
          <NavTitle/>
          <div className="hidden flex-row items-center justify-center xs:flex">
            <NavLinks items={siteConfig.mainNav} />
          </div>
          <div className="flex flex-row gap-3">
            <NavButtons />
            <button className="xs:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="p-[2px]" size={36} strokeWidth={2.5}/>
            </button>
          </div>
        </div>
      </section>
      }
    </header>
  )
}