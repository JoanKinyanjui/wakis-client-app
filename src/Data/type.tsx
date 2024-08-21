import { OrderProps } from "@/components/Account/types";

export type imageProps = {
    id:number;
    url:string;
}
export type ReviewsProps ={
    id:number;
    name:string;
    content:string;
    date:string;
    rating:number;
    likes:number;
    images: imageProps[];
}
export type QuickLinks ={
    id:number;
    title:string;
    link:string;
    alt: string;
    image:string
}
type productGallery = {
   id:string;
   imageUrl:string;
   description:string;
}
type colorOptions ={
    name:string,
    value:string,
}
type sizeOptions ={
    name:string,
    value:string,
}
type Category = 
  | 'Men'
  | 'Women'
  | 'Kids'
  | 'Accessories'
  | 'Footwear'
  | 'Bags'
  | 'Jewelry'
  | 'Outerwear'
  | 'Sportswear'
  | 'Underwear'
  | 'Ankara'
  | 'Home'
  | 'Shoes';

export type ProductsProps = {
    id:string;
    title?:string;
    price:number;
    beforePrice:string;
    rating?:number;
    itemsSold?:number;
    desscription:string,
    imageUrl:string;
    category?:Category[],
    gallery:productGallery[];
    quantity:number;
    storeName:string;
    color:string;
    size:string;
}
export type StoreProps = {
    id:string;
    title:string;
    items?:string;
    followers?:string;
    rating?:number;
    itemsSold?:number;
    description?:string,
    imageUrl:string;
}

export type AccDetailsProps ={
    name:string;
    email:string;
    password?:string;
    postalCode:string;
    city:string;
    country:string;
    orders:OrderProps[];
    followedStores:string;
    wishList:ProductsProps[];
    emailPrefernce:string;

}