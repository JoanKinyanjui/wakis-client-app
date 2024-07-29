'use client'
import React, { useState } from 'react';

function AccountDetails() {
  const [editAccDetails,setEditAccDetails] = useState<boolean>(false);
  const [editAccAddress,setEditAccAddress] = useState<boolean>(false);

  const [userName,setUserName] = useState<string>('Joan Kinyanjui');
  const [email,setEmail] = useState<string>('joank@gmail.com');
  const [address,setAddress] = useState<string>('13997-00100 Nairobi');
  const [ town,setTown] = useState<string>('Kabete');
  const [city,setCity] = useState<string>('Nairobi');

  return (
   <>   
    <div className='grid gap-5 md:gap-6 md:flex md:items-start  text-grey_104'>
    {editAccDetails ?
    <div className='text-start  w-full grid gap-1 px-2 py-2.5'>
   <div className='flex justify-between items-center'>
   <p className='normalXText text-black_101'>Account Details</p>
   </div>
    <div className='h-[1px] bg-grey_103 w-full'></div>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value={userName}/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value={email}/>
    <div className='border px-3 py-1 bg-black_101 cursor-pointer text-white_101 text-center' onClick={()=>setEditAccDetails(false)}>Save</div>
  </div>
  
    :
    <div className='text-start  w-full grid gap-1 px-2 py-2.5 cursor-pointer'>
     <div className='flex justify-between items-center'>
     <p className='normalXText text-black_101'>Account Details</p>
     <p className='text-purple_01 normalText  !font-[600]' onClick={()=>setEditAccDetails(true)}>Edit</p>
     </div>
      <div className='h-[1px] bg-grey_103 w-full smallText'></div>
      <p className='no-underline text-[10px] sm:text-[12px] md:text-[14px]'>{userName}</p>
      <p className='no-underline text-[10px] sm:text-[12px] md:text-[14px]'>{email}</p>
    </div>
    }

{editAccAddress ? 
  <div className='text-start  w-full grid gap-1 px-2 py-2.5'>
  <div className='flex justify-between items-center'>
   <p className='normalXText text-black_101'>Address Details</p>
   </div>
    <div className='h-[1px] bg-grey_103 w-full'></div>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value={address}/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value={town}/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value={city}/>
    <input className='border-[1px] border-grey_102 rounded-sm my-1 px-2 py-[2px]' value={email}/>
    <div className='border px-3 py-1 bg-black_101 cursor-pointer text-white_101 text-center'  onClick={()=>setEditAccAddress(false)}>Save</div>
  </div>
  :
  <div className='text-start  w-full grid gap-1 px-2 py-2.5 cursor-pointer'>
  <div className='flex justify-between items-center'>
   <p className='normalXText text-black_101'>Address Details</p>
   <p className='text-purple_01 normalText  !font-[600]' onClick={()=>setEditAccAddress(true)}>Edit</p>
   </div>
    <div className='h-[1px] bg-grey_103 w-full smallText'></div>
    <p className='no-underline text-[10px] sm:text-[12px] md:text-[14px]'>{address}</p>
    <p className='no-underline text-[10px] sm:text-[12px] md:text-[14px]'>{town}</p>
    <p className='no-underline text-[10px] sm:text-[12px] md:text-[14px]'>{city} , Kenya</p>
    <p className='no-underline text-[10px] sm:text-[12px] md:text-[14px]'>{email}</p>
  </div>

}


  </div>

   </>
  )
}

export default AccountDetails
