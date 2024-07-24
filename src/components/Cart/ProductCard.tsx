"use client"
import React, { useState } from 'react'
import Icon from '../commonComponents/Icon'
import Image from 'next/image'
import Buttons from '../commonComponents/Buttons'
import ProductSpecifications from './ProductSpecifications'
import { ColorOption, SizeOption } from './types'
import Link from 'next/link'
import { useAppDispatch } from '@/lib/hooks'
import { decreaseQuantity, increaseQuantity } from '@/lib/features/cart/cartSlice'
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
    <div className='w-full grid gap-2.5 md:gap-5 relative'>

     <Link href='/stores/3'>
     <div className='flex items-center justify-between'>
       <div className='flex gap-2.5 items-center'>
       <Icon icon='streamline:store-1-solid' className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'/>
       <p className='normalXText capitalize'>{item.storeName}</p>
       </div>
        <Icon icon='simple-line-icons:arrow-right' className='w-[12px] h-[12px] md:w-[18px] md:h-[18px] text-black_101'/>
      </div>
      </Link>
      
      {/* Second row */}
<div className='flex gap-5'>
<div className='grid gap-2.5 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
<Image src='https://i.pinimg.com/474x/45/d0/ed/45d0edf2e824c3cf512c8acbee2abf80.jpg'  alt='' width={200} height={200} className='w-full h-[120px] sm:h-[140px] md:h-[150px]  rounded-[4px] shrink-0'/>
<div className='flex justify-between items-center'>
  <Buttons buttonText='-' className='bg-black_101 text-white_101 w-[35%] h-[25px]' onClick={()=>dispatch(decreaseQuantity(item))}/>
  <p className='normalXText text-black_101'>{item.quantity}</p>
  <Buttons buttonText='+' className='bg-black_101 text-white_101 w-[35%] h-[25px]' onClick={()=>dispatch(increaseQuantity(item))}/>
</div>
  </div>

  <div className='grid gap-2.5 h-[110px] md:h-[140px] place-content-between 1/2 sm:2/3 md:w-3/4 lg:w-4/5 '>
   <div>
   <p className='normalText !font-[500]'>{item.title}</p>
   <p className='smallText !font-[400] text-grey_104'>{item.desscription}</p>
   </div>
    <div>
      <ProductSpecifications colors={colorOptions} sizes={sizeOptions}/>
    </div>
    <div className='normalText flex gap-5 md:gap-10 w-full justify-between '>
      <p className='text-black_101 !font-[500]'>Ksh {item.price}</p>
      <p className='text-grey_103 !font-[300] line-through'>Ksh {item.beforePrice}</p>
    </div>
    <div className='absolute bottom-0 right-0 flex gap-5'>
    <Icon icon={favourite ? 'mdi:favourite' :'mdi:favourite-border'} className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] !text-black_101' onClick={addToFavourite} />
    <Icon icon='ic:outline-delete' className='w-[24px] h-[24px] md:w-[32px] md:h-[32px]'/>
    </div>
  </div>
  </div>
  
    </div>
  )
}

export default ProductCard
