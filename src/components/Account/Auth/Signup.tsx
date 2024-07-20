import React from 'react'
import AuthComponent from './AuthComponent'

function Signup() {
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

export default Signup
