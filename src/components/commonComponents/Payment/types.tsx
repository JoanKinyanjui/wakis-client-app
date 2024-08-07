import { ReactNode } from "react";

export type CardWrapperProps = {
  children:ReactNode;
}
export  type DepositeaderProps ={
  title:string;
  description:any;
  description2?:string;
  right?:boolean;
  border?:boolean;
}
export type DepositButtonProps={
  buttonText:string;
  width:string;
  mobileWidth?:string;
  onClick?:()=>void;
}
export type AmountInputProps ={
  width:string;
  amount:string;
  setAmount:(value:string)=>void;
}
export type CardProps ={
  upi?:boolean;
  email?:string;
  name:string;
  logo:string;
  accNo?:string;
  cvv?:boolean;
  cvvNo?:string;
  cvvBg?:boolean;
  expiry?:string;
  border?:boolean;
  background?:boolean;
}

export type ReviewComponentProps = {
  description:string;
  icon?:boolean;
  iconString?:string;
  placeholder?:string;
}

export type CardDetailsInputProps ={
  label:string;
  icon?:boolean;
  type?:string;
  placeholder?:string;
  iconString?:string;
  saveCard?:boolean;
  value?:any;
  setValue?:(value:any)=>void;
  onChange?:()=>void;
  onClick?:()=>void;

}
export type CardDetailsProps ={
  id:number;
  email?:string;
  name?:string;
  cardNumber? :number;
  accountNumber?:string;
  expiryDate ?:string;
  cvv?:boolean;
  cvvNo?:number;
  cardHolderName?:string;
  saveCard?:boolean;
  cardType?:string;
  upi?:boolean;
}

export type DepositBreadCrumbsProps ={
  first?:string;
  second?:string;
  third?:string;
}

export type promoCodeProps ={
 id:number;
 image:string;
 title:string;
 content:string;
 promoCode:string;
 status:string;
}