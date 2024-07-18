import React from 'react'
import Icon from '../commonComponents/Icon'
import { CheckoutWrapperProps } from '../commonComponents/types'
import { useRouter } from 'next/navigation'

function CheckoutWrapper({title,onChangeInfo}:CheckoutWrapperProps) {
    const router = useRouter();
  return (
    <div className=''>
        <div className=' flex justify-between  md:px-5 border-b-[1px] border-grey_102'>
            <div className='normalText uppercase !font-[500]'>{title}</div>
            <div className='smallText underline flex gap-2.5 md:gap-5 text-grey_104' onClick={()=>router.push('/account')}>
                <p>Change</p>
                <Icon icon='iconamoon:arrow-right-2-duotone' className='text-[18px] font-light'/>
            </div>
        </div>
      
    </div>
  )
}

export default CheckoutWrapper
