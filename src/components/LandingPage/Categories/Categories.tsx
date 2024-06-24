import React from 'react'
import ForYou from './ForYou'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import FlashSale from './FlashSale'
import WhatsTrending from './WhatsTrending'
import InYourLocation from './InYourLocation'
import OfficialStores from './OfficialStores'
import WholeSale from './WholeSale'

function Categories() {
  return (
    <CardWrapper customClass='my-5 flex flex-col gap-5'>    
      <ForYou />
      <FlashSale />
      <WhatsTrending />
      <InYourLocation />
      <WholeSale />
      <OfficialStores />
    </CardWrapper>
  )
}

export default Categories
