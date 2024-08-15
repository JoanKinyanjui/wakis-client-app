import Icon from '@/components/commonComponents/Icon'
import { MenuItem } from '@mui/material';
import Menu, { MenuProps } from '@mui/material/Menu';
import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { ReviewsProps } from '@/Data/type';

type  ReviewsHeaderProps ={
  allReviews:boolean;
  imagesOnly:boolean;
  onSelectATab: (tab:string)=>void;
  sortByLatest:()=>void;
  sortByHighest:()=>void;
  sortByLowest :()=>void;
  sortedReviews:ReviewsProps[]; 
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function ReviewsHeader({allReviews,imagesOnly,onSelectATab,sortByLatest,sortByHighest,sortByLowest}:ReviewsHeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedFilter,setSelectedFilter] = useState<string>('Latest');
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (sortBy:string) => {
    if(sortBy === 'latest'){
      setSelectedFilter('Default')
      sortByLatest();
    }else if (sortBy === 'highestRated'){
      setSelectedFilter('Highest Rating')
      sortByHighest();
    }else if (sortBy === 'lowestRated'){
      setSelectedFilter('Lowest Rating');
      sortByLowest();
    }
    setAnchorEl(null);
  };



  return (
    <div className=''>
      <div className='flex justify-between'>
        <div className='flex gap-5 md:gap-10 normalXText text-black_101 dark:text-grey_102'>
            <div onClick={()=>onSelectATab('1')} className={`py-[2px] md:py-1 ${allReviews ? 'border-b-[2px] md:border-b-[3px]  border-purple_01' : 'border-none'}`}>All Reviews</div>
            <div onClick={()=>onSelectATab('2')} className={`py-[2px] md:py-1  ${imagesOnly ? 'border-b-[2px] md:border-b-[3px]  border-purple_01' : 'border-none'}`}>All Images</div>
        </div>

        <div className='flex gap-5 md:gap-10 bg-grey_101 px-2 md:px-4 rounded-sm normalXText '>
         <div className='flex gap-3 items-center normalText !font-[500] capitalize' onClick={handleClick}>{selectedFilter} <Icon icon='iconamoon:arrow-down-2-thin'  /></div>
         <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>handleClose('latest')} disableRipple>
          Default
        </MenuItem>
        <MenuItem onClick={()=>handleClose('highestRated')} disableRipple>
          Sort by highest rated
        </MenuItem>
        <MenuItem onClick={()=>handleClose('lowestRated')} disableRipple>
          Sort by lowest rated
        </MenuItem>
      </StyledMenu>
        </div>

      </div>
    </div>
  )
}

export default ReviewsHeader
