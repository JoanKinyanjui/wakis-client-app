import React from 'react'
import FollowedSeller from './FollowedSeller'
import { Stores } from '@/Data/stores'

function FollowedSellers() {
  return (
    <div>
{Stores.slice(2,5).map((item,index)=>(
   <FollowedSeller id={item.id} name={item.title} rating={item.rating} followers={item.followers} items={item.items} logo={item.imageUrl}  />
))}
    </div>
  )
}

export default FollowedSellers
