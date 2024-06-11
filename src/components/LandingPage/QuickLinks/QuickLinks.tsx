import React from 'react'
import IndividualQuickLink from './IndividualQuickLink'
import { quickLinks } from '@/Data/QuickLinks'
import CardWrapper from '@/components/commonComponents/CardWrapper'

function QuickLinks() {
    const halfwayIndex = Math.ceil(quickLinks.length/2);
  return (
   <div className=' w-full'>
   <CardWrapper>
   <div className='hidden sm:grid  xxs:grid-cols-6  gap-3 md:gap-4 place-items-center'>
    {quickLinks.map((item,i)=>(
        <div key={item.id} className=''>
             <IndividualQuickLink item={item} />
        </div>
    ))}
    </div>
  <div className='grid justify-center sm:hidden gap-3 sm:gap-4 w-full'>
  <div className='flex justify-between w-full gap-4 xxs:gap-5 overflow-x-auto'>
    {quickLinks?.slice(0,halfwayIndex).map((item,i)=>(
        <div key={item.id} className='sm:justify-between flex w-full'>
             <IndividualQuickLink item={item}/>
        </div>
    ))}
    </div>
    <div className='flex justify-between w-full gap-4 xxs:gap-5 overflow-x-auto'>
    {quickLinks?.slice(halfwayIndex).map((item,i)=>(
        <div key={item.id} className='sm:justify-between flex'>
             <IndividualQuickLink item={item}/>
        </div>
    ))}
    </div>
  </div>
   </CardWrapper>
   </div>
  )
}

export default QuickLinks
