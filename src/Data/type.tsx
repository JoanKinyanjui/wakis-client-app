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
export type ProductsProps = {
    id:string;
    title?:string;
    price:string;
    beforePrice:string;
    rating?:number;
    itemsSold?:number;
    desscription:string,
    imageUrl:string;
    category?:string[],
    gallery:productGallery[];
}