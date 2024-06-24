import { Products } from '@/Data/Products'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function OfficialStores() {
  return (
    <div className='w-full'>
        <CategoryHeader icon='streamline:store-1-solid' headingLeft='OFFICIAL STORES' rightIcon={true} headingRight='SEE ALL' />
        <div className='w-full flex overflow-x-auto md:space-x-2 flex-shrink-0 no-scrollbar'>
      {Products.slice(6,10).map((item,index)=>(
        <div className='w-[50%]  xxs:w-[50%] md:w-1/4 flex-shrink-0'>
        <ProductImage  imageUrl={item.imageUrl} officialStore={true} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default OfficialStores
