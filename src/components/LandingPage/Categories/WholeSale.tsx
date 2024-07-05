import { Products } from '@/Data/Products'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React from 'react'

function WholeSale() {
  return (
    <div className='w-full'>
         <CategoryHeader icon='emojione-monotone:shopping-bags' headingLeft='WHOLESALERS' rightIcon={true} headingRight='' />
      <div className='w-full flex overflow-x-auto space-x-2 no-scrollbar'>
      {Products.slice(4,10).map((item,index)=>(
        <div className='w-[100px] xxs:w-[120px] md:w-[25%] lg:w-1/5 xl:w-1/6 flex-shrink-0'>
        <ProductImage id={item.id} price={item.price} beforePrice={item.beforePrice} imageUrl={item.imageUrl}  />
        </div>
      ))}
      </div>
    </div>
  )
}

export default WholeSale
