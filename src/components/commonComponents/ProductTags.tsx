import Image from 'next/image'
import React from 'react'
import { ProductTagProps } from './types'

function ProductTags({tagIcon,tagName}:ProductTagProps) {
  return (
    <div className='flex gap-1 md:gap-2 bg-grey_101 rounded-full py-1.5 md:py-2 w-max px-3 md:px-4 items-center'>
     <Image src={tagIcon}  alt='svg' width={15} height={15} className='shrink-0 w-[10] md:w-[15] h-[10] md:h-[15]'/>
     <p className='text-black_101/60 text-xs md:text-sm font-[600]'>{tagName}</p>
    </div>
  )
}

export default ProductTags
