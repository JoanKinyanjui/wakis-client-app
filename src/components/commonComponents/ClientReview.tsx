import { Reviews } from '@/Data/Reviews'
import Image from 'next/image'
import React from 'react'

function ClientReview() {
  return (
<>
{Reviews && Reviews.map((review)=>(
      <div key={review.id} className='w-full grid md:flex gap-5 my-2.5 md:my-5'>
      <div className='flex  md:gap-5 w-full justify-between md:justify-center md:w-1/2 '>

     <div className='grid justify-start gap-2.5 md:gap-5 w-[65%] xs:w-[70%] md:w-full place-content-center'>
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
     <div className='grid gap-1 md:gap-2 place-content-center'>
      <p className='text-[12px] md:text-[14px] font-[600] text-black_101'>29 Aug , 2023</p>
      <p className='normalText text-start text-grey_103'>{review.content}</p>
      <p className='text-[12px] md:text-[14px] font-[400] text-grey_103 '> ~{review.name}</p>
     </div>
     </div>

     <div className='md:hidden gap-1 items-center flex  justify-center  pl-2 w-[35%] xs:w-[30%]'>
       <Image src='/assets/images/likes.png' alt='' width={35} height={35} className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]' />
       <p className='text-grey_103 normalText'>( {review.likes} )</p>
       </div>

      </div>


      <div className='flex  w-full md:w-1/2  items-center'>
       <div className='grid grid-cols-3 xs:grid-cols-4 md:grid-cols-3  gap-2 lg:gap-3  w-full md:w-3/4 justify-center md:justify-start'>
      {review.images.map((image)=>(
         <div  className='w-[100%] h-[100px] md:h-[120px] lg:h-[140px] rounded-sm overflow-hidden'>
         <Image src='https://images.pexels.com/photos/19811927/pexels-photo-19811927/free-photo-of-portrait-of-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' width={35} height={35} className='w-full h-full' />
         </div>
      ))}
       </div>

       <div className='md:flex gap-2.5 items-center hidden w-full md:w-1/4 justify-center '>
       <Image src='/assets/images/likes.png' alt='' width={35} height={35} className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]' />
       <p className='text-grey_103 normalText'>( {review.likes} )</p>
       </div>
      </div>

    </div>
))}
</>
  )
}

export default ClientReview
