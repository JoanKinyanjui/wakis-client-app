import Buttons from '@/components/commonComponents/Buttons'
import { Radio } from '@mui/material'
import React from 'react'

function EmailPreferences() {
  return (
    <div>
     <div className='w-full mb-3 pt-4 rounded-md'>
      <p className='normalText  border-b pb-2 md:pb-3 border-grey_102 w-full !font-[500]'>SUBSCRIBE TO</p>
      <div className='flex gap-1 md:gap-3 items-center normalText text-grey_104'>
        <Radio   sx={{
    color: '#D9D9D9',
    '&.Mui-checked': {
      color: '#860ECF',
    },
  }} 
  />
  <p>daily email for her</p>
      </div>
      <div className='flex gap-1 md:ap-3 items-center normalText text-grey_104'>
        <Radio   sx={{
    color: '#D9D9D9',
    '&.Mui-checked': {
      color: '#860ECF',
    },
  }} 
  />
  <p>daily email for him</p>
      </div>
      <div className='flex gap-1 md:ap-3 items-center normalText text-grey_104'>
        <Radio   sx={{
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
