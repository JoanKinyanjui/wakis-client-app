"use client";
import React from 'react';
import CardWrapper from '../commonComponents/CardWrapper';
import ProductCard from './ProductCard';
import Buttons from '../commonComponents/Buttons';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import Icon from '../commonComponents/Icon';
import { ProductsProps } from '@/Data/type';
import Link from 'next/link';

function Cart() {
  const router = useRouter();
  const { cartItems, total } = useAppSelector((state) => state.cart);

  // Function to group cart items by store
  const groupCartItemsByStore = (cartItems: ProductsProps[]) => {
    const groupedItemsByStore: Record<string, ProductsProps[]> = {};

    cartItems.forEach((item) => {
      const storeName = item.storeName;
      if (!groupedItemsByStore[storeName]) {
        groupedItemsByStore[storeName] = [];
      }
      groupedItemsByStore[storeName].push(item);
    });

    return groupedItemsByStore;
  };

  const groupedItems = groupCartItemsByStore(cartItems);

  return (
    <div>
      <CardWrapper customClass='w-full grid md:flex gap-5  md:mt-5 md:items-start'>
        <div className='w-full md:w-[65%] px-5 py-5'>
          {cartItems.length > 0 ? (
            Object.keys(groupedItems).map((storeName) => (
              <div key={storeName} className='store-group px-5 py-5 shadow-md rounded-[8px]'>
                 <Link href='/stores/3'>
     <div className='flex items-center justify-between'>
       <div className='flex gap-2.5 items-center'>
       <Icon icon='streamline:store-1-solid' className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'/>
       <p className='normalXText capitalize'>{storeName}</p>
       </div>
        <Icon icon='simple-line-icons:arrow-right' className='w-[12px] h-[12px] md:w-[18px] md:h-[18px] text-black_101'/>
      </div>
      </Link>
                {groupedItems[storeName].map((item) => (
                  <div key={item.id} className='my-5'>
                    <ProductCard item={item} />
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className='h-[30vh] grid justify-center items-center place-content-center gap-5'>
              <div className='px-10 py-10 shadow-md rounded-full'>
                <Icon icon='tabler:shopping-cart-x' className='w-[30px] md:w-[50px] h-[30px] md:h-[50px] text-purple_01 mx-auto' />
              </div>
              <p className='italic normalText text-grey_104'>No products added</p>
            </div>
          )}
        </div>

        <div className='w-full md:w-[35%] grid gap-2.5 md:gap-5 px-5 py-5 bg-grey_101/20 shadow-md'>
          <div>
            <p className='subTitle text-black_101'>Cart Summary</p>
          </div>
          <div className='flex justify-between normalXText w-full'>
            <p className='text-grey_104'>SubTotal</p>
            <p>Ksh {total}</p>
          </div>
          <div>
            <Buttons
              onClick={() => router.push('/checkout')}
              className='bg-black_101 text-white_101 py-3'
              buttonText={`CHECKOUT ( KSH ${total} )`}
            />
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}

export default Cart;
