'use client'
import Image from 'next/image'
import background from '@/public/herobg.png'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from 'framer-motion'
import ResponsiveDevices from 'public/newhero.svg'

export default function Hero() {
  return (
    <section className='relative flex h-[calc(100vh-72px)] flex-col items-center justify-around p-3 2xl:px-12'>
      <div className='flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-around xl:justify-center'>
        <div className='flex flex-col mobilemd:gap-2 tablet:gap-3 sm:w-1/2 sm:self-center'>
          <h1 className='text-left text-3xl font-bold tablet:text-4xl xl:text-5xl '>
            Stop Letting Your Outdated Website Cost Your Business.
          </h1>
          <h2 className='text-left text-lg tablet:font-medium xl:my-2 xl:text-2xl'>
            Modern Web Solutions That Boost Visibility and Drive Growth. Headache-free Web Solutions With 24/7 Support.
          </h2>
          <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
            <Link href={siteConfig.mainNav[2].href} className={`hidden sm:flex ${buttonVariants({variant: 'default'})}`}>
              Book a Free Consultation →
            </Link>
          </motion.div>
        </div>
        <div className='flex flex-col items-center'>
          <ResponsiveDevices className='flex h-auto w-[265px] items-center justify-center pb-8 mobile:w-[300px] mobilemd:w-[360px] mobilelg:my-1 mobilelg:w-[415px] tablet:w-[515px] sm:ml-4 sm:w-[450px] lg:w-[600px] lg:pl-6 xl:w-[700px] 2xl:w-[770px]'/>
          <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
            <Link href={siteConfig.mainNav[2].href} className={`sm:hidden ${buttonVariants({variant: 'default'})}`}>
              Book a Free Consultation →
            </Link>
          </motion.div>
        </div>
      </div>
      <svg className='flex animate-bounce items-center justify-center' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='12' cy='12' r='10'/>
        <path d='m16 10-4 4-4-4'/>
      </svg>
    </section>
  )
}
