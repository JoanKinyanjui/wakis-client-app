import Image from 'next/image'
import React from 'react'
import { QuickLinkProp } from '../types'

function IndividualQuickLink({item}:QuickLinkProp) {
  return (
   <div className='grid gap-2'>
     <div className='w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[90px] lg:h-[90px] rounded-full shadow-md relative overflow-hidden mx-auto'>
      <Image src={item.image} alt={item.alt} className=' w-full h-full absolute top-0 left-0 rounded-full object-cover' layout='fill' />
    </div>
    <p className='smallTextBold mx-auto'>{item.title}</p>
   </div>
  )
}

export default IndividualQuickLink
