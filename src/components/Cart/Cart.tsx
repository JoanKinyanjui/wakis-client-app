"use client"
import React from 'react'
import CardWrapper from '../commonComponents/CardWrapper'
import ProductCard from './ProductCard'
import Buttons from '../commonComponents/Buttons'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/hooks'

function Cart() {
  const router= useRouter();
  const {cartItems,total} = useAppSelector((state)=>state.cart)
  return (
    <div>
    <CardWrapper customClass='w-full grid md:flex gap-5 mt-2.5 md:mt-5 md:items-start'>
      <div className='w-full md:w-[65%] px-5 py-5 bg-grey_101/20 shadow-md'>
      {cartItems && cartItems.map((item)=>(
        <div key={item.id}>
          <ProductCard item={item} />
        </div>
      ))}
      </div>

      <div className='w-full md:w-[35%] grid gap-2.5 md:gap-5 px-5 py-5 bg-grey_101/20 shadow-md'>
      <div>
        <p className='subTitle text-black_101'>Cart Summary</p>
      </div>
     <div className='flex justify-between normalXText w-full '>
        <p className='text-grey_104'>SubTotal</p>
        <p className=''>Ksh {total}</p>
      </div>
      <div>
        <Buttons 
        onClick={()=>router.push('/checkout')}
         className='bg-black_101 text-white_101 py-3'
         buttonText={`CHECKOUT ( KSH 0 )`}
        />
      </div>
      </div>
    </CardWrapper>
    </div>
  )
}

export default Cart
