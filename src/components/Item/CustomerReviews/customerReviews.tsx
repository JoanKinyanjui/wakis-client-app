import React from 'react'
import AllReviews from './allReviews'
import SummaryReviews from './summaryReviews'
import { ProductsProps } from '@/Data/type';

interface ItemProps {
  item: ProductsProps;
}
function CustomerReviews({item}:ItemProps) {
  return (
    <div className='grid gap-5'>
      <SummaryReviews  item={item}/>
      <AllReviews item={item} />
    </div>
  )
}

export default CustomerReviews
