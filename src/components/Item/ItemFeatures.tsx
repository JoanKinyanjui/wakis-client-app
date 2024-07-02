import React from 'react'

function ItemFeatures() {
  return (
    <div className='grid md:flex justify-between my-2.5 md:my-5'>
     <div className=' w-full md:w-1/2'>
     <p className='mediumTitle py-2'>KEY FEATURES</p>
     <div className='normalText'>
     <p> 1. Style : Casual</p>
     <p> 2. Fabric Type : Satin</p>
      <p>3. Length : Knee Length</p>
      <p>4. Fit Type :Skinny</p>
      <p> 5. Gender : Women</p>
     </div>
     </div>
     <div className=' w-full md:w-1/2 grid normalText'>
     <p className='mediumTitle py-2'>SPECIFICATIONS</p>
     <div className='flex gap-2'><p>SKU</p> : <p className='text-grey_104'>FA113MW2HDIH2NAFAMZ</p></div>
     <div className='flex gap-2'><p>Production Country</p> : <p className='text-grey_104'>Kenya</p></div>
     <div className='flex gap-2'><p>Weight</p> : <p className='text-grey_104'>0.33(kg)</p></div>
     <div className='flex gap-2'><p>Quantity</p> : <p className='text-grey_104'>2</p></div>
     <div className='flex gap-2'><p>SKU</p> : <p className='text-grey_104'>FA113MW2HDIH2NAFAMZ</p></div>
     </div>
    </div>
  )
}

export default ItemFeatures; 
