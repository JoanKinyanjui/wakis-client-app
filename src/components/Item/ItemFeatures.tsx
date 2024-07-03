import React from 'react'

function ItemFeatures() {
  return (
    <div className='grid md:flex justify-between my-2.5 md:my-5 gap-2 md:gap-0'>
     <div className=' w-full md:w-1/2'>
     <p className='normalXText !font-[600] py-1 md:py-2'>KEY FEATURES</p>
     <div className='normalText'>
     <div className='flex gap-[2px]'> 1. Style : <p className='text-grey_104'>Casual</p></div>
     <div className='flex gap-[2px]'> 2. Fabric Type : <p className='text-grey_104'>Satin</p></div>
      <div className='flex gap-[2px]'>3. Length : <p className='text-grey_104'>Knee Length</p></div>
      <div className='flex gap-[2px]'>4. Fit Type : <p className='text-grey_104'>Skinny</p></div>
      <div className='flex gap-[2px]'> 5. Gender : <p className='text-grey_104'>Women</p></div>
     </div>
     </div>
     <div className=' w-full md:w-1/2 grid normalText'>
     <p className='normalXText !font-[600] py-1 md:py-2'>SPECIFICATIONS</p>
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
