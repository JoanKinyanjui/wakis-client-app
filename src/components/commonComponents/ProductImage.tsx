'use client'
import Image from 'next/image'
import React from 'react'
import Icon from './Icon'
import { ProductImageProps } from './types'
import { usePathname } from 'next/navigation'

function ProductImage({title,price,beforePrice,discount,rating,itemsSold,imageUrl,officialStore,storeName}:ProductImageProps) {
  const pathName = usePathname();
  const isHomeRoute = pathName === '/';

  return (
    <div className=' px-1 grid mt-[4px] gap-1 w-full'>
    <div className={` ${officialStore ? 'h-[180px] md:h-[250px] xl:h-[300px]' : isHomeRoute ? 'h-[120px] md:h-[180px] xl:h-[200px] ' :'h-[150px] md:h-[200px] xl:h-[270px] '} w-full rounded-[4px] overflow-hidden relative`}>
        <Image src={imageUrl} className='w-full h-full' layout='fill' alt='product' />
       {discount && (
         <div className='absolute top-0 left-0 flex items-center rounded-[2px] bg-purple_01 py-1 md:py-2 px-1 md:px-2'>
         <Icon icon='carbon:flash-filled' className='w-[10px] md:w-[16px]  h-[10px] md:h-[15px]' />
         <p className='smallTextBold '>- 45%</p>
        </div>
       )
       }
    {officialStore && (
          <div className='py-1 md:py-2 bg-black_101 text-white_101 absolute bottom-0 left-0 w-full'>
          <p className='flex justify-center normalTitle uppercase'>ZIA</p>
         </div>
    )}
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
