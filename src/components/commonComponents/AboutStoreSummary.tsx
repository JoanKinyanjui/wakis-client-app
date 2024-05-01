import React from 'react'
import Buttons from './Buttons'
import {AboutStoreSummaryProps } from './types'
import Image from 'next/image'

function AboutStoreSummary({name,rating,followers,items,logo} :AboutStoreSummaryProps) {
  return (
    <div className='grid gap-3.5 md:gap-7 w-full sm:w-[80%] md:w-3/4 lg:w-1/2' >
      <div className='subTitle'>
        About Store
      </div>
       <div className='flex gap-2.5 md:gap-5'>
        <div className='w-[70px] h-[70px] rounded-[10px] border shadow-md'>
        {logo ? <Image src='/'  alt='svg' width={30} height={30} className='shrink-0 w-full'/> : null }
        </div>
        <div className='grid gap-1.5 md:gap-3'>
            <p className='mediumTitle'>{name}</p>
            <div className='text-grey_103 normalText flex gap-2.5 md:gap-5 items-center'>
        <p>{rating} Rating</p>
        <p>{followers} Followers</p>
        <p>{items} Items</p>
            </div>
        </div>
       </div>

       <div className='flex gap-2.5 md:gap-5 justify-between md:justify-start'>
  <Buttons buttonText='All Items' className='border-[1px] border-black_101 w-full md:w-[174px] text-grey_102 font-normal' rounded={false}/>
  <Buttons buttonText='+ Follow' className='border-[1px] border-black_101 w-full md:w-[174px] text-grey_102 font-normal' rounded={false}/>
       </div>
    </div>
  )
}

export default AboutStoreSummary
