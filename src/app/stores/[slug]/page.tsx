"use client"
import StoreProfile from '@/components/commonComponents/storeProfile'
import Store from '@/components/StorePages/Store'
import { Stores } from '@/Data/stores';
import { StoreProps } from '@/Data/type';
import React, { useEffect, useState } from 'react'

function page({params}:{params:{slug:string}}) {
    const [store,setStore] = useState<StoreProps | undefined>(undefined);

useEffect(()=>{
 const result = Stores.find((item)=>item.id === params.slug);
 console.log('===>',result);

if(result){
    setStore(result);
}

},[params.slug])

  return (
    <div>
    {store &&  <Store store = {store}/>}
    </div>
  )
}

export default page
