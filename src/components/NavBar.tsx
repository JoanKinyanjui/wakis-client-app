"use client"
import Image from 'next/image';
import React from 'react';
import CardWrapper from './commonComponents/CardWrapper';
import Icon from './commonComponents/Icon';
import { useRouter } from 'next/navigation';

function NavBar() {
  const router = useRouter();

  const moveToCart = () => {
    router.push('/cart')
  }
  const moveToHome = () => {
    router.push('/')
  }
  const moveWishList = () => {
    router.push('/wishList')
  }
  const moveToAccount = () => {
    router.push('/account')
  }
  return (
    <CardWrapper>

    <div className='grid md:hidden gap-2.5 my-2.5 cursor-pointer'>
  <div className='flex justify-between items-center'>
     <div className='flex items-center gap-2.5'>
     <Image  src='/assets/icons/menuBar.svg' alt='' width={18} height={18}/>
      <div className='text-purple_02  logoSize' onClick={moveToHome} >WA<span className='text-purple_01'>KI</span></div>
     </div>

     <div className='flex items-center gap-5 '> 
      <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveToAccount}>
      <Icon icon='mdi:account' className='icon'  />
      </div>
     <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveWishList}>
        <Icon icon='mdi:favourite' className='icon'  />
      </div>
     <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveToCart}>
        <Icon icon='mdi:cart' className='icon'  />
      </div>
     </div>
  </div>
  <div className='bg-grey_101 h-[38px] px-2.5 flex gap-5 items-center rounded-[40px]'>
      <Image  src='/assets/icons/search.png' alt='' width={16} height={16}/>
        <input type='text' placeholder='Search' className='bg-grey_101 focus:outline-none focus:border-none'/>
      </div>
    </div>

    <div className='hidden md:flex items-center justify-between my-5 cursor-pointer'>
     <div>
      <div className='text-purple_02  logoSize' onClick={moveToHome}>WA<span className='text-purple_01'>KI</span></div>
     </div>

     <div className='flex items-center gap-5 '> 
      <div className='bg-grey_101 h-[42px] px-2.5 flex gap-5 items-center rounded-[40px]'>
      <Image  src='/assets/icons/search.png' alt='' width={18} height={18}/>
        <input type='text' placeholder='Search' className='bg-grey_101 focus:outline-none focus:border-none'/>
      </div>
      <div className='py-3 px-3 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveToAccount}>
      <Icon icon='mdi:account' className='icon'  />
      </div>
     <div className='py-3 px-3 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveWishList}>
     <Icon icon='mdi:favourite' className='icon' />
      </div>
     <div className='py-3 px-3 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveToCart}>
     <Icon icon='mdi:cart' className='icon'  />
      </div>
     </div>
    </div>

    </CardWrapper>
  )
}

export default NavBar
