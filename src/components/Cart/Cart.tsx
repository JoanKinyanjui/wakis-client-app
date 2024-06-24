import React from 'react'
import CardWrapper from '../commonComponents/CardWrapper'
import ProductCard from './ProductCard'
import Buttons from '../commonComponents/Buttons'

function Cart() {
  return (
    <div>
    <CardWrapper customClass='w-full grid md:flex gap-5 mt-2.5 md:mt-5'>
      <div className='w-full md:w-[65%] px-5 py-5 bg-grey_101/20 shadow-md'>
      <ProductCard />
      </div>

      <div className='w-full md:w-[35%] grid gap-2.5 md:gap-5 px-5 py-5 bg-grey_101/20 shadow-md'>
      <div>
        <p className='subTitle text-black_101'>Cart Summary</p>
      </div>
      <div className='flex justify-between'>
        <p>SubTotal</p>
        <p>Ksh 0</p>
      </div>
      <div>
        <Buttons className='bg-black_101 text-white_101 py-3' buttonText={`CHECKOUT ( KSH 0 )`}/>
      </div>
      </div>
    </CardWrapper>
    </div>
  )
}

export default Cart
