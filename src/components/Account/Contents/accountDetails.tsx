'use client'
import React, { useState } from 'react';

function AccountDetails() {
  const [editAccDetails,setEditAccDetails] = useState<boolean>(false)
  const [editAccAddress,setEditAccAddress] = useState<boolean>(false)


  return (
   <>   
    <div className='grid gap-5 md:flex md:items-start  text-grey_104'>
    {editAccDetails ?
    <div className='text-start border-[1px] border-grey_102 w-full grid gap-1 px-2 py-2.5'>
   <div className='flex justify-between items-center'>
   <p className='normalXText text-black_101'>Account Details</p>
   </div>
    <div className='h-[1px] bg-grey_103 w-full'></div>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value='Joan Kinyanjui'/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value='joankinyanjui52@gmail.com'/>
    <div className='border px-3 py-1 bg-black_101 text-white_101 text-center' onClick={()=>setEditAccDetails(false)}>Save</div>
  </div>
  
    :
    <div className='text-start border-[1px] border-grey_102 w-full grid gap-1 px-2 py-2.5'>
     <div className='flex justify-between items-center'>
     <p className='normalXText text-black_101'>Account Details</p>
     <p className='text-purple_01 normalText !font-[600]' onClick={()=>setEditAccDetails(true)}>Edit</p>
     </div>
      <div className='h-[1px] bg-grey_103 w-full'></div>
      <p>Joan Kinyanjui</p>
      <p>kinyanjuijoan52@gmail.com</p>
    </div>
    }

{editAccAddress ? 
  <div className='text-start border-[1px] border-grey_102 w-full grid gap-1 px-2 py-2.5'>
  <div className='flex justify-between items-center'>
   <p className='normalXText text-black_101'>Address Details</p>
   </div>
    <div className='h-[1px] bg-grey_103 w-full'></div>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value='13997-00100 Nairobi'/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value='Kabete'/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value='Nairobi , Kenya'/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value='inyanjuijoan52@gmail.com'/>
    <div className='border px-3 py-1 bg-black_101 text-white_101 text-center'  onClick={()=>setEditAccAddress(false)}>Save</div>
  </div>
  :
  <div className='text-start border-[1px] border-grey_102 w-full grid gap-1 px-2 py-2.5'>
  <div className='flex justify-between items-center'>
   <p className='normalXText text-black_101'>Address Details</p>
   <p className='text-purple_01 normalText !font-[600]' onClick={()=>setEditAccAddress(true)}>Edit</p>
   </div>
    <div className='h-[1px] bg-grey_103 w-full'></div>
    <p>13997-00100 Nairobi</p>
    <p>Kabete</p>
    <p>Nairobi , Kenya</p>
    <p>kinyanjuijoan52@gmail.com</p>
  </div>

}


  </div>

   </>
  )
}

export default AccountDetails
