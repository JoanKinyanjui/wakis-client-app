import { NavItems } from '@/Data/NavItems'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Icon from './Icon';

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
  return (
    <div className='grid w-[250px] h-screen place-content-start justify-start relative'>
    <div className='text-purple_02 my-2 px-4 logoSize' onClick={moveToHome} >WA<span className='text-purple_01'>KI</span></div>
    <div className='w-[250px] h-[1px] bg-grey_102'></div>
   <div className='normalText font-[400] px-4'>
   {NavItems.map((item,index)=>(
     <Link href={item.link}>
      <div className={`${activeNav === item.link ? 'text-purple_01 !font-[500]' : 'text-black_101/80 !font-[500]' } py-2`}>{item.title} </div></Link>
    ))}
   </div>
   <div className='absolute bg-grey_102 py-1 items-center bottom-0 w-full justify-center'>
   <div className='normalText flex justify-evenly w-full gap-2.5 my-2'>
        <Icon icon='logos:tiktok-icon' className='w-[24px] h-[24px] '/>
        <Icon icon='skill-icons:instagram' className='w-[24px] h-[24px] '/>
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
