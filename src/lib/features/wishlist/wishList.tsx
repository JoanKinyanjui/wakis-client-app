import { ProductsProps } from "@/Data/type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type wishListProps ={
items:ProductsProps[];
quantity:number;
}

const initialState :wishListProps={
    items:[],
    quantity:0,
}

const wishListSlice = createSlice({
    name:"wishList",
    initialState,
    reducers:{
        addToWishList : (state,action:PayloadAction<ProductsProps>)=>{
          state.items.push(action.payload);
          state.quantity +=1;

        },
        removeFromWishList:()=>{

        },

    }
})