"use client"
import { Products } from '@/Data/Products'
import { ProductsProps } from '@/Data/type'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React, { useEffect, useState } from 'react'

function page() {
  const [womenProducts,setWomenProducts] = useState<ProductsProps[] | null>([]);

 useEffect(()=>{
  const checkWomenCategory =(item:any)=>{
   if( item.category.includes('Women')){
    return item
   }
  }
  const results = Products.filter(checkWomenCategory);
  setWomenProducts(results)
 },[])
  return (
    <div>
      <CardWrapper customClass='mt-2.5 md:mt-5'>
      <CategoryHeader headingLeft='Women&apos;s'   />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3'>
   {womenProducts && womenProducts.map((item,index)=>(
      <ProductImage 
      item={item}
      key={item.id}
      id={item.id}
      title={item.title}
      imageUrl={item.gallery[0].imageUrl} 
      price={577}
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
