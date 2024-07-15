import { NavItems } from '@/Data/NavItems'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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
    <div className='mx-5 grid'>
          <div className='text-purple_02  logoSize' onClick={moveToHome} >WA<span className='text-purple_01'>KI</span></div>
       {NavItems.map((item,index)=>(
     <Link href={item.link}>
      <div className={`${activeNav === item.link ? 'text-purple_01 !font-[500]' : 'text-grey_104 !font-[500]' } py-2`}>{item.title} </div></Link>
    ))}
    </div>
  )
}

export default DrawerComponent
