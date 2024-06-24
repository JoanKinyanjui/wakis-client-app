import React from 'react'
import CardWrapper from './commonComponents/CardWrapper'
import Image from 'next/image'
import Icon from './commonComponents/Icon'

function Footer() {
  return (
    <div className='w-full bg-grey_102 h-full py-5 md:py-10 '>
      <CardWrapper customClass='grid gap-2.5 md:gap-5'>
      <div className='grid md:flex gap-2.5 md:gap-0 md:justify-between'>
       <div>
       <h4 className='mediumTitle text-black_101'>NEED HELP ?</h4>
        <div className='normalText text-start text-grey_104'>
          <p>Chat with Us</p>
          <p>Help Center</p>
          <p>Contact Us</p>
        </div>
       </div>
       <div>
       <h4 className='mediumTitle text-black_101'>ABOUT WAKI</h4>
        <div className='normalText text-start text-grey_104'>
          <p>About Us</p>
          <p>Returns and Refund Policy</p>
          <p>Waki Careers</p>
          <p>Waki Express</p>
          <p>Terms and Conditions</p>
          <p>Flash Sales</p>
        </div>
       </div>
       <div>
       <h4 className='mediumTitle text-black_101'>MAKE MONEY WITH WAKI</h4>
        <div className='normalText text-start text-grey_104'>
          <p>Sell on Waki</p>
          <p>Vendor Hub</p>
          <p>Waki Partnering Program</p>
          <p>Become Our Sales Rep</p>
          <p>Advertise With Waki</p>
        </div>
       </div>
      </div>

      <div className='grid md:flex gap-2.5 md:gap-0 md:justify-between'>
      <div>
       <h4 className='mediumTitle text-black_101'>Useful Links</h4>
        <div className='normalText text-start text-grey_104'>
          <p>Track your Order</p>
          <p>Shipping and Delivery</p>
          <p>Return Policy</p>
          <p>Cooperate and bulk Purchase</p>
          <p>Report a product</p>
        </div>
       </div>
      </div>

      <div className='grid md:flex gap-2.5 md:gap-0 md:justify-between'>
      <div>
       <h4 className='mediumTitle text-black_101'>Join Us</h4>
        <div className='normalText flex gap-2.5 text-black_101 my-2'>
        <Icon icon='logos:tiktok-icon' className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'/>
        <Icon icon='skill-icons:instagram' className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'/>
        <Icon icon='fa6-brands:square-x-twitter' className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'/>
        <Icon icon='' className=''/>
        </div>
       </div>
       <div>
       <h4 className='mediumTitle text-black_101'>Payment Methods</h4>
        <div className='normalText text-start text-grey_104  flex gap-5 items-center my-2'>
         <Image src='/assets/images/mpesa.png' width={24} height={24} className='w-auto min-h-[20px] ' alt='mpesa'/>
         <Image src='/assets/images/swyptLogo.png' width={24} height={24} className='w-auto min-h-[20px] ' alt='swypt'/>
         <Icon icon='logos:visaelectron' className='w-auto min-h-[20px]'/>
         <Icon icon='logos:mastercard' className='w-auto min-h-[20px]'/>
        </div>
       </div>
      </div>

      <div className='border-t-[1px] border-grey_103 text-grey_104 italic justify-center flex text-[10px] md:text-[12px] py-2'>
   <p>&copy;copyright2024 || All rights reserved</p>
      </div>
      </CardWrapper>
    </div>
  )
}

export default Footer
