import Icon from '@/components/commonComponents/Icon';
import { ReviewsProps } from '@/Data/type';
import Image from 'next/image'
import React, { useState } from 'react'


type sortedReviewProps ={
  sortedReviews:ReviewsProps[];
  setSortedReviews: React.Dispatch<React.SetStateAction<ReviewsProps[]>>;
}

function ClientReviewImages({sortedReviews,setSortedReviews}:sortedReviewProps) {

  const [liked,setLiked] = useState<boolean>(false);

  const addReviewFn = (id: number) => {
    const updatedReviews = sortedReviews.map(review => {
      if (review.id === id) {
        return { ...review, likes: review.likes + 1 };
      }
      return review;
    });
    setSortedReviews(updatedReviews);
    setLiked(true)
  };
  
  const minusReviewFn = (id: number) => {
    const updatedReviews = sortedReviews.map(review => {
      if (review.id === id) {
        return { ...review, likes: review.likes - 1 };
      }
      return review;
    });
    setSortedReviews(updatedReviews);
    setLiked(false)
  };
  
  return (
  <>
  {sortedReviews && sortedReviews.map((review)=>(
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
       <div className='grid grid-cols-4  md:grid-cols-5 lg:grid-cols-6  gap-2 lg:gap-3  w-full md:w-3/4 justify-center md:justify-start'>
      {review.images.map((image)=>(
         <div  className='w-[100%] md:w-[auto] h-[60px] md:h-[80px]  rounded-sm overflow-hidden'>
         <Image src={image.url} alt='' width={35} height={35} className='w-full h-full rounded-sm' />
         </div>
      ))}
       </div>

       <div className='md:flex gap-2.5 items-center hidden w-full md:w-1/4 justify-center '>
       {liked ?
      <Icon icon='mdi:like' className='w-[16px] h-[16px] md:w-[24px] md:h-[24px]' onClick={()=>addReviewFn(review.id)}/>
       :
       <Icon icon='mdi:like-outline' className='w-[16px] h-[16px] md:w-[24px] md:h-[24px]' onClick={()=>minusReviewFn(review.id)}/>
       }
       <p className='text-grey_103 smallText flex line'>( {review.likes} )</p>
       </div>
      </div>
    </div>
  ))}
  </>
  )
}

export default ClientReviewImages
