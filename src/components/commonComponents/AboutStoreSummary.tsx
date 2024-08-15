import React from 'react'
import Buttons from './Buttons'
import {AboutStoreSummaryProps } from './types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function AboutStoreSummary({
  addTitle=true,
  name='KENDY THRIFT STORE' ,
  rating=4.9 ,
  followers='10K' ,
  items='350' ,
  logo='https://i.pinimg.com/474x/5b/97/d2/5b97d2219af644bb800cfd7bccbb027c.jpg',
  id
} :AboutStoreSummaryProps) {
  const router = useRouter();
  return (
    <div className={`grid gap-2.5 md:gap-5  ${addTitle ? 'w-full sm:w-[80%] md:w-3/4 lg:w-1/2' :'border-b-[1px] border-grey_102 py-2.5 md:py-5 '}`} >
     {addTitle ?  <div className='subTitle uppercase text-black_101 dark:text-grey_102'>
        About Store
      </div> : null}
      {id ? 
       <div className='flex gap-2.5 md:gap-5'>
        <div className={`${addTitle === true ? 'w-[70px] h-[70px]' :'w-[70px] h-[70px] md:w-[100px] md:h-[100px]'}`}>
        {logo ? <Image src={logo}  alt='svg' width={70} height={70} className='shrink-0 w-full h-full border  rounded-[10px]  shadow-lg'/> : null }
        </div>
        <div className='grid place-content-start gap-2.5 md:gap-4'>
            <p className='mediumTitle text-black_101  dark:text-grey_102'>{name}</p>
            <div className='text-grey_103 normalText flex gap-2.5 md:gap-5 items-center'>
        <p>{rating} Rating</p>
        <p>{parseFloat(followers)/1000}K Followers</p>
        <p>{items} Items</p>
            </div>
        </div>
       </div>
       :
       <div className='flex gap-2.5 md:gap-5'>
       <div className={`${addTitle === true ? 'w-[70px] h-[70px]' :'w-[70px] h-[70px] md:w-[100px] md:h-[100px]'}`}>
       {logo ? <Image src={logo}  alt='svg' width={70} height={70} className='shrink-0 w-full h-full border  rounded-[10px]  shadow-lg'/> : null }
       </div>
       <div className='grid place-content-start gap-2.5 md:gap-4'>
           <p className='mediumTitle  text-black_101  dark:text-grey_102'>{name}</p>
           <div className='text-grey_103 normalText flex gap-2.5 md:gap-5 items-center'>
       <p>{rating} Rating</p>
       <p>{parseFloat(followers)/1000}K Followers</p>
       <p>{items} Items</p>
           </div>
       </div>
      </div>}

       <div className='flex gap-2.5 md:gap-5 justify-between md:justify-start'>
  <Buttons buttonText={`${addTitle ? 'All Items' : 'Share'}`} className='border-[1px] border-grey_104 w-full md:w-[174px] text-grey_103 font-normal' rounded={false} onClick={()=>router.push('/stores/3')}/>
  <Buttons buttonText='+ Follow' className='border-[1px] border-grey_104 w-full md:w-[174px] text-grey_103 font-normal' rounded={false}/>
       </div>
    </div>
  )
}

export default AboutStoreSummary
