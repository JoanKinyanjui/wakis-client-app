"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import CustomerReviews from './CustomerReviews/customerReviews'
import AboutStore from './AboutStore/aboutStore'
import ItemImages from './ItemImages'
import MoreInfo from './moreInfo'
import ItemDescription from './itemDescription'
import CardWrapper from '../commonComponents/CardWrapper'
import { Products } from '@/Data/Products'
import { ProductsProps } from '@/Data/type'

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
    <CardWrapper >
     <div className='grid lg:flex lg:justify-between gap-5'>
     <ItemImages item={item} />
     <MoreInfo  item={item}/>
     </div>
      <ItemDescription />
      <AboutStore />
      <CustomerReviews />
    </CardWrapper>
  )
}

export default Item
