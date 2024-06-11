import React from 'react'
import CardWrapper from './commonComponents/CardWrapper'

function HerSection() {
  return (
  // <CardWrapper>
<div className='relative h-[180px] md:h-[500px] rounded-2 mb-5 overflow-hidden'>
  <video className='absolute inset-0 object-cover w-full h-full' autoPlay loop muted>
    <source src='/assets/videos/hero.mp4' type='video/mp4' />
    Your browser does not support the video tag.
  </video>
  <div className='absolute inset-0 bg-black_101 opacity-20'></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white p-2 rounded w-11/12 md:w-1/2'>
    <div className='text-center'>
      <div className='text-white_101 text-[16px] md:text-[28px] lg:text-[42px] font-[700]'>
        Bridging the Gap Between <span className='text-purple_01'>Thrift</span> and <span className='text-purple_01'>Luxury</span>.
      </div>
      <p className='text-white_101 text-[15px] md:text-[20px] lg:text-[28px] font-[500] mt-2'>
        One Fashionable Find at a Time!
      </p>
    </div>
  </div>
</div>

  // </CardWrapper>
  )
}

export default HerSection
