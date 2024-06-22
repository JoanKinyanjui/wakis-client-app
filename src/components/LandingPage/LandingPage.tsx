import React from 'react'
import QuickLinks from './QuickLinks/QuickLinks'
import HerSection from '../HeroSection'
import Categories from './Categories/Categories'

function LandingPage() {
  return (
    <div className=''>
      <HerSection />
      <QuickLinks />
      <Categories />
    </div>
  )
}

export default LandingPage
