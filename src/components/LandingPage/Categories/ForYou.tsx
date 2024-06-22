'use client'
import { Products } from '@/Data/Products';
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react';


function ForYou() {
  return (
   <div>
      <CategoryHeader icon='streamline:magic-wand-2-solid' headingLeft='FOR YOU' rightIcon={true} />
      <div className='w-full flex !overflow-x-auto space-x-2'>
      {Products.slice(0,6).map((item,index)=>(
        <div className='max-w-[160px] xxs:w-[200px] md:w-[30%] lg:w-1/5 xl:w-1/6'>
        <ProductImage price={item.price} beforePrice={item.beforePrice} imageUrl={item.imageUrl}  />
        </div>
      ))}
      </div>
   </div>
  )
}

export default ForYou
