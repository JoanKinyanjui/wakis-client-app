import { InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import Icon from '../Icon';


function CardNumberInput({cardNumber,handleCardNumberChange,getCardIcon,type}:any) {

  return (
    <div className='w-full'>
     
      <TextField
          label='Card number'
          id="outlined-start-adornment"
          placeholder='0000 0000 0000 0000'
          required
          type={type}
          color='secondary'
        value={cardNumber}
        onChange={handleCardNumberChange}
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
              endAdornment: (
                <InputAdornment position="end">
                  <Icon icon={getCardIcon()} className='w-[20px] h-[20px] text-black_101'/>
                 </InputAdornment>
              )
          }}
        />
     
    </div>
  )
}

export default CardNumberInput;
