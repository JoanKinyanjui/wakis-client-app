"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import CustomerReviews from './CustomerReviews/customerReviews'
import AboutStore from './AboutStore/aboutStore'
import ItemImages from './ItemImages'
import MoreInfo from './moreInfo'
import CardWrapper from '../commonComponents/CardWrapper'
import { Products } from '@/Data/Products'
import { ProductsProps } from '@/Data/type'
import ItemFeatures from './ItemFeatures'

interface ItemImagesProps {
  product: string;
}

function Item({product}:ItemImagesProps) {
  const [item,setItem] = useState<ProductsProps | undefined>(undefined);

  const findItem = () =>{
    const chosenItem = Products.find((itm)=>itm.id === product);
    if(chosenItem){
      console.log('=====>',chosenItem)
      setItem(chosenItem)
    }
    }
    useEffect(()=>{
      findItem();
    },[]);
  
  console.log('item ====>', item)
  return (
  <>
  {item &&  
   <CardWrapper customClass='flex flex-col gap-5 ' >
     <div className='grid md:flex md:justify-between gap-5 cursor-pointer'>
     <ItemImages item={item} />
     <MoreInfo  item={item}/>
     </div>
      <ItemFeatures />
      <AboutStore />
      <CustomerReviews item={item} />
    </CardWrapper>
    }
  </>
  )
}

export default Item
