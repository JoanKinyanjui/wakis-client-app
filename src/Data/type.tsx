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