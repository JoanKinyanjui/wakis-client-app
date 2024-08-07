import React from 'react'
import { ButtonProps } from './types';

function Buttons({buttonText,className,rounded,onClick,type='button'}:ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={`${className}  ${rounded ? 'rounded-[200px]' : 'rounded-[4px]'} py-1.5 md:py-2 lg:py-3 px-2 flex justify-center items-center text-sm  md:text-md font-[500] cursor-pointer`}>
     {buttonText}
    </button>
  )
}

export default Buttons;
