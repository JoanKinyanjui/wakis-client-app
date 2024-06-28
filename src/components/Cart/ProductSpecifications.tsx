'use client'
import React, { useState } from 'react';
import SelectForm from '../commonComponents/SelectForm';
import { ProductOptionsProps } from './types';


function ProductSpecifications({colors,sizes}:ProductOptionsProps) {
  
  return (
    <div className='flex gap-2.5 w-full justify-between'>
        <SelectForm  data={colors} label='Color' />
        <SelectForm  data={sizes} label='Size' />
    </div>
  )
}

export default ProductSpecifications;
