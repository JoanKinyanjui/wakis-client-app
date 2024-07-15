"use client"
import { NavItems } from '@/Data/NavItems';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Icon from './commonComponents/Icon';
import { styled } from '@mui/material/styles';
import { usePathname } from 'next/navigation';

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: 'black',
    color: 'white',
    fontWeight:'400',
    fontSize: '14px',
  },
});

const StyledMenuItem = styled(MenuItem)({
  '&.Mui-selected': {
    backgroundColor: '#860ECF',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#860ECF',
  },
  '&:hover': {
    backgroundColor: 'rgba(128, 0, 128, 0.4)', 
  },
});


function TopBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [activeNav,setActiveTab] = useState<string>('');
  const pathName = usePathname();

  useEffect(()=>{
    NavItems.forEach((link)=>{
      if(pathName.includes(link.link)){
        setActiveTab(link.link)
      }
    })
  },[pathName])

  return (
    <div className='w-full bg-black_101 py-2.5  lg:py-5 cursor-pointer'>
      <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto'>
   <div className='flex justify-between  '>
    <div 
    className='md:flex hidden w-full gap-5 items-center'
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
      <p className='text-white_101 text-[12px] md:text-[14px] font-light'>All Categories</p>
      <Icon icon='basil:caret-down-solid' className='text-white_101 w-[24px] h-[24px]'/>
    </div>
  

   <div className='flex items-center overflow-hidden w-full gap-4 md:gap-5 lg:gap-8 mx-auto justify-between '>
          {NavItems.slice(0,6).map((item, index) => (
            <div key={item.id} className='flex-shrink-0'>
              <Link href={`${item.link}`}>
                <p className={`${activeNav === item.link ? 'text-purple_01 !font-[500]' : 'text-white_101'} text-[12px] md:text-[14px] font-light whitespace-nowrap`}>
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
   </div>
   <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {NavItems.map((item)=>(
       <Link key={item.id} href={item.link}>
         <StyledMenuItem onClick={handleClose} ><p className={`${activeNav === item.link ? 'text-purple_01 !font-[500]' : 'text-white_101 !font-[500]'}`}>{item.title}</p></StyledMenuItem></Link>
       ))}
      </StyledMenu>
      </div>
    </div>
  );
}

export default TopBar;
