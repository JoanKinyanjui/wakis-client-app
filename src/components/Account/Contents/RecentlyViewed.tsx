import ProductImage from '@/components/commonComponents/ProductImage'
import { Products } from '@/Data/Products'
import React from 'react'

function RecentlyViewed() {
  return (
    <div className='grid grid-cols-2  sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6  gap-3 w-full  '>
    {Products.slice(5,9).map((item)=>(
      <div key={item.id} className='w-[100px] xxs:w-[120px] md:w-[25%] lg:w-1/5 xl:w-1/6 flex-shrink-0 mx-auto md:mx-0'>
      <ProductImage 
       key={item.id}
       id={item.id}
       title= {item.title}
       imageUrl={item.gallery[0].imageUrl} 
       price={item.price}
       beforePrice={item.beforePrice}
       rating={item.rating}
       itemsSold={item.itemsSold} 
      />
      </div>
    ))}
    </div>
  )
}

export default RecentlyViewed
