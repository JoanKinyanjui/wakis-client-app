import { ProductsProps } from "@/Data/type";

export type cartProps = {
    cartItems :ProductsProps [];
    quantity: number;
    total : number;
}