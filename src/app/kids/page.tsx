"use client"
import { Products } from '@/Data/Products'
import { ProductsProps } from '@/Data/type'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import ProductImage from '@/components/commonComponents/ProductImage'
import React, { useEffect, useState } from 'react'

function page() {
  const [kidsProducts,setKidsProducts] = useState<ProductsProps[]>([]);

  useEffect(()=>{
    const checkKidsCategory =(item:any)=>{
   if(item.category.includes('Kids')){
    return item
   }
    }
    const results = Products.filter(checkKidsCategory);
    setKidsProducts(results);

  },[])
  
  return (
    <div>
      <CardWrapper customClass='mt-2.5 md:mt-5'>
      <CategoryHeader headingLeft='Kid&apos;s'   />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3'>
   {kidsProducts && kidsProducts.map((item,index)=>(
      <ProductImage 
      item={item}
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
