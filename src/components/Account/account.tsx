"use client"
import React, { useEffect, useState } from 'react'
import CardWrapper from '../commonComponents/CardWrapper'
import { accMenuList } from '../../Data/accountMenu'
import Icon from '../commonComponents/Icon'
import AccountDetails from './Contents/accountDetails'
import Orders from './Contents/Orders/Orders'
import FollowedSellers from './Contents/FollowedSellers/FollowedSellers'
import RecentlyViewed from './Contents/RecentlyViewed'
import EmailPreferences from './Contents/emailPreferences'
import Logout from './Contents/Logout'
import Login from './Auth/Login';
import Signup from './Auth/Signup'
import ModalComponent from '../commonComponents/ModalComponent'


function Account() {
  const [activeContent,setActiveContent] = useState<number>(1);

  const selectActiveMenu = (id:number)=>{
  setActiveContent(id);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
      handleOpen();
  },[])

// auth ...
const [isLogin,setIsLogin] = useState<boolean>(true);
const setLoginTrue =(x:boolean)=>{
      setIsLogin(x)
}

  return (
   <CardWrapper customClass='mb-10'>
     <div className='grid md:flex gap-5 w-full items-start '>
     <div className='w-full flex overflow-x-auto md:grid  md:w-[30%] lg:w-[20%] cursor-pointer no-scrollbar mb-2 '>
      {accMenuList.map((item,index)=>(
        <div key={item.id} onClick={()=>selectActiveMenu(item.id)} className={`w-full mx-2 md:mx-0 ${activeContent === item.id ? 'bg-grey_101 dark:bg-purple_01/30 ' :"bg-transparent"} rounded-[2px]  py-2 md:py-3 px-2 md:px-2 grid md:flex md:gap-2 items-start md:items-center`}>
          <Icon  icon={item.icon} className='mx-auto md:mx-0 text-black_101 dark:text-grey_102 w-[15px] md:w-[20px] h-[15px] md:h-[20px]'/>
          <p className='smallText md:normalText text-center md:text-start !font-[500] dark:text-grey_102'>{item.menuTitle}</p>
        </div>
      ))}
     </div>

     <div className='w-full md:w-[70%] lg:w-[80%] '>
      {(activeContent === 1) ? (
<div><AccountDetails /></div>
      ) :(activeContent === 2) ? (
<div><Orders /></div>
      ) : (activeContent === 3) ?(
<div><FollowedSellers /></div>
      ): (activeContent === 4) ? (
<div><RecentlyViewed /></div>
      ): (activeContent === 5) ? (
<div><EmailPreferences /></div>
      ):(activeContent === 6) ? (
 <div><Logout /></div>
      ): null}
      
     </div>
    </div>

 <ModalComponent  open={open} handleClose={handleClose}>
 <div>
           {isLogin 
      ?
            <Login changeContent={setLoginTrue}/>
      :
            <Signup changeContent={setLoginTrue}/>
      }
</div>
 </ModalComponent>
   </CardWrapper>
  )
}

export default Account;


