import Image from 'next/image'
import React from 'react'
import { OrderProps } from '../../types'

function OneOrder({orderId, title,imageUrl,status}:OrderProps) {
  return (
    <div className='flex w-full justify-between border-[1px] border-grey_102 px-2 py-2 rounded-md my-1 md:my-2'>
      <div className=' flex gap-5'>
        <Image alt='' src={imageUrl} width={100} height={80} className='rounded-sm w-[70px] h-[90px] md:w-[100px] md:h-[110px]'/>

      <div className='grid gap-1'>
      <p className='text-grey_103 dark:text-grey_104 uppercase normalText'>{orderId}</p>
      <p className='normalText text-black_101 dark:text-grey_102'>{title}</p>
      <div className={`${status === 'processing' ? 'bg-[blue]/70' : status === 'delivered' ? 'bg-[green]/70': 'bg-[red]/70'} smallText flex justify-center items-center text-white_101 px-4 rounded-sm py-1 capitalize h-[max-content] w-[max-content]`} >
        {status}
      </div>
      <p className='smallText text-black_101 dark:text-grey_102'>01-08-2023</p>
      </div>
      </div>

      <div>
<p className='smallText py-[1px]  text-black_101 dark:text-grey_102'>SEE DETAILS</p>
      </div>
    </div>
  )
}

export default OneOrder
