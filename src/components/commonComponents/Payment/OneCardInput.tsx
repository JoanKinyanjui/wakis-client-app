import { InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { CardDetailsInputProps } from './types'
import Icon from '../Icon'


function OneCardInput({label,icon,iconString,placeholder, type,value,setValue}:CardDetailsInputProps) {
 

  return (
    <div className='w-full'>
     
      <TextField
          label={label}
          id="outlined-start-adornment"
          type={type}
          required
          placeholder={placeholder}
          color='primary'
          onChange={setValue}
          value={value}
          focused
          sx={{ 
            width: '100%',
            '& label.MuiInputLabel-root': { 
              color: 'black',
              fontWeight: 400
            },
            '& .MuiInputBase-root.MuiOutlinedInput-root': {
              padding: '15px'
            },
            '& .MuiInputBase-input': { 
              color: '#757575!important',
              fontWeight: 400,
              fontSize: '14px',
              padding: '0px'
            },
            '& .MuiInputBase-root': {
              '&::placeholder': {
                color: 'black',
                fontWeight: 400,
                fontSize: '14px',
                opacity: 1,
              }
            },
            '& .MuiOutlinedInput-root': { 
              '& fieldset': {
                borderColor: '#44444F', 
                borderWidth: '1px !important',
                borderRadius: '5px !important',
              
              },
              '&:hover fieldset': {
                borderColor: '#44444F',  
                borderWidth: '1px !important',
                borderRadius: '5px !important',
               
              },
              '&.Mui-focused fieldset': { 
                borderColor: '#44444F',
                borderWidth: '1px !important',
                borderRadius: '5px !important',
               
              },
            },
  
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
            ...(icon && {
              endAdornment: (
                <InputAdornment position="end">
                 {iconString &&  <Icon icon={iconString} className='text-black_101 w-[20px] h-[20px]'/>}
                </InputAdornment>
              )
            })
          }}
        />
     
    </div>
  )
}

export default OneCardInput;
