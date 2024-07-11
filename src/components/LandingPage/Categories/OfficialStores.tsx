import { Products } from '@/Data/Products'
import { Stores } from '@/Data/stores'
import CategoryHeader from '@/components/commonComponents/CategoryHeader'
import StoreProfile from '@/components/commonComponents/storeProfile'
import React from 'react'

function OfficialStores() {
  return (
    <div className='w-full bor'>
        <CategoryHeader link='officialStores' icon='streamline:store-1-solid' headingLeft='OFFICIAL STORES' rightIcon={true} headingRight='SEE ALL' />
        <div className='w-full flex overflow-x-auto md:space-x-2 flex-shrink-0 no-scrollbar'>
      {Stores.map((item,index)=>(
        <div className='w-[45%] sm:w-[35%] md:w-1/4 flex-shrink-0'>
       <StoreProfile id={item.id}  imageUrl={item.imageUrl} title={item.title} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default OfficialStores
