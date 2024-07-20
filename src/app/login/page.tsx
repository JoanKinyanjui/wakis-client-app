import AuthComponent from '@/components/Account/Auth/AuthComponent'
import React from 'react'

function page() {
  return (
   <AuthComponent 
   title='Welcome Back'
   confirm={false}
   buttonText='Login'
   haveAcc={true}
   />
  )
}

export default page
