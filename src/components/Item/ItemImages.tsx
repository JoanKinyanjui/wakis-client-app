'use client'
import { Products } from '@/Data/Products'
import { ProductsProps } from '@/Data/type';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


interface ItemProps {
  item: ProductsProps;
}

function ItemImages({item}:ItemProps) {
  const [activeImage,setActiveImage] = useState<string | undefined>(item?.gallery[0]?.imageUrl);

 
 
  const onSelectImage =(img:string)=>{
  setActiveImage(img);
  }
  return (
    <>
    {item && 
    <div className='grid '>
    <div className='w-[90%]  h-[250px] xxs:h-[290px] md:w-[300px] lg:w-[350px] xl:w-[400px]  md:h-[350px] lg:h-[400px] rounded-md  '>
      <Image src={activeImage ?? item.gallery[0].imageUrl} 
      blurDataURL="data:..."
      placeholder='blur'
      alt='img' 
      width={300}
      height={300}
      className='w-[100%] h-[100%] shrink-0 rounded-sm'
       />
    </div>
    <div className='w-[100%]  md:w-[300px] lg:w-[350px] xl:w-[400px] h-full my-1  md:my-2.5  overflow-auto no-scrollbar'>
<div className='flex gap-2 md:gap2.5 w-full '>
   {item.gallery?.map((item,index)=>(
      <Image src={item.imageUrl} 
      key={index}
      blurDataURL="data:..."
      placeholder='blur'
      alt='img' 
      width={100}
      height={100}
      className={`${activeImage === item.imageUrl ? 'scale-90 border-[5px]  rounded-sm shadow-lg' : '' }  w-[100px] sm:w-[120px] h-[75px] md:w-[100px] md:h-[100px] shrink-0 scale-100 `}
      onClick={()=>onSelectImage(item.imageUrl)}
       />
   ))}
</div>
    </div>
  </div>}
    </>
  )
}

export default ItemImages
