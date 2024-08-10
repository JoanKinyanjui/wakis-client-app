'use client'
import React, { useEffect, useState } from 'react'
import ProductTags from '../commonComponents/ProductTags'
import { ProductsProps } from '@/Data/type';
import Image from 'next/image';
import { ColorOption, SizeOption, sizeMeasureMents } from '../Cart/types';
import Buttons from '../commonComponents/Buttons';
import Icon from '../commonComponents/Icon';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cart/cartSlice';
import { addToWishList, removeFromWishList } from '@/lib/features/wishlist/wishListSlice';
import { toast, ToastContainer } from 'react-toastify';

interface ItemProps {
  item: ProductsProps;
}

function MoreInfo({item}:ItemProps) {

const [selectedSize,setSelectedSize] = useState<sizeMeasureMents | null>(null);
const onSelectingSize = (sizeStr:string) =>{
if(selectedSize?.size === sizeStr){
  setSelectedSize(null)
}else{
  const  sizeSpecs = sizes.find((size)=>size.size === sizeStr);
  console.log(sizeSpecs);
  if(sizeSpecs){
    setSelectedSize(sizeSpecs);
  }
}
 }

 const [selectedColor,setSelectedColor] = useState<string | null>(null);
 const onSelectColor =(strColor:string)=>{
      setSelectedColor(strColor)
 }
  const rating = item?.rating ?? 0;
  const colorOptions :ColorOption[] = [
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    { name: 'Blue', value: 'blue' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Brown', value: 'brown' },
  ];

  const sizeOptions : SizeOption[] = [
    { name: 'S'  , value:'small'},
    { name: 'M'  , value:'medium'},
    { name: 'L'  , value:'large'},
    { name: 'XL' , value:'xLarge' },
  ];

  const sizes : sizeMeasureMents[] = [
    { size: 'S'  , bust:'88cm' , waist:'72cm' ,  hips:'103cm'},
    { size: 'M'  , bust:'92cm' , waist:'76cm' ,  hips:'104cm'},
    { size: 'L'  , bust:'96cm' , waist:'80cm'  , hips:'105cm'},
    { size: 'XL' , bust:'100cm'  , waist:'84cm', hips:'106cm'},
  ];

  // AddToCart
  const [favourite, setFavourite] = useState(false);
  const dispatch = useAppDispatch();
  const wishListItems = useAppSelector((state) => state.wishList.items);

  useEffect(() => {
    const isFavourite = wishListItems.some((specs) => specs.id === item.id);
    setFavourite(isFavourite);
  }, [item]);


const toggleFavourite = () => {
  if (favourite) {
    dispatch(removeFromWishList(item));
    console.log('remove favourite');
  } else {
    dispatch(addToWishList(item));
    console.log('add favourite');
  }
  setFavourite(!favourite);
};

const handleAddToCart = (item:ProductsProps)=>{
  console.log('just clicked')
  if(!selectedSize && !selectedColor){
    toast.error('Please choose size and color')
  }else if(!selectedSize){
    toast.error("Please choose size")
  }else if(!selectedColor){
    toast.error("Please choose color")
  }else{
    const itemWithSelection = {
      ...item,
      size: selectedSize.size,
      color: selectedColor,
    };
    dispatch(addToCart(itemWithSelection));
  }

}
  
  return (
  <>
  {item &&   
    <div className='grid gap-2.5 md:gap-5 w-full place-content-start lg:place-content-center '>
      {/* Product Desc */}
     <div>
     <p className='mediumTitle text-start '>{item.title}</p>
     <p className='normalText text-start text-grey_104'>{item.desscription}</p>
     </div>
      {/* Tags */}
      <div className='flex flex-wrap gap-1.5 md:gap-3 h-[max-content]'>
        <ProductTags tagIcon='streamline:store-1-solid' tagName='Kendy Thrift Store' />
        <ProductTags tagIcon='carbon:location-filled' tagName='Kahawa West' />
        <ProductTags tagIcon='ion:pricetags-sharp' tagName='Fixed Price' />
        <ProductTags tagIcon='heroicons:shopping-bag-solid' tagName='Retail' />
        <ProductTags tagIcon='emojione-monotone:shopping-bags' tagName='Wholesale' />
      </div>

      {/* Rating */}
      <div className='flex items-center gap-2 md:gap-3'>
      {rating && [...Array(5)].map((_, index) => (
        <Image
          key={index}
          src={index < rating ? '/assets/images/rating.png' : '/assets/images/greyRating.png'}
          alt='Star Rating'
          width={25}
          height={25}
          className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]'
        />
      ))}
      <div>
      <p className=' text-grey_103 normalText'> ({item.itemsSold} sold)</p>
      </div>
      </div>

      {/* Variations Available */}
      <div className='flex gap-2.5 md:gap-5'>
       {sizeOptions.map((size,index)=>(
         <p key={index} onClick={()=>onSelectingSize(size.name)}  className={`smallText uppercase w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] text-center items-center flex justify-center border shadow-md rounded-[2px] ${selectedSize?.size === size.name ? 'text-white_101 bg-black_101' : 'text-grey_104 border-grey_102'}`}>{size.name}</p>
       ))}
      </div>
      {/* sizes specification */}
     {selectedSize &&  
     <div className='flex  gap-2.5 md:gap-5 rounded-md'>
          <div>
            <div className='smallText flex gap-2 text-grey_104'>Bust : <p className='text-black_101'>{selectedSize.bust}</p></div>
          </div>
          <div>
            <div className='smallText flex gap-2 text-grey_104'>Waist : <p className='text-black_101'>{selectedSize.waist}</p></div>
          </div>
          <div>
            <div className='smallText flex gap-2 text-grey_104'>Hips : <p className='text-black_101'>{selectedSize.hips}</p></div>
          </div>
      </div>}
      {/* color specs */}
      <div className='flex gap-2.5 md:gap-5'>
        {colorOptions.map((color,index)=>(
          <div key={index} onClick={()=>onSelectColor(color.name)} className={`w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] rounded-full ${selectedColor === color.name ? 'border-[3px] border-black_101' :''}` }  style={{ backgroundColor: color.value }}></div>
        ))}

      </div>

      {/*Prices*/}
      <div className='grid gap-[2px] md:gap-1 mt-2'>
   <div className='w-full flex justify-between items-center'>
       <div className='flex gap-2 md:gap-4 items-center'>
        <p className='normalXText !font-[600]'>Ksh 428</p>
        <p className='smallText text-grey_104'>(Min. order 1 piece)</p>
       </div>
       <div>
        <p className='line-through smallText text-grey_104'>Ksh 328</p>
       </div>
   </div>
   <div className='w-full flex justify-between items-center'>
       <div className='flex gap-2 md:gap-4 items-center'>
        <p className='normalXText !font-[600]'>Ksh 328</p>
        <p className='smallText text-grey_104'>(5 - 19 pieces)</p>
       </div>
       <div>
        <p className='line-through smallText text-grey_104'>Ksh 328</p>
       </div>
   </div>
   <div className='w-full flex justify-between items-center'>
       <div className='flex gap-2 md:gap-4 items-center'>
        <p className='normalXText !font-[600]'>Ksh 128</p>
        <p className='smallText text-grey_104'>(&gt;= 20 pieces)</p>
       </div>
       <div>
        <p className='line-through smallText text-grey_104'>Ksh 328</p>
       </div>
   </div>
      </div>

      {/* Add To Cart Button */}
      <div className='flex gap-5'>
<Buttons buttonText='ADD TO CART' className='bg-black_101 text-white_101 w-full py-2' onClick={()=>handleAddToCart(item)}/>
<Icon icon={favourite ? 'mdi:favourite' :'mdi:favourite-border'}  className='w-[30px] md:w-[48px] h-[30px] md:h-[48px]' onClick={toggleFavourite}/>
<Icon icon='ooui:share'  className='w-[30px] md:w-[48px] h-[30px] md:h-[48px]' />
      </div>
    </div>
    }
  </>
  )
}

export default MoreInfo
