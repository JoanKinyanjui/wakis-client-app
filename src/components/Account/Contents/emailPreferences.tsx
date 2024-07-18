"use client"
import Buttons from '@/components/commonComponents/Buttons'
import { Radio } from '@mui/material'
import React, { useState } from 'react'

function EmailPreferences() {
  const [selectedValue,setSelectedValue] = useState<String | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue((prevValue) => (prevValue === newValue ? null : newValue));
  };

  return (
    <div>
     <div className='w-full mb-3 rounded-md'>
      <p className='normalText  border-b pb-2 md:pb-3 border-grey_102 w-full !font-[500]'>SUBSCRIBE TO</p>
      <div className='flex gap-1 md:gap-3 items-center normalText text-grey_104'>
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
  <p>daily email for her</p>
      </div>
      <div className='flex gap-1 md:ap-3 items-center normalText text-grey_104'>
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
  <p>daily email for him</p>
      </div>
      <div className='flex gap-1 md:ap-3 items-center normalText text-grey_104'>
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
  <p>I don't want to receive any emails</p>
      </div>
     </div>

     <div>
      <Buttons buttonText='Save' className='bg-black_101 text-white_101 md:py-3' />
     </div>
    </div>
  )
}

export default EmailPreferences
