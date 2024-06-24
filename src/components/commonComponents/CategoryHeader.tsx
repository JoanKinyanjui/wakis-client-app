import React from 'react'
import { CategoryHeaderProps } from './types'
import Image from 'next/image'
import Icon from './Icon'

function CategoryHeader({icon,headingLeft,rightIcon,headingRight}:CategoryHeaderProps) {
  return (
    <div className='flex justify-between mb-2.5 md:mb-2.5'>
        <div className='flex gap-2 md:gap-3.5 items-center'>
        <Icon icon={icon}  className='shrink-0 w-[20px] md:w-[25px] h-[20px] md:h-[25px]' />
        <h1 className='font-[700] text-[16px] md:text-lg  lg:text-xl'>{headingLeft}</h1>
        </div>

        {rightIcon ? 
        <div className='flex gap-2 md:gap-3.5 items-center'>
       {headingRight && <h1 className='font-[600] text-[12px] md:text-md  lg:text-[16px]'>{headingRight}</h1>}
        <Image src='/assets/icons/rightArrow.svg'  alt='svg' width={40} height={40} className='shrink-0 w-[20px] md:w-[30px] h-[20px] md:h-[25px]'/>
        </div>
         :
         null
         }
    </div>
  )
}

export default CategoryHeader
