import React from 'react'
import ReviewsHeader from './ReviewsHeader'
import Reviews from './Reviews'
import { ProductsProps } from '@/Data/type';

interface ItemProps {
  item: ProductsProps;
}

function AllReviews({item}:ItemProps) {
  return (
    <div>
   <ReviewsHeader />
   <Reviews />
    </div>
  )
}

export default AllReviews
