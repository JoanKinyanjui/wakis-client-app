import { Products } from '@/Data/Products'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function WhatsTrending() {
  return (
    <div>
      <CategoryHeader icon='streamline:trending-content-solid' headingLeft='WHAT&apos;S TRENDING' rightIcon={true} headingRight='SEE ALL' />
      <div className='w-full flex overflow-x-auto space-x-2 no-scrollbar'>
      {Products.slice(2,9).map((item,index)=>(
        <div className='w-[100px] xxs:w-[120px] md:w-[25%] lg:w-1/5 xl:w-1/6 flex-shrink-0'>
        <ProductImage price={item.price} beforePrice={item.beforePrice} imageUrl={item.imageUrl}  />
        </div>
      ))}
      </div>
    </div>
  )
}

export default WhatsTrending
