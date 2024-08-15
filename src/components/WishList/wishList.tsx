"use client"
import React from 'react'
import CardWrapper from '../commonComponents/CardWrapper'
import Image from 'next/image'
import { orders } from '@/Data/orders'
import Icon from '../commonComponents/Icon'
import { Products } from '@/Data/Products'
import CategoryHeader from '../commonComponents/CategoryHeader'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Link from 'next/link'
import { removeFromWishList } from '@/lib/features/wishlist/wishListSlice'

function WishList() {
  const wishListItems = useAppSelector(state=>state.wishList);
  const dispatch = useAppDispatch();

 

  return (
    <div>
     <CardWrapper>
     <CategoryHeader headingLeft='WISHLIST'   />
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
   {(wishListItems.items.length >0) ? 
   wishListItems.items.map((item)=>(
   <Link href={`item/${item.id}`}>
    <div className='flex w-full justify-between border-[1px] border-grey_102 dark:border-grey_104 px-2 md:px-5 py-2 rounded-md my-1 md:my-2 lg:my-3 gap-2.5 md:gap-5'>
    <div className=' flex gap-5 items-start'>
      <Image alt='' src={item.gallery[0].imageUrl} width={100} height={80} className='rounded-sm w-[70px] h-[90px] md:w-[100px] md:h-[110px]'/>

    <div className='grid gap-1'>
    <p className='text-black_101 dark:text-grey_102 normalText capitalize !font-[500]'>{item.title}</p>
    <p className='smallText text-grey_104'>{item.desscription}</p>
    <p className='normalText text-black_101 dark:text-grey_102 !font-[500]'>Ksh {item.price}</p>
    {((Number(item.id) % 2 === 0 ?  <p className='smallText flex justify-center w-[max-content] bg-grey_102 px-4 md:px-6 py-2 rounded-md text-grey_104'> OUT OF STOCK   </p> : null))}
    </div>
    </div>

    <div>
<div className='flex gap-1 md:gap- items-center  text-black_101' >
 <Icon icon='ic:outline-delete' className='w-[20px] h-[20px] md:w-[24px] md:h-[24px] '/>
<p className='normalText py-[1px] !font-[500] '></p>
</div>
    </div>
  </div>
  </Link>
  ))
:
<div className='w-full flex justify-start items-center py-10 px-4 mx-auto'>
<p className='normalText text-grey_104'>No favourites</p>
</div>
}
    </div>
     </CardWrapper>
    </div>
  )
}

export default WishList
