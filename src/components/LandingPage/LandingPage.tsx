import React from 'react'
import QuickLinks from './QuickLinks/QuickLinks'
import HerSection from '../HeroSection'
import Categories from './Categories/Categories'
import BottomBar from '../BottomBar'
import Footer from '../Footer'

function LandingPage() {
  return (
    <div className=''>
      <HerSection />
      <QuickLinks />
      <Categories />
      <BottomBar />
    </div>
  )
}

export default LandingPage;
