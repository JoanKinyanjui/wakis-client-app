import { Reviews } from '@/Data/Reviews'
import Image from 'next/image'
import React from 'react'

function ClientReviewImages() {
  return (
  <>
  {Reviews.map((review)=>(
      <div key={review.id}  className='w-full grid gap-1  md:gap-2.5 my-2.5 md:my-5 '>
      <div className='grid justify-start gap-2.5 md:gap-5  w-full place-content-center'>
      <div className='flex gap-1 md:gap-2'>
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          src={index < review.rating ? '/assets/images/rating.png' : '/assets/images/greyRating.png'}
          alt='Star Rating'
          width={25}
          height={25}
          className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]'
        />
      ))}
      </div>
     </div> 

       <div className='flex  w-full   items-center'>
       <div className='grid grid-cols-4 xs:grid-cols-5 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-3  w-full md:w-3/4 justify-center md:justify-start'>
      {review.images.map((image)=>(
         <div  className='w-[100%] md:w-[auto] h-[60px] md:h-[80px]  rounded-sm overflow-hidden'>
         <Image src='https://images.pexels.com/photos/19811927/pexels-photo-19811927/free-photo-of-portrait-of-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' width={35} height={35} className='w-full h-full rounded-sm' />
         </div>
      ))}
       </div>

       <div className='md:flex gap-2.5 items-center hidden w-full md:w-1/4 justify-center '>
       <Image src='/assets/images/likes.png' alt='' width={35} height={35} className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
       <p className='text-grey_103 smallText flex line'>( {review.likes} )</p>
       </div>
      </div>
    </div>
  ))}
  </>
  )
}

export default ClientReviewImages
