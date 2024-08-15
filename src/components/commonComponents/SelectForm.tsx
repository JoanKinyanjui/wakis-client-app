"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { specificOptionsArrayProps } from '../Cart/types';
import useTheme from '@/hooks/useTheme';


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



export default function SelectForm({data ,label, value}:specificOptionsArrayProps) {
  const [specs, setSpecs] = React.useState(value);

  const handleChange = (event: SelectChangeEvent) => {
    setSpecs(event.target.value);
  };

  const {isDarkMode} = useTheme();

  return (
    <FormControl 
    size="small" 
    variant='outlined'
    fullWidth
    sx={{
      '& .MuiOutlinedInput-root':{
        height: "32px",
        borderColor: isDarkMode ? '#D9D9D9' : 'black',
        color: isDarkMode ? '#D9D9D9' : 'black',
      '& .MuiOutlinedInput-notchedOutline': {
          borderColor: isDarkMode ? '#D9D9D9' : '#860ECF',
        },
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: isDarkMode ? '#D9D9D9' :  '#860ECF',
      },
      '& .MuiInputLabel-root': {
        fontSize: '12px',
        color: isDarkMode ? '#D9D9D9' : 'black',
        '&.Mui-focused': {
          color: isDarkMode ? '#D9D9D9' : '#860ECF',
        },
      },
        '& .MuiMenuItem-root': {
          display: 'flex',
          alignItems: 'center',
          borderColor: isDarkMode ? '#D9D9D9' : 'black',
        },
        '& .MuiInputBase-input':{
          color: isDarkMode ? '#D9D9D9' : 'black',
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
        value={specs}
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
