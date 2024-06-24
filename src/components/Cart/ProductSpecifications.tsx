'use client'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

type ColorOption = {
    name: string;
    colorCode: string;
  };
  
  type SizeOption = {
    name: string;
  };
  
  type ProductOptionsProps = {
    colors: ColorOption[];
    sizes: SizeOption[];
  };
  

function ProductSpecifications({colors,sizes}:ProductOptionsProps) {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
 {colors && 
 <div>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Color</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
   {colors.map((color,index)=>(
 <MenuItem value={color.name}><div className='w-[10px] h-[px] rounded-full' style={{backgroundColor: color.name}}></div>{color.name}</MenuItem>
   ))}
  </Select>
</FormControl>
 </div>
 }
      
    </div>
  )
}

export default ProductSpecifications
