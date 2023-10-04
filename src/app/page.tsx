'use client'
import React from 'react'
import Hero from '@/components/home/hero'
import { WhyUs } from '@/components/home/whyus'
import OfferCapitalRegion from '@/components/home/offer-capital-region'

  export default function IndexPage() {
    return (
      <main className='realtive mt-8 overflow-hidden px-[2px] tablet:p-1 sm:px-2'>
        <Hero />
        <WhyUs />
        <OfferCapitalRegion />
      </main>
    )
  }