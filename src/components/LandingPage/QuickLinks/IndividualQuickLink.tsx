import Image from 'next/image'
import React from 'react'

function IndividualQuickLink() {
  return (
   <div className='grid gap-2'>
     <div className='w-[50px] h-[50px] md:w-[65px] md:h-[65px] rounded-full shadow-md relative overflow-hidden mx-auto'>
      <Image src='https://i.pinimg.com/474x/86/e4/ce/86e4cedc4e78029fd0b494ddb336e7ea.jpg' alt='link' className=' w-full h-full absolute top-0 left-0 rounded-full' width={60} height={60} />
    </div>
    <p className='smallTextBold mx-auto'>Women</p>
   </div>
  )
}

export default IndividualQuickLink
