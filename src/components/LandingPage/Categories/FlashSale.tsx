import { Products } from '@/Data/Products'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function FlashSale() {
  return (
    <div className='w-full'>
         <CategoryHeader link='flashSale' icon='typcn:flash' headingLeft='FLASH SALE' rightIcon={true} headingRight='GRAB NOW' />
      <div className='w-full flex overflow-x-auto space-x-2 no-scrollbar '>
      {Products.slice(0,6).map((item,index)=>(
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

export default FlashSale
