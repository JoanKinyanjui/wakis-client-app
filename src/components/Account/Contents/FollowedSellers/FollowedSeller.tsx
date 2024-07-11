import Buttons from '@/components/commonComponents/Buttons'
import { AboutStoreSummaryProps } from '@/components/commonComponents/types'
import AboutStore from '@/components/Item/AboutStore/aboutStore'
import Image from 'next/image'
import React from 'react'

function FollowedSeller({name,rating,followers,items,logo}:AboutStoreSummaryProps) {
  return (
    <div className='w-full py-2 rounded-md '>
      <div className='grid gap-2.5 md:gap-5 w-full sm:w-[80%] md:w-3/4 lg:w-1/2' >
       <div className='flex gap-2.5 md:gap-5'>
        <div className='w-[50px] md:w-[70px] h-[50px] md:h-[70px]'>
        {logo ? <Image src={logo}  alt='svg' width={70} height={70} className='shrink-0 w-full h-full border  rounded-[10px]  shadow-lg'/> : null }
        </div>
        <div className='grid items-start'>
            <p className='normalText !font-[500]'>{name}</p>
        <div className='text-grey_103 text-[10px] sm:text-[12px] md:text-[14px] flex gap-2.5 md:gap-5 items-center'>
        <p>{rating} Rating</p>
        <p>{followers} Followers</p>
        <p>{items} Items</p>
        </div>
        </div>
       </div>

       <div className='flex gap-2.5 md:gap-5 justify-between md:justify-start'>
  <Buttons buttonText='All Items' className='border-[1px] border-grey_102 w-full md:w-[154px] text-grey_103 font-normal' rounded={false}/>
  <Buttons buttonText='UnFollow' className='border-[1px] border-grey_102 w-full md:w-[154px] text-grey_103 font-normal' rounded={false}/>
       </div>
    </div>
    </div>
  )
}

export default FollowedSeller
