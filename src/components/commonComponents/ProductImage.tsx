'use client'
import Image from 'next/image'
import React from 'react'
import Icon from './Icon'
import { ProductImageProps } from './types'
import { usePathname, useRouter } from 'next/navigation'
import 'animate.css';

function ProductImage({id,title,price,beforePrice,discount,rating,itemsSold,imageUrl,storeName}:ProductImageProps) {
  const pathName = usePathname();
  const isHomeRoute = pathName === '/';
  const router = useRouter();

  const moveToProductPage = (id:string) =>{
      router.push(`/item/${id}`)
  }

  return (
    <div onClick={()=>moveToProductPage(id)} className=' px-1 grid mt-[4px] gap-[2px] md:gap-1 w-full  rounded-[8px] shadow-lg hover:scale-105'>
    <div className={` ${isHomeRoute ? 'h-[120px] md:h-[180px] xl:h-[200px] ' :'h-[180px] md:h-[200px] xl:h-[270px] '} w-full rounded-[4px] overflow-hidden relative`}>
        <Image src={imageUrl} className='w-full h-full' layout='fill' alt='product' />
       {discount && (
         <div className='absolute top-0 left-0 flex items-center rounded-[2px] bg-purple_01 py-1 md:py-2 px-1 md:px-2'>
         <Icon icon='carbon:flash-filled' className='w-[10px] md:w-[16px]  h-[10px] md:h-[15px]' />
         <p className='smallTextBold '>- 45%</p>
        </div>
       )
       }
         {!isHomeRoute  && (
         <div className='absolute bottom-[3px] right-[3px] flex items-center rounded-[100%] bg-purple_01/50 hover:bg-purple_01 py-2 md:py-3 px-2 md:px-3'>
         <Icon icon='material-symbols:add-shopping-cart-rounded' className='text-white_101 w-[15px] md:w-[20px]  h-[15px] md:h-[24px] animate__animated animate__heartBeat animate__delay-1s animate__infinite	animate__slower' />
        </div>
       )
       }
      </div>
     {title && 
      <div className='w-full overflow-ellipsis'>
      <p className='normalText overflow-hidden whitespace-nowrap text-ellipsis text-grey_104'>
          {title}
        </p>
      </div>
      }
    {rating && 
      <div className='flex gap-1 items-center'>
      <div className='flex items-center'>
      { [...Array(5)].map((_, index) => (
        <Image
          key={index}
          src={index < rating ? '/assets/images/rating.png' : '/assets/images/greyRating.png'}
          alt='Star Rating'
          width={25}
          height={25}
          className='w-[10px] h-[10px] md:w-[15px] md:h-[15px]'
        />
      ))}
      </div>
     <p className=' text-grey_103 normalText'> ({itemsSold} sold)</p>
      </div>}
    {price && (
        <div className='flex justify-between items-center'>
        <p className='text-black_101 text-[12px] md:text-[14px] font-[500]'>Ksh {price}</p>
        <p className='text-grey_103 smallText line-through'>Ksh {beforePrice}</p>
      </div>
    )}
     
    </div>
  )
}

export default ProductImage
