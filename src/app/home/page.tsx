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
      title='Pink satin dress' 
      imageUrl='https://i.pinimg.com/474x/eb/ee/04/ebee04fea5989bc2f67b54d3b9083d88.jpg' 
      price='577'
      beforePrice='600'
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
