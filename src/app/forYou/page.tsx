import { Products } from '@/Data/Products'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function page() {
  return (
    <div>
      <CardWrapper customClass='mt-2.5 md:mt-5'>
      <CategoryHeader headingLeft='For You'   />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3'>
   {Products.map((item,index)=>(
      <ProductImage 
      title= {item.title}
      imageUrl={item.imageUrl} 
      price={item.price}
      beforePrice={item.beforePrice}
      />
   ))}
      </div>
      </CardWrapper>
    </div>
  )
}

export default page
