import ClientReview from '@/components/commonComponents/ClientReview'
import React from 'react'
import ClientReviewImages from './ClientReviewImages';

type  ReviewsHeaderProps ={
  allReviews:boolean;
  imagesOnly:boolean;
  onSelectATab: (tab:string)=>void;
}
function Reviews({allReviews,imagesOnly,onSelectATab}:ReviewsHeaderProps) {
  return (
    <div>
     {allReviews ? 
      <ClientReview  />
    :
       <ClientReviewImages />
    }
    </div>
  )
}

export default Reviews
