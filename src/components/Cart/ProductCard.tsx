"use client"
import React, { useState } from 'react'
import Icon from '../commonComponents/Icon'
import Image from 'next/image'
import Buttons from '../commonComponents/Buttons'
import ProductSpecifications from './ProductSpecifications'
import { ColorOption, SizeOption } from './types'
import Link from 'next/link'
import { useAppDispatch } from '@/lib/hooks'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/lib/features/cart/cartSlice'
import { ProductsProps } from '@/Data/type'

type itemProps ={
  item :ProductsProps;
}

function ProductCard({item}:itemProps) {
  const [favourite,setFavourite] = useState(false);
  const addToFavourite = () =>{
  setFavourite(!favourite)
  }

  const colorOptions :ColorOption[] = [
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    { name: 'Blue', value: 'blue' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Brown', value: 'brown' },
  ];

  const sizeOptions : SizeOption[] = [
    { name: 'S'  , value:'small'},
    { name: 'M'  , value:'medium'},
    { name: 'L'  , value:'large'},
    { name: 'XL' , value:'xLarge' },
  ];

  // Increase/decrease and remove
  const dispatch = useAppDispatch();

  return (
    <div className='w-full grid gap-2.5 md:gap-5 relative '>
      
      {/* Second row */}
<div className='flex gap-5'>
<div className='grid gap-2.5 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
<Image src={item.gallery[0].imageUrl}  alt='' width={200} height={200} className='w-full h-[120px] sm:h-[140px] md:h-[150px]  rounded-[4px] shrink-0'/>
<div className='flex justify-between items-center'>
  <Buttons buttonText='-' className='bg-black_101 dark:bg-purple_02  text-white_101 w-[35%] h-[25px]' onClick={()=>dispatch(decreaseQuantity(item))}/>
  <p className='normalXText text-black_101 dark:text-grey_102'>{item.quantity}</p>
  <Buttons buttonText='+' className='bg-black_101 dark:bg-purple_02 text-white_101 w-[35%] h-[25px]' onClick={()=>dispatch(increaseQuantity(item))}/>
</div>
  </div>

  <div className='grid gap-2.5 h-[110px] md:h-[140px] place-content-between 1/2 sm:2/3 md:w-3/4 lg:w-4/5 '>
   <div>
   <p className='normalText !font-[500] dark:text-grey_102'>{item.title}</p>
   <p className='smallText !font-[400] text-grey_104'>{item.desscription}</p>
   </div>
    <div>
      <ProductSpecifications colors={colorOptions} sizes={sizeOptions} colorValue={item.color} sizeValue={item.size}/>
    </div>
    <div className='normalText flex gap-5 md:gap-10 w-full justify-between '>
      <p className='text-black_101 dark:text-grey_102 !font-[500]'>Ksh {item.price}</p>
      <p className='text-grey_103 !font-[300] line-through'>Ksh {item.beforePrice}</p>
    </div>
    <div className='absolute bottom-0 right-0 flex gap-5 cursor-pointer'>
    <Icon icon={favourite ? 'mdi:favourite' :'mdi:favourite-border'} className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] !text-black_101 dark:!text-grey_102' onClick={addToFavourite} />
    <Icon icon='ic:outline-delete' className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] dark:text-grey_102' onClick={()=>dispatch(removeFromCart(item))}/>
    </div>
  </div>
  </div>
  
    </div>
  )
}

export default ProductCard
