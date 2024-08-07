"use client"
import React, { useState } from 'react'
import CheckoutWrapper from './CheckoutWrapper'
import { Radio } from '@mui/material'

function DeliveryDetails() {
  const [selectedValue,setSelectedValue] = useState<String>("option1");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };
  return (
    <div>
      <CheckoutWrapper  title='Delivery Details' onChangeInfo={()=>console.log('change info')}/>
      <div className='normalText text-grey_104 grid gap-5 py-2.5 md:py-5'>
        <div className='flex gap-2.5 md:gap-5'>
        <Radio   
              checked={selectedValue === 'option1'}
              onChange={handleRadioChange}
              value="option1"
              name="radio-button-demo" 
        sx={{
         color: '#D9D9D9',
         '&.Mui-checked': {
           color: '#860ECF',
         },
         }} 
         />
         <div className='grid'>
          <p className='!font-[500] text-black_101'>Pick-up Station</p>
          <p>Shop42 ,2nd Floor, Jewel Complex</p>
          <p> Kasarani.</p>
         </div>
        </div>

        <div className='flex gap-2.5 md:gap-5'>
        <Radio 
              checked={selectedValue === 'option2'}
              onChange={handleRadioChange}
              value="option2"
              name="radio-button-demo"   
        sx={{
         color: '#D9D9D9',
         '&.Mui-checked': {
           color: '#860ECF',
         },
         }} 
         />
         <div className='grid'>
          <p className='!font-[500] text-black_101'>Door Delivery</p>
          <p>Delivery Scheduled for 23rd July</p>
          <p> 9:00 a.m  to 6:00p.m</p>
         </div>
        </div>
      </div>  
    </div>
  )
}

export default DeliveryDetails
