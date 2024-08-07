import Buttons from '@/components/commonComponents/Buttons'
import Icon from '@/components/commonComponents/Icon'
import { Radio } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Crimson_Text } from '@next/font/google';
import { AuthComponentProps } from '../types'
import { SubmitHandler, useForm } from 'react-hook-form'

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });

type formInputProps ={
  email:string;
  password:string;
  confirmPassword?:string;
}

function AuthComponent({title,confirm,buttonText,haveAcc,changeContent}:AuthComponentProps) {
  // Form management ...
  const {register , handleSubmit ,formState :{errors}} = useForm<formInputProps>();
  const onSubmit:SubmitHandler<formInputProps> = (data)=>{
        console.log("==>", data);
  }

  return (
    <div className=''>
  
  <div className='w-full flex justify-center pb-2.5 md:pb-5'>
  <p className={crimsonText.className} style={{fontWeight:700}}>{title}</p>
  </div>
  
  <form onSubmit={handleSubmit(onSubmit)}>
  <div className='grid gap-2.5 md:gap-5'>

  <div className=' grid gap-[2px] md:gap-2.5'>
  <label className='normalText !font-[500]'>Email Address</label>
  <div className='flex gap-2.5 md:5 border-[1px] border-purple_01/50 rounded-[4px] md:rounded-[8px] py-1 md:py-2 px-1 md:px-2 items-center'>
   <Icon icon='ic:baseline-email' className='text-grey_102 w-[18px] h-[18px]'/>
  <input
    {...register('email',{required:true,
      pattern:{
        value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        message:"Please enter a valid Email"
      }
    }
    )}
    type='email'
    placeholder='Email Address' 
    className='bg-transparent text-[13px] md:text-[15px] text-grey_104 focus:outline-none'
    />
  </div>
  <p className='smallText'>{errors && errors.email?.message}</p>

  </div>

  <div className=' grid gap-[2px] md:gap-2.5'>
  <label className='normalText !font-[500]'>Password</label>
  <div className='flex gap-2.5 md:5 border-[1px] border-purple_01/50 rounded-[4px] md:rounded-[8px] py-1 md:py-2 px-1 md:px-2 items-center'>
   <Icon icon='ic:baseline-email' className='text-grey_102 w-[18px] h-[18px]'/>
  <input
    {...register('password',{required:true,
      minLength:{value:8,message:"Must be 8 characters or more"},
      pattern:{
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:"Include atleast one uppercase, one lowercase, one special character and  must be atleast 8 characters"
      }
    })}
    type='password'
    placeholder='Password' 
    className='bg-transparent text-[13px] md:text-[15px] text-grey_104 focus:outline-none'
    />
  </div>
  <p className='smallText'>{errors && errors.password?.message}</p>
{confirm 
?
 null 
 : 
  <div className='flex justify-between items-center pr-2.5 md:pr-5 cursor-pointer'>
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
    {...register('confirmPassword')}
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
 <Buttons buttonText={buttonText} className='bg-black_101 text-white_101 md:py-3' type='submit'/>

<div className='flex gap-1 md:pt-5 items-center'>
  <div className='h-[1px] bg-grey_102 w-full'></div>
  <p className='flex smallText whitespace-nowrap'>Or continue with</p>
  <div className='w-full h-[1px] bg-grey_102'></div>
</div> 

<div className='flex justify-center'>
<div className='bg-white_101 rounded-full p-2 shadow-md'>
<Image src='/assets/icons/google.png' alt='google' width={18} height={18}/>
</div>
</div>

<div className='flex mx-auto gap-1 cursor-pointer'>
  <p className='text-grey_104 normalText !font-[500]'>{haveAcc ? "Don't have an account ?" : 'Already have an account ?'}</p>
  <p className='text-purple_01 !font-[500] normalText'  onClick={()=>changeContent(!haveAcc)}>{haveAcc ? "Sign Up" : "Login"}</p>
</div>
 </div>

  </div>
  </form>

    </div>
  )
}

export default AuthComponent
