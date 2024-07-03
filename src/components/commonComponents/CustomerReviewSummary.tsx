import { ProductsProps } from '@/Data/type';
import Image from 'next/image'
import React from 'react'

interface ItemProps {
  item: ProductsProps;
}


function CustomerReviewSummary({item}:ItemProps) {
  const rating = item.rating || 0
  return (
    <div className='grid gap-2.5 md:gap-5'>

      <div className='subTitle'>Customer Reviews</div>

      <div className='bg-grey_101 rounded-[10px] w-full  px-2.5 py-2.5 md:px-5 md:py-5 grid lg:flex gap-2  md:gap-[50px] md:items-center'>
          <div>
            <p className='normalXText text-black_101 mb-1 md:mb-2.5'>Average Rating</p>
           <div className='flex gap-5 md:gap-2 items-center'>
           <p className='text-[15px] md:text-[18px] font-[700] text-black_101'>4.5</p>
          
           <div className='flex gap-1 md:gap-2 items-center'>
           { [...Array(5)].map((_, index) => (
        <Image
          key={index}
          src={index < rating ? '/assets/images/rating.png' : '/assets/images/greyRating.png'}
          alt='Star Rating'
          width={25}
          height={25}
          className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]'
        />
      ))}
           </div>
           </div>
          </div>

          <div>
          <p className='normalXText text-black_101 mb-1 md:mb-2.5'>Did Item Fit Well ?</p>
            <div className='grid md:gap-22'>

              <div className='flex items-center'>
                <div className='w-[70px] md:w-[150px] '>
                  <p className='smallText'>Small</p>
                </div>
                <div className='h-1 md:h-2 bg-grey_102 rounded-full w-[200px] md:w-[300px] overflow-hidden'>
                   <div className={`w-[30%] rounded-full h-1 md:h-2 bg-[black]  `}></div>
                  </div>
              </div>
              <div className='flex items-center'>
                <div className='w-[70px] md:w-[150px] '>
                  <p className='smallText'>True Size</p>
                </div>
                <div className='h-1 md:h-2 bg-grey_102 rounded-full w-[200px] md:w-[300px] overflow-hidden'>
                   <div className={`w-[80%] rounded-full h-1 md:h-2 bg-[black]  `}></div>
                  </div>
              </div>
              <div className='flex items-center'>
                <div className='w-[70px] md:w-[150px] '>
                  <p className='smallText'>Large</p>
                </div>
                <div className='h-1 md:h-2 bg-grey_102 rounded-full w-[200px] md:w-[300px] overflow-hidden'>
                   <div className={`w-[10%] rounded-full h-1 md:h-2 bg-[black]  `}></div>
                  </div>
              </div>

            </div>
          </div>
      </div>
      
    </div>
  )
}

export default CustomerReviewSummary
