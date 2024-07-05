import { Products } from '@/Data/Products'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function InYourLocation() {
  return (
    <div className='w-full'>
        <CategoryHeader icon='carbon:location-filled' headingLeft='IN YOUR LOCATION' rightIcon={true} headingRight='SEE ALL' />
        <div className='w-full flex overflow-x-auto space-x-2 no-scrollbar'>
      {Products.slice(0,6).map((item,index)=>(
        <div className='w-[100px] xxs:w-[120px] md:w-[25%] lg:w-1/5 xl:w-1/6 flex-shrink-0'>
        <ProductImage id={item.id} price={item.price} beforePrice={item.beforePrice} imageUrl={item.imageUrl}  />
        </div>
      ))}
      </div>
    </div>
  )
}

export default InYourLocation
