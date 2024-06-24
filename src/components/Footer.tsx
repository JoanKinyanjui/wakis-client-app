import React from 'react'
import CardWrapper from './commonComponents/CardWrapper'
import Image from 'next/image'
import Icon from './commonComponents/Icon'

function Footer() {
  return (
    <div className='w-full bg-grey_101 h-full py-5 md:py-10 '>
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
        <div className='normalText text-start text-grey_104  flex gap-5'>
         <Image src='data:image/png;base64,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' width={24} height={24} className='w-[36px] h-[26px] md:w-[48px] md:h-[36px]' alt='mpesa'/>
         <Icon icon='logos:paypal' className='w-[24px] h-[24px] md:w-[36px] md:h-[30px]'/>
         <Icon icon='logos:visaelectron' className='w-[24px] h-[24px] md:w-[36px] md:h-[36px]'/>
         <Icon icon='logos:mastercard' className='w-[24px] h-[24px] md:w-[36px] md:h-[36px]'/>
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
