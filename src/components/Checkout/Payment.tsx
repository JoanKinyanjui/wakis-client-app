"use client"
import React, { useState } from 'react'
import CheckoutWrapper from './CheckoutWrapper'
import { Radio } from '@mui/material'

function Payment() {
  const [selectedValue,setSelectedValue] = useState<String | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue((prevValue) => (prevValue === newValue ? null : newValue));
  };

  return (
    <div>
    <CheckoutWrapper  title='Payment Details' onChangeInfo={()=>console.log('change info')}/>
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
        <p className='!font-[500] text-black_101'>MPESA</p>
    <div className='flex gap-2.5 md:gap-5 items-center'>
    <p>Phone No:</p>
    <p>XXXXX-6990</p>
    </div>
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
        <p className='!font-[500] text-black_101'>Bank Cards</p>
       <div className='flex gap-2.5 md:gap-5 items-center' >
       <p>Card Number</p>
       <p>XXXX-5648</p>
       </div>
       </div>
      </div>

      <div className='flex gap-2.5 md:gap-5'>
      <Radio
      checked={selectedValue === 'option3'}
      onChange={handleRadioChange}
      value="option3"
      name="radio-button-demo"   
      sx={{
       color: '#D9D9D9',
       '&.Mui-checked': {
         color: '#860ECF',
       },
       }} 
       />
     <div className='grid'>
        <p className='!font-[500] text-black_101'>CRYPTO (swypt.io)</p>
    <div className='flex gap-2.5 md:gap-5 items-center'>
    <p>Till No:</p>
    <p>749 865</p>
    </div>
       </div>
      </div>


    </div>  
  </div>
  )
}

export default Payment
