import { ReactNode } from "react";

export type ButtonProps = {
    buttonText?: string;
    className?:string;
    rounded?:boolean;
}

export type CategoryHeaderProps ={
   icon?:string;
   headingLeft?:string;
   rightIcon?:boolean;
   headingRight?:string;
   link?:string;
}

export type ProductTagProps ={
    tagName:string;
    tagIcon:string;
}

export type AboutStoreSummaryProps ={
    name:string;
    rating?:number;
    followers?:string;
    items?:string;
    logo?:string;
    addTitle?:boolean;
    id?:string;
}
export type CardWrapperProps ={
    children: ReactNode;
    customClass?:string;
}
export type NavItemsProps ={
    id: number;
    title:string;
    link:string;
}
export type ProductImageProps = {
    id:string;
    discount? :boolean;
    title?:string;
    imageUrl:string;
    price?:string;
    beforePrice?:string;
    rating?:number;
    itemsSold?:number;
    category?:string[];
    officialStore?:boolean;
    storeName?: string;
}