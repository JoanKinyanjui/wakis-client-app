import { NavItems } from '@/Data/NavItems';
import Link from 'next/link';
import React from 'react';
import CardWrapper from './commonComponents/CardWrapper';
import Icon from './commonComponents/Icon';

function TopBar() {
  return (
    <div className='w-full bg-black_101 py-2.5  lg:py-5 cursor-pointer'>
      <CardWrapper>
   <div className='flex justify-between  '>
    <div className='md:flex hidden w-full gap-5 items-center'>
      <p className='text-white_101 text-[12px] md:text-[14px] font-light'>All Categories</p>
      <Icon icon='basil:caret-down-solid' className='text-white_101 w-[24px] h-[24px]'/>
    </div>
   <div className='flex items-center overflow-hidden w-full gap-4 md:gap-5 lg:gap-8 mx-auto justify-between '>
          {NavItems.map((item, index) => (
            <div key={item.id} className='flex-shrink-0'>
              <Link href={item.link}>
                <p className='text-white_101 text-[12px] md:text-[14px] font-light whitespace-nowrap'>
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
   </div>
      </CardWrapper>
    </div>
  );
}

export default TopBar;
