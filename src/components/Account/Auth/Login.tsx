import React from 'react'
import AuthComponent from './AuthComponent';

type ContentProps ={
  changeContent:(x:boolean)=>void;
}

function Login({changeContent}:ContentProps) {
  return (
    <div>
        <AuthComponent 
   title='Welcome Back !'
   confirm={false}
   buttonText='Login'
   haveAcc={true}
   changeContent={changeContent}
   />
    </div>
  )
}

export default Login
