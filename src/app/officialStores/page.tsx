import { Products } from '@/Data/Products'
import { Stores } from '@/Data/stores'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import StoreProfile from '@/components/commonComponents/storeProfile'
import React from 'react'

function page() {
  return (
    <div>
      <CardWrapper customClass='mt-2.5 md:mt-5'>
      <CategoryHeader headingLeft='Official Stores'   />
      <div className='w-full grid gap-2 lg:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 '>
      {Stores.map((item,index)=>(
        <div className='w-full'>
        <StoreProfile id={item.id}  imageUrl={item.imageUrl} title={item.title} />
        </div>
      ))}
      </div>
      </CardWrapper>
    </div>
  )
}

export default page