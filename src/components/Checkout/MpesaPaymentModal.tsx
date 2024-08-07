import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Icon from '../commonComponents/Icon';
import { Crimson_Text } from '@next/font/google';
import Buttons from '../commonComponents/Buttons';

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });


type formInputProps ={
    phoneNumber:number;
  } 

function MpesaPaymentModal() {

    const {register,handleSubmit, formState:{errors} }= useForm<formInputProps>();
    const onSubmit:SubmitHandler<formInputProps> = (data)=>{
        console.log("==>", data);
  }
  return (
    <div className='mx-auto  md:w-full md:px-5]'>
     <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5'>
     <div className=' grid gap-[2px] md:gap-2.5'>
  <label className={`normalText !font-[500] ${crimsonText.className} `}>Phone Number</label>
  <div className='flex gap-2.5 md:5 border-[1px] border-purple_01/50 rounded-[4px] md:rounded-[8px] py-1 md:py-2 px-1 md:px-2 items-center'>
   <Icon icon='ic:baseline-email' className='text-grey_102 w-[18px] h-[18px]'/>
  <input
    {...register('phoneNumber', {
        required:true,
        pattern:{
            value:/0-9/,
            message:"Please use a valid number"
        }
    })}
    type='number'
    placeholder='+2547 XX XXX XXX' 
    className='bg-transparent text-[13px] md:text-[15px] text-grey_104 focus:outline-none'
    />
  </div>
  <p className='smallText'>{errors && errors.phoneNumber?.message}</p>

  </div>
<div className='w-full flex justify-center'>
<Buttons buttonText='Pay now : 3,994' type='submit' className='bg-black_101 text-white_101 w-full ' />
</div>
     </form>
    </div>
  )
}

export default MpesaPaymentModal
