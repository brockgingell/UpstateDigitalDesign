'use client'
import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion }from "framer-motion"

interface MainNavProps {
  items?: NavItem[]
}

export default function NavLinks({ items }: MainNavProps) {
  const path = usePathname()
  return (
    <section>
      <div className='flex'>
      {items?.length ? (
        <nav className="mr-6 flex gap-3 sm:gap-5 lg:gap-7 xl:gap-9"> 
          {items?.map((item, index) => item.href && (
            <motion.div key={index} whileHover={{scale: 1.1}}>
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center font-medium text-foreground md:text-lg lg:text-xl",
                  item.disabled && "cursor-not-allowed opacity-80" , item.href === path ? 'text-slate-950 dark:text-white' : 'opacity-80')}>
                {item.title}
              </Link>
          </motion.div>
          ))}
        </nav>
      ) : null}
    </div>
    </section>
  )
}