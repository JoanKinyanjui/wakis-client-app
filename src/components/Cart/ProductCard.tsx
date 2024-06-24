"use client"
import React, { useState } from 'react'
import Icon from '../commonComponents/Icon'
import Image from 'next/image'
import Buttons from '../commonComponents/Buttons'

function ProductCard() {
  const [favourite,setFavourite] = useState(false);
  return (
    <div className='w-full grid gap-2.5 md:gap-5 relative'>

      <div className='flex items-center justify-between'>
       <div className='flex gap-2.5 items-center'>
       <Icon icon='streamline:store-1-solid' className='w-[18px] h-[18px] md:w-[30px] md:h-[30px]'/>
       <p className='normalXText'>Kendy's Thrift Shop</p>
       </div>
        <Icon icon='simple-line-icons:arrow-right' className='w-[12px] h-[12px] md:w-[18px] md:h-[18px] text-black_101'/>
      </div>
      
      {/* Second row */}
      <div className='flex gap-5'>
<div className='grid gap-2.5'>
<Image src='https://i.pinimg.com/474x/45/d0/ed/45d0edf2e824c3cf512c8acbee2abf80.jpg'  alt='' width={200} height={200} className='w-[80px] h-[120px] md:w-[120px]  md:h-[140px]  rounded-[4px]'/>
<div className='flex justify-between items-center'>
  <Buttons buttonText='+' className='bg-black_101 text-white_101 w-[30%] h-[25px]'/>
  <p className='normalXText text-black_101'>9</p>
  <Buttons buttonText='-' className='bg-black_101 text-white_101 w-[30%] h-[25px]'/>
</div>
  </div>

  <div className='grid gap-2.5 md:gap-5 '>
    <p className='normalXText'>Beautiful Maxi Flower Dress</p>
    <div>
    specs
  </div>
    <div className='normalText flex gap-5 md:gap-10'>
      <p className='text-black_101'>Ksh 2,456</p>
      <p className='text-grey_103 line-through'>Ksh 3,499</p>
    </div>
    <div className='absolute bottom-0 right-0 flex gap-5'>
    <Icon icon={favourite ? 'mdi:favourite' :'mdi:favourite-border'} className='w-[24px] h-[24px] md:w-[36px] md:h-[36px] !text-black_101'/>
    <Icon icon='ic:outline-delete' className='w-[24px] h-[24px] md:w-[36px] md:h-[36px]'/>
    </div>
  </div>
      </div>
    </div>
  )
}

export default ProductCard
