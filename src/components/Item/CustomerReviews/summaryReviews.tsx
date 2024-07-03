import { ProductsProps } from '@/Data/type';
import CustomerReviewSummary from '@/components/commonComponents/CustomerReviewSummary'
import React from 'react'

interface ItemProps {
  item: ProductsProps;
}

function SummaryReviews({item}:ItemProps) {
  return (
    <div>
    <CustomerReviewSummary  item={item}/>
    </div>
  )
}

export default SummaryReviews
