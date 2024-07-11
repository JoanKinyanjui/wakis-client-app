'use client'
import Image from 'next/image'
import React from 'react'
import Icon from './Icon'
import { usePathname, useRouter } from 'next/navigation'
import 'animate.css';
import { StoreProps } from '@/Data/type'

function StoreProfile({id,title,rating,itemsSold,imageUrl}:StoreProps) {
  const pathName = usePathname();
  const isHomeRoute = pathName === '/';
  const router = useRouter();

  const moveToProductPage = (id:string) =>{
      router.push(`/item/${id}`)
  }

  return (
    <div onClick={()=>moveToProductPage(id)} className=' px-1 grid mt-[4px] gap-[2px] md:gap-1 w-full  rounded-[8px] shadow-lg hover:scale-105'>
    <div className= 'h-[200px] md:h-[270px] xl:h-[320px]  w-full rounded-[4px] overflow-hidden relative'>
        <Image src={imageUrl} className='w-full h-full' layout='fill' alt='product' />
         <div className='absolute bottom-[3px] right-[3px] flex items-center rounded-[100%] bg-purple_01/50 hover:bg-purple_01 py-2 md:py-3 px-2 md:px-3'>
         <Icon icon='material-symbols:add-shopping-cart-rounded' className='text-white_101 w-[15px] md:w-[20px]  h-[15px] md:h-[24px] animate__animated animate__heartBeat animate__delay-1s animate__infinite	animate__slower' />
        </div>
     
          <div className='py-2 md:py-3 bg-black_101 text-white_101 absolute bottom-0 left-0 w-full'>
          <p className='flex justify-center normalTitle uppercase'>{title}</p>
         </div>

      </div>     
    </div>
  )
}

export default StoreProfile
