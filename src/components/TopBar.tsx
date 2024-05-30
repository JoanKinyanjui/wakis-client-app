import { NavItems } from '@/Data/NavItems';
import Link from 'next/link';
import React from 'react';
import CardWrapper from './commonComponents/CardWrapper';

function TopBar() {
  return (
    <div className='w-full bg-black_101 py-2 md:py-2.5 border mb-2.5 md:mb-5'>
      <CardWrapper>
        <div className='border flex items-center overflow-hidden w-full gap-4 md:gap-5 lg:gap-8 mx-auto justify-center'>
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
      </CardWrapper>
    </div>
  );
}

export default TopBar;
