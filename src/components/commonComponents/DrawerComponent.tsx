import { NavItems } from '@/Data/NavItems'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Icon from './Icon';
import { Switch } from '@mui/material';
import useTheme from '@/hooks/useTheme';

function DrawerComponent() {
    const [activeNav,setActiveTab] = useState<string>('');
    const pathName = usePathname();
    const router = useRouter();
  
    const moveToHome = () => {
        router.push('/')
      }
    useEffect(()=>{
  NavItems.forEach((nav)=>{
    if(pathName.includes(nav.link)){
      setActiveTab(nav.link)
    }
  })
    },[pathName]);

    // Dark and LightMode
    const {isDarkMode,toggleTheme} = useTheme();
    const onHandleChange = ()=>{
    toggleTheme();
    };

  return (
    <div className='grid w-[250px] h-screen place-content-start justify-start relative bg-white_101 dark:bg-black_101'>
  <div className='flex justify-between items-center w-full'>
  <div className='text-purple_02 dark:text-white_101 my-2 px-4 logoSize' onClick={moveToHome} >WA<span className='text-purple_01'>KI</span></div>
  <Switch 
  checked={isDarkMode}
  onChange={onHandleChange}
  inputProps={{"aria-label":'controlled'}}
  color='secondary'
  />
  </div>
    <div className='w-[250px] h-[1px] bg-grey_102'></div>
   <div className='normalText font-[400] px-4'>
   {NavItems.map((item,index)=>(
     <Link href={item.link}>
      <div className={`${activeNav === item.link ? 'text-purple_01 !font-[500]' : 'text-black_101/80 dark:text-white_101 !font-[500]' } py-2`}>{item.title} </div></Link>
    ))}
   </div>
   <div className='absolute bg-grey_102 dark:bg-purple_02 py-1 items-center bottom-0 w-full justify-center'>
   <div className='normalText flex justify-evenly w-full gap-2.5 my-2'>
        <Icon icon='logos:tiktok-icon' className='w-[24px] h-[24px] '/>
        <Link href='https://www.instagram.com/waki.s_line/'><Icon icon='skill-icons:instagram' className='w-[24px] h-[24px]'/></Link>
        <Icon icon='fa6-brands:square-x-twitter' className='w-[24px] h-[24px] '/>
        <Icon icon='' className=''/>
    </div>
    <div className='border-t-[1px] border-grey_104 text-grey_104 italic justify-center flex text-[10px] md:text-[12px] py-2'>
   <p>&copy;copyright2024 || All rights reserved</p>
      </div>
   </div>
    </div>
  )
}

export default DrawerComponent
