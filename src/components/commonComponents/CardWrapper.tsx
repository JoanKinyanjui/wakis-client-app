import React from 'react'
import { CardWrapperProps } from './types';

function CardWrapper({children}:CardWrapperProps) {
  return (
    <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto'>
      {children}
    </div>
  )
}

export default CardWrapper;
