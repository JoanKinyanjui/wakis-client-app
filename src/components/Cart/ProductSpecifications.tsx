'use client'
import React, { useState } from 'react';
import SelectForm from '../commonComponents/SelectForm';
import { ProductOptionsProps } from './types';


function ProductSpecifications({colors,sizes,colorValue,sizeValue}:ProductOptionsProps) {
  
  return (
    <div className='flex gap-2.5 w-full justify-between'>
        <SelectForm  data={colors} label='Color' value={colorValue} />
        <SelectForm  data={sizes} label='Size' value={sizeValue}/>
    </div>
  )
}

export default ProductSpecifications;
