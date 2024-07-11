import React from 'react'
import { StoreProps } from '@/Data/type';
import AboutStoreSummary from '../commonComponents/AboutStoreSummary';

interface storeProps {
    store: StoreProps;
  }

function StoreProfile({store}:storeProps) {
  return (
    <div>
    <AboutStoreSummary 
    addTitle={false}
    name={store.title}
    rating={store.rating}
    followers={store.followers}
    items={store.items}
    logo={store.imageUrl}
    />    
    </div>
  )
}

export default StoreProfile
