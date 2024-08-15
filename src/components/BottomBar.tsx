import React from 'react'
import Buttons from './commonComponents/Buttons'
import Image from 'next/image'
import CardWrapper from './commonComponents/CardWrapper'

function BottomBar() {
  return (
    <div className='w-full  bg-black_101 dark:bg-purple_02  h-full mt-[50px] sm:mt-[80px]  relative'>
     <CardWrapper customClass='grid md:flex h-full  items-center md:relative pt-[50px] md:pt-[70px] pb-[50px] md:pb-[100px]' >
     <div className='grid gap-2.5 md:gap-5 md:w-3/4 w-1/2 justify-start z-50'>
        <div className='text-white_101 mainTitle text-start '>CRAZY OFFERS ON GYM SUITS <br /> FROM  <span className='text-purple_01'>WAKI</span></div>
        <div>
          <Buttons  buttonText='SHOP NOW' rounded={true} className='bg-gradient-to-r from-purple_01 dark:from-purple_01/50 to-purple_02 dark:to-black_101 text-white_101 w-[150px] md:w-[200px] '/>
        </div>
      </div>
      <div className='w-full md:w-1/2 z-30'>
<div className='absolute bottom-[0px]  right-0  flex items-end justify-end'>
<Image src='/assets/images/gym1.png' alt='' width={200} height={200}  className='h-[100px] md:h-[200px] w-auto  hidden lg:flex'/>
<Image src='/assets/images/gym2.png' alt='' width={200} height={200}  className='h-[290px] sm:h-[260px] md:h-[400px] w-auto '/>
</div>
      </div>
     </CardWrapper>
    </div>
  )
}

export default BottomBar
