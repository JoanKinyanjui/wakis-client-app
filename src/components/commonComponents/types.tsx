import { ProductsProps } from "@/Data/type";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
    buttonText?: string;
    className?:string;
    rounded?:boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?:()=>void;
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
    item:ProductsProps;
    id:string;
    discount? :boolean;
    title?:string;
    imageUrl:string;
    price?:number;
    beforePrice?:string;
    rating?:number;
    itemsSold?:number;
    category?:string[];
    officialStore?:boolean;
    storeName?: string;
}

export type CheckoutWrapperProps ={
    title:string;
    onChangeInfo:()=>void;
}