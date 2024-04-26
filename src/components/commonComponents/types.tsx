export type ButtonProps = {
    buttonText?: string;
    className?:string;
    rounded?:boolean;
}

export type CategoryHeaderProps ={
   icon:string;
   headingLeft?:string;
   rightIcon?:boolean;
   headingRight?:string;
}

export type ProductTagProps ={
    tagName:string;
    tagIcon:string;
}

export type AboutStoreSummaryProps ={
    name:string;
    rating:string;
    followers:string;
    items:string;
    logo?:string;
}