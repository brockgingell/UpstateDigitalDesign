'use client'
import React from 'react'
import Hero from '@/components/home/hero'
import { WhyUs } from '@/components/home/whyus'
import OfferCapitalRegion from '@/components/home/offer-capital-region'

  export default function IndexPage() {
    return (
      <main className='realtive mt-8 overflow-hidden'>
        <Hero />
        <WhyUs />
        <OfferCapitalRegion />
      </main>
    )
  }