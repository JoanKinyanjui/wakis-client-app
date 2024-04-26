import React from 'react'
import { ButtonProps } from './types';

function Buttons({buttonText,className,rounded}:ButtonProps) {
  return (
    <div className={`${className}  ${rounded ? 'rounded-[200px]' : 'rounded-[4px]'} py-1.5 md:py-2 flex justify-center items-center font-[600] text-sm  md:text-md `}>
     {buttonText}
    </div>
  )
}

export default Buttons;
