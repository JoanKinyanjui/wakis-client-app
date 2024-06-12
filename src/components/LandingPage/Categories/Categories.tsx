import React from 'react'
import ForYou from './ForYou'
import CardWrapper from '@/components/commonComponents/CardWrapper'
import FlashSale from './FlashSale'
import WhatsTrending from './WhatsTrending'
import InYourLocation from './InYourLocation'
import OfficialStores from './OfficialStores'

function Categories() {
  return (
    <CardWrapper customClass='my-5 grid gap-2.5 md:gap-5'>
      <ForYou />
      <FlashSale />
      <WhatsTrending />
      <InYourLocation />
      <OfficialStores />
    </CardWrapper>
  )
}

export default Categories
