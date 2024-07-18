import React from 'react'
import CheckoutWrapper from './CheckoutWrapper'

function CustomerAddress() {
  return (
   <div>
     <CheckoutWrapper title='Customer Address' onChangeInfo={()=>console.log('change info')} />
     <div className='normalText text-grey_104 py-2.5 md:py-5 gap-[2px]'>
        <p className='!font-[500] text-black_101'>Joan Kinyanjui</p>
        <p>12997-00100 | Kiambu - Kabete/Uthiru</p>
        <p>+254790236990</p>
     </div>
   </div>
      
  )
}

export default CustomerAddress
