'use client'
import React from 'react'
import Hero from '@/components/home/hero'
import { WhyUs } from '@/components/home/whyus'
import OfferCapitalRegion from '@/components/home/offer-capital-region'

  export default function IndexPage() {
    return (
      <main className='realtive container mx-auto mt-[72px] overflow-hidden p-2'>
        <Hero />
        <WhyUs />
        <OfferCapitalRegion />
      </main>
    )
  }