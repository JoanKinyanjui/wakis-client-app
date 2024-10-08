'use client'
import { Products } from '@/Data/Products';
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react';


function ForYou() {
  return (
   <div className='w-full'>
      <CategoryHeader link='forYou' icon='streamline:magic-wand-2-solid' headingLeft='FOR YOU' rightIcon={true} />
      <div className='w-full flex overflow-x-auto space-x-2 no-scrollbar'>
      {Products.slice(3,9).map((item,index)=>(
        <div className='w-[100px] xxs:w-[120px] md:w-[25%] lg:w-1/5 xl:w-1/6 flex-shrink-0'>
        <ProductImage
         item={item}
         id={item.id} 
         price={item.price} 
         beforePrice={item.beforePrice}
         imageUrl={item.imageUrl}  
         />
        </div>
      ))}
      </div>
   </div>
  )
}

export default ForYou
