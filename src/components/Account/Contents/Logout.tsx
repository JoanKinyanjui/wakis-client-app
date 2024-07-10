import Buttons from '@/components/commonComponents/Buttons'
import Icon from '@/components/commonComponents/Icon'
import React from 'react'

function Logout() {
  return (
    <div className='w-full h-[20vh] md:h-[30vh]  items-center place-content-center justify-center'>
    <div className='grid gap-5 justify-center items-center'>
      <p className='mx-auto text-grey_102 mediumTitle'>We are sad to see you leave</p>
      <Icon icon='fa6-solid:face-sad-tear' className='w-[40px] h-[40px] text-purple_01 mx-auto'/>
      <Buttons  buttonText='Proceed' className='bg-black_101 text-white_101 w-[200px] md:w-[300px] mx-auto'/>
    </div>
    </div>
  )
}

export default Logout
