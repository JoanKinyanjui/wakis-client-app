import React from 'react'
import StoreProfile from './StoreProfile';
import { StoreProps } from '@/Data/type';
import StoreProducts from './StoreProducts';
import CardWrapper from '../commonComponents/CardWrapper';

interface storeProps {
    store: StoreProps;
  }
function Store({store}:storeProps) {
    console.log(store)
  return (
    <div>
   <CardWrapper  customClass='grid gap-2.5 md:gap-5'>
   <StoreProfile  store={store}/>
   <StoreProducts />
   </CardWrapper>
    </div>
  )
}

export default Store
