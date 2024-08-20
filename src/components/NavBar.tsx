"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CardWrapper from './commonComponents/CardWrapper';
import Icon from './commonComponents/Icon';
import { usePathname, useRouter } from 'next/navigation';
import { NavItems } from '@/Data/NavItems';
import { Drawer } from '@mui/material';
import Link from 'next/link';
import DrawerComponent from './commonComponents/DrawerComponent';
import { useAppSelector } from '@/lib/hooks';
import useTheme from '@/hooks/useTheme';

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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [open, setOpen] = React.useState(false);

  // CartBadge
  const {quantity} = useAppSelector((state)=>state.cart)

  // Dark and light mode
  const {isDarkMode,toggleTheme } = useTheme();
  return (
    <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto py-2.5 md:py-5'>

    <div className='grid md:hidden gap-2.5  cursor-pointer'>
  <div className='flex justify-between items-center'>
     <div className='flex items-center gap-2.5'>
     <Image  src='/assets/icons/menuBar.svg' alt='' width={18} height={18} onClick={toggleDrawer(true)}/>
     <Drawer open={open} onClose={toggleDrawer(false)}>
   <DrawerComponent />
     </Drawer>
      <div className='text-purple_02  logoSize dark:text-white_101' onClick={moveToHome} >WA<span className='text-purple_01'>KI</span></div>
     </div>

     <div className='flex items-center gap-5 '> 
      <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveToAccount}>
      <Icon icon='mdi:account' className='icon'  />
      </div>
     <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center' onClick={moveWishList}>
        <Icon icon='mdi:favourite' className='icon'  />
      </div>
     <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center relative' onClick={moveToCart}>
        <Icon icon='mdi:cart' className='icon'  />
       {
       quantity === 0 
       ? 
       null :
        <div className='w-[15px] h-[15px] bg-purple_01 rounded-full absolute top-[-5px] right-0 text-[8px] flex  text-white_101 justify-center items-center '>{quantity}</div>
        }
      </div>
     </div>
  </div>
  <div className='bg-grey_101 h-[38px] px-2.5 flex gap-5 items-center rounded-[40px]'>
      <Image  src='/assets/icons/search.png' alt='' width={16} height={16}/>
        <input type='text' placeholder='Search' className='bg-grey_101 focus:outline-none focus:border-none'/>
      </div>
    </div>

    <div className='hidden md:flex items-center justify-between  cursor-pointer'>
     <div>
      <div className='text-purple_02  logoSize dark:text-white_101' onClick={moveToHome}>WA<span className='text-purple_01'>KI</span></div>
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
     <div className='py-3 px-3 bg-grey_101 rounded-full flex items-center justify-center relative' onClick={moveToCart}>
     <Icon icon='mdi:cart' className='icon'  />
     {
       quantity === 0 
       ? 
       null :
        <div className='w-[22px] h-[22px] bg-purple_01 rounded-full absolute top-[-5px] right-0 text-[8px] flex  text-white_101 justify-center items-center '>{quantity}</div>
        }
        </div>
       {isDarkMode ? 
        <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center shrink-0' onClick={toggleTheme}>
        <Icon icon='ic:round-light-mode' className='icon'  />
      </div>
      :
      <div className='py-2 px-2 bg-grey_101 rounded-full flex items-center justify-center shrink-0' onClick={toggleTheme}>
      <Icon icon='material-symbols:dark-mode' className='icon'  />
    </div>
    }
     </div>
    </div>

    </div>
  )
}

export default NavBar
