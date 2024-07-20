import React from 'react'
import AuthComponent from './AuthComponent'

function Login() {
  return (
    <div>
        <AuthComponent 
   title='Welcome Back !'
   confirm={false}
   buttonText='Login'
   haveAcc={true}
   />
    </div>
  )
}

export default Login
