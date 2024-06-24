import Image from 'next/image'
import React from 'react'

function CustomerReviewSummary() {
  return (
    <div className='grid gap-2.5 md:gap-5'>

      <div className='subTitle'>Customer Reviews</div>

      <div className='bg-grey_101 rounded-[10px] w-full  px-2.5 py-2.5 md:px-5 md:py-5 grid lg:flex gap-4 md:gap-[50px] md:items-center'>
          <div>
            <p className='mediumTitle text-black_101 mb-2.5'>Average Rating</p>
           <div className='flex gap-5 md:gap-2 items-center'>
           <p className='text-[15px] md:text-[18px] font-[900] text-black_101'>4.5</p>
          
           <div className='flex gap-1 md:gap-2 items-center'>
          <Image src='/assets/images/rating.png' alt='' width={25} height={25} className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]' />
          <Image src='/assets/images/rating.png' alt='' width={25} height={25} className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]' />
          <Image src='/assets/images/rating.png' alt='' width={25} height={25} className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]' />
          <Image src='/assets/images/greyRating.png' alt='' width={25} height={25} className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]' />
           </div>
           </div>
          </div>

          <div>
          <p className='mediumTitle text-black_101 mb-2.5'>Did Item Fit Well ?</p>
            <div className='grid gap-2 md:gap-4'>

              <div className='flex items-center'>
                <div className='w-[70px] md:w-[150px] '>
                  <p className='normalText'>Small</p>
                </div>
                <div className='h-2 bg-grey_102 rounded-full w-[200px] md:w-[300px] overflow-hidden'>
                   <div className={`w-[30%] rounded-full h-2 bg-[black]  `}></div>
                  </div>
              </div>
              <div className='flex items-center'>
                <div className='w-[70px] md:w-[150px] '>
                  <p className='normalText'>True Size</p>
                </div>
                <div className='h-2 bg-grey_102 rounded-full w-[200px] md:w-[300px] overflow-hidden'>
                   <div className={`w-[80%] rounded-full h-2 bg-[black]  `}></div>
                  </div>
              </div>
              <div className='flex items-center'>
                <div className='w-[70px] md:w-[150px] '>
                  <p className='normalText'>Large</p>
                </div>
                <div className='h-2 bg-grey_102 rounded-full w-[200px] md:w-[300px] overflow-hidden'>
                   <div className={`w-[10%] rounded-full h-2 bg-[black]  `}></div>
                  </div>
              </div>

            </div>
          </div>
      </div>
      
    </div>
  )
}

export default CustomerReviewSummary
