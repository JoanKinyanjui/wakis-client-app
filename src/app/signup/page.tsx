import AuthComponent from '@/components/Account/Auth/AuthComponent'
import React from 'react'

function page() {
  return (
    <div>
      <AuthComponent 
       title='Create Account'
       confirm={true}
       buttonText='Sign up'
       haveAcc={false}
       />
    </div>
  )
}

export default page
