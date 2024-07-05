import { Products } from '@/Data/Products'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function page() {
  return (
    <div>
      <CardWrapper customClass='mt-2.5 md:mt-5'>
      <CategoryHeader headingLeft='Home Accessories'   />
      <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
   {Products.map((item,index)=>(
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
   ))}
      </div>
      </CardWrapper>
    </div>
  )
}

export default page
