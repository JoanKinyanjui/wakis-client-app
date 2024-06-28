import { Products } from '@/Data/Products'
import ProductCard from '@/components/Cart/ProductCard'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import ProductTags from '@/components/commonComponents/ProductTags'
import React from 'react'

function page() {
  return (
    <div>
      <CardWrapper customClass='mt-2.5 md:mt-5'>
      <CategoryHeader headingLeft='Women&apos;s'   />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3'>
   {Products.map(()=>(
      <ProductImage 
      title='Pink satin dress' 
      imageUrl='https://i.pinimg.com/474x/12/7f/0d/127f0d2ba8c221f9969084b1a95c7079.jpg' 
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
