import React, { useEffect, useState } from 'react'
import ReviewsHeader from './ReviewsHeader'
import Reviews from './Reviews'
import { ProductsProps, ReviewsProps } from '@/Data/type';
import { ReviewsData } from '@/Data/Reviews';

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

  const [sortedReviews,setSortedReviews] = useState<ReviewsProps[]>([]);

  useEffect(()=>{
    setSortedReviews(ReviewsData);
  },[])

  const sortByLatest = ()=>{
    setSortedReviews(ReviewsData);
  }

  const sortByHighest = ()=>{
  const result = [...ReviewsData].sort( (a,b)=>{
    return b.rating-a.rating
  });
    setSortedReviews(result);
  }

  const sortByLowest = ()=>{
    const result = [...ReviewsData].sort((a,b)=>{
      return a.rating-b.rating
    })
    setSortedReviews(result)
    
  }

  return (
    <div>
   <ReviewsHeader  
    allReviews={allReviews} 
    imagesOnly={imagesOnly}  
    onSelectATab={onSelectATab} 
    sortedReviews={sortedReviews} 
    sortByLatest={sortByLatest}
    sortByHighest={sortByHighest}
    sortByLowest={sortByLowest}
    />

   <Reviews 
    allReviews={allReviews}  
    sortedReviews={sortedReviews}  
    setSortedReviews={setSortedReviews}
   />
    </div>
  )
}

export default AllReviews
