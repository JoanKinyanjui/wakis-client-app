import Buttons from '@/components/commonComponents/Buttons'
import Icon from '@/components/commonComponents/Icon'
import { Radio } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Crimson_Text } from '@next/font/google';
import { AuthComponentProps } from '../types'

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });

function AuthComponent({title,confirm,buttonText,haveAcc}:AuthComponentProps) {
  return (
    <div className='w-[300px] xs:w-[400px] md:w-[500px]  mx-auto bg-purple_01/10 rounded-[20px] md:rounded-[20px] p-5 md:p-8'>
  
  <div className='w-full flex justify-center pb-2.5 md:pb-5'>
  <p className={crimsonText.className} style={{fontWeight:700}}>{title}</p>
  </div>
  
  <div className='grid gap-2.5 md:gap-5'>

  <div className=' grid gap-[2px] md:gap-2.5'>
  <label className='normalText !font-[500]'>Email Address</label>
  <div className='flex gap-2.5 md:5 border-[1px] border-purple_01/50 rounded-[4px] md:rounded-[8px] py-1 md:py-2 px-1 md:px-2 items-center'>
   <Icon icon='ic:baseline-email' className='text-grey_102 w-[18px] h-[18px]'/>
  <input
    type='email'
    placeholder='Email Address' 
    className='bg-transparent text-[13px] md:text-[15px] text-grey_104 focus:outline-none'
    />
  </div>
  </div>

  <div className=' grid gap-[2px] md:gap-2.5'>
  <label className='normalText !font-[500]'>Password</label>
  <div className='flex gap-2.5 md:5 border-[1px] border-purple_01/50 rounded-[4px] md:rounded-[8px] py-1 md:py-2 px-1 md:px-2 items-center'>
   <Icon icon='ic:baseline-email' className='text-grey_102 w-[18px] h-[18px]'/>
  <input
    type='password'
    placeholder='Password' 
    className='bg-transparent text-[13px] md:text-[15px] text-grey_104 focus:outline-none'
    />
  </div>
{confirm 
?
 null 
 : 
  <div className='flex justify-between items-center pr-2.5 md:pr-5'>
  <div className='flex items-center'>
    <Radio 
     sx={{
      color: '#D9D9D9',
      '&.Mui-checked': {
        color: '#860ECF',
      },
      '& .MuiSvgIcon-root': {
      fontSize: 16, 
    },
    }}
    />
    <p className='smallText text-grey_104'>Remember me</p>
  </div>

  <div>
    <p className='text-purple_01 smallText underline-offset-1'>Forgot password ?</p>
  </div>
</div>
}
  </div>

{confirm ?   
 <div className=' grid gap-[2px] md:gap-2.5'>
  <label className='normalText !font-[500]'>Confirm Password</label>
  <div className='flex gap-2.5 md:5 border-[1px] border-purple_01/50 rounded-[4px] md:rounded-[8px] py-1 md:py-2 px-1 md:px-2 items-center'>
   <Icon icon='ic:baseline-email' className='text-grey_102 w-[18px] h-[18px]'/>
  <input
    type='password'
    placeholder='Confirm password' 
    className='bg-transparent text-[13px] md:text-[15px] text-grey_104 focus:outline-none'
    />
  </div>
  </div>
  :
  null
  }

<div className='grid gap-3 md:gap-5 mt-3 md:mt-5'>
 <Buttons buttonText={buttonText} className='bg-black_101 text-white_101 md:py-3' />

<div className='flex gap-1 md:py-5 items-center'>
  <div className='h-[1px] bg-grey_102 w-full'></div>
  <p className='flex smallText whitespace-nowrap'>Or continue with</p>
  <div className='w-full h-[1px] bg-grey_102'></div>
</div> 

<div className='flex justify-center'>
<div className='bg-white_101 rounded-full px-2 py-2 shadow-md'>
<Image src='/assets/icons/google.png' alt='google' width={18} height={18}/>
</div>
</div>

<div className='flex mx-auto gap-1'>
  <p className='text-grey_104 normalText !font-[500]'>{haveAcc ? "Don't have an account ?" : 'Already have an account ?'}</p>
  <p className='text-purple_01 !font-[500] normalText'>{haveAcc ? "Sign Up" : "Login"}</p>
</div>
 </div>

  </div>

    </div>
  )
}

export default AuthComponent
