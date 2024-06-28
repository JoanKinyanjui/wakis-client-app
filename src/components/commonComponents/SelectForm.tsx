"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { specificOptionsArrayProps } from '../Cart/types';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			height: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
			width: 150,
		},
	},
};



export default function SelectForm({data , label}:specificOptionsArrayProps) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl 
    size="small" 
    variant='outlined'
    fullWidth
    sx={{
      '& .MuiOutlinedInput-root':{
       height:"32px",
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#860ECF',
      },
      '& .MuiInputLabel-root':{
          fontSize: '12px',
        },
        '& .MuiMenuItem-root': {
          display: 'flex',
          alignItems: 'center',
        },
        '& .MuiInputBase-input':{
          color: 'grey',
          fontSize: '12px',
        }
  }}

    >
      <InputLabel id="demo-select-small-label"
      sx={{
        fontSize: '12px',
        fontWeight: '400',
      }}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        MenuProps={MenuProps}
      >
      {data.map((option,index)=>(
        <MenuItem key={index} value={option.name} sx={{ display: 'flex', alignItems: 'center',fontSize:'12px'}}
        >
            {(label === 'Color') ? (
                <div
                  style={{
                    backgroundColor: option.name,
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    marginRight: '8px',
                    marginTop:'3px',
                  }}
                ></div>
            ) : (
              option.name
            )}
        </MenuItem>
      ))}
      </Select>
    </FormControl>
  );
}
