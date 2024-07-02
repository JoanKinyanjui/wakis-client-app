import React from 'react'
import { CardWrapperProps } from './types';

function CardWrapper({children,customClass}:CardWrapperProps) {
  return (
    <div className={`w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto ${customClass} mt-2.5 md:mt-5`}>
      {children}
    </div>
  )
}

export default CardWrapper;
