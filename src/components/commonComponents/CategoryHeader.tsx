"use client"
import React from 'react'
import { CategoryHeaderProps } from './types'
import Image from 'next/image'
import Icon from './Icon'
import { useRouter } from 'next/navigation'

function CategoryHeader({icon,headingLeft,rightIcon,headingRight,link}:CategoryHeaderProps) {
  const router = useRouter();
  const navigateToCategory = (link:string) =>{
   router.push(`/${link}`)
  } 
  return (
    <div className='flex justify-between mb-2.5 md:mb-2.5 text-black_101 dark:text-grey_102' onClick={ link ? ()=>navigateToCategory(link) : undefined}>
        <div className='flex gap-2 md:gap-3.5 items-center'>
       {icon &&  <Icon icon={icon}  className='shrink-0 w-[16px] md:w-[22px] h-[16px] md:h-[22px]' />}
        <h1 className='font-[700] text-[15px] md:text-[18px]  lg:text-[20px]'>{headingLeft}</h1>
        </div>

        {rightIcon ? 
        <div className='flex gap-2 md:gap-3.5 items-center'>
       {headingRight && <h1 className='font-[600] text-[12px] md:text-[16px]  lg:text-[18px]'>{headingRight}</h1>}
        {/* <Image src='/assets/icons/rightArrow.svg'  alt='svg' width={40} height={40} className='shrink-0 w-[18px] md:w-[30px] h-[18px] md:h-[25px]'/> */}
        <Icon icon='iconamoon:arrow-right-2-duotone' className='shrink-0 dark:text-white_101 text-black_101  w-[18px] md:w-[30px] h-[18px] md:h-[25px]' />
        </div>
         :
         null
         }
    </div>
  )
}

export default CategoryHeader
