import React, { useState } from 'react'
import ReviewsHeader from './ReviewsHeader'
import Reviews from './Reviews'
import { ProductsProps } from '@/Data/type';

interface ItemProps {
  item: ProductsProps;
}

function AllReviews({item}:ItemProps) {
  const [allReviews,setAllReviews] = useState<boolean>(true);
  const [imagesOnly,setImagesonly] = useState<boolean>(false);

  const onSelectATab = (tab :string) =>{
    if(tab === '1'){
      setAllReviews(true);
      setImagesonly(false);
    }else {
      setAllReviews(false);
      setImagesonly(true);
    }

  }

  return (
    <div>
   <ReviewsHeader  allReviews={allReviews}  imagesOnly={imagesOnly}  onSelectATab={onSelectATab}/>
   <Reviews  allReviews={allReviews}  imagesOnly={imagesOnly}  onSelectATab={onSelectATab} />
    </div>
  )
}

export default AllReviews
