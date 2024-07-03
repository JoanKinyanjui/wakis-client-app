import Icon from '@/components/commonComponents/Icon'
import React from 'react';

type  ReviewsHeaderProps ={
  allReviews:boolean;
  imagesOnly:boolean;
  onSelectATab: (tab:string)=>void;
}

function ReviewsHeader({allReviews,imagesOnly,onSelectATab}:ReviewsHeaderProps) {
  return (
    <div className=''>
      <div className='flex justify-between'>
        <div className='flex gap-5 md:gap-10 normalXText'>
            <div onClick={()=>onSelectATab('1')} className={`py-[2px] md:py-1 ${allReviews ? 'border-b-[2px] md:border-b-[3px]  border-purple_01' : 'border-none'}`}>All Reviews</div>
            <div onClick={()=>onSelectATab('2')} className={`py-[2px] md:py-1  ${imagesOnly ? 'border-b-[2px] md:border-b-[3px]  border-purple_01' : 'border-none'}`}>All Images</div>
        </div>

        <div className='flex gap-5 md:gap-10 bg-grey_101 px-2 md:px-4 rounded-sm normalXText '>
         <div className='flex gap-3 items-center'>All <Icon icon='iconamoon:arrow-down-2-thin'  /></div>
        </div>

      </div>
    </div>
  )
}

export default ReviewsHeader
