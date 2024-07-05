import ClientReview from '@/components/commonComponents/ClientReview'
import React, { useState } from 'react'
import ClientReviewImages from './ClientReviewImages';
import { ReviewsProps } from '@/Data/type';

type  ReviewsHeaderProps ={
  allReviews:boolean;
  sortedReviews:ReviewsProps[];
  setSortedReviews: React.Dispatch<React.SetStateAction<ReviewsProps[]>>;
}
function Reviews({sortedReviews,allReviews,setSortedReviews}:ReviewsHeaderProps) {

  return (
    <div>
     {allReviews ? 
      <ClientReview  sortedReviews={sortedReviews} setSortedReviews={setSortedReviews}/>
    :
       <ClientReviewImages sortedReviews={sortedReviews} setSortedReviews={setSortedReviews}/>
    }
    </div>
  )
}

export default Reviews
