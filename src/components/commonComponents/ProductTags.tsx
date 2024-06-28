import Image from 'next/image'
import React from 'react'
import { ProductTagProps } from './types'
import Icon from './Icon'

function ProductTags({tagIcon,tagName}:ProductTagProps) {
  return (
    <div className='flex gap-1 md:gap-2 bg-grey_101 rounded-full py-1.5 md:py-2 w-max px-3 md:px-4 items-center'>
     <Icon icon={tagIcon} className='w-[10px] md:w-[15px] h-[10px] md:h-[15px]'/>
     <p className='text-black_101/60 text-xs md:text-sm font-[600]'>{tagName}</p>
    </div>
  )
}

export default ProductTags
