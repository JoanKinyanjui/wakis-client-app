import { Products } from '@/Data/Products'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function page() {
  return (
    <div>
      <CardWrapper customClass='mt-2.5 md:mt-5'>
      <CategoryHeader headingLeft='Shoes'   />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3'>
   {Products.map(()=>(
      <ProductImage 
      title='Black heels' 
      imageUrl='https://i.pinimg.com/474x/48/55/bb/4855bb9b53c28434247e752ecf369d61.jpg' 
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
