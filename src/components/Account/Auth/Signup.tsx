import React from 'react'
import AuthComponent from './AuthComponent'

type ContentProps ={
  changeContent:(x:boolean)=>void;
}
function Signup({changeContent}:ContentProps) {
  return (
    <div>
         <AuthComponent 
       title='Create Account'
       confirm={true}
       buttonText='Sign up'
       haveAcc={false}
       changeContent={changeContent}
       />
    </div>
  )
}

export default Signup
