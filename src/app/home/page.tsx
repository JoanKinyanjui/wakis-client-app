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
   {Products.map(()=>(
      <ProductImage 
      title='Pink satin dress' 
      imageUrl='https://i.pinimg.com/474x/a7/8a/64/a78a6417f460c9f9fb2497ad2c7bfa8a.jpg' 
      price='577'
      beforePrice='600'
      />
   ))}
      </div>
      </CardWrapper>
    </div>
  )
}

export default page
