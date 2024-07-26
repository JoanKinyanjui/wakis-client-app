import { AccDetails } from "@/Data/accDetails";
import { ProductsProps } from "@/Data/type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type wishListProps ={
items:ProductsProps[];
quantity:number;
}

const initialState :wishListProps={
    items:AccDetails.wishList,
    quantity:0,
}

const wishListSlice = createSlice({
    name:"wishList",
    initialState,
    reducers:{
        addToWishList : (state,action:PayloadAction<ProductsProps>)=>{
            const existingItem = state.items.find((item)=>{
                item.id === action.payload.id;
            })
        if(!existingItem){
            state.items.push(action.payload);
            state.quantity += 1;
        }

        },
        removeFromWishList:(state,action:PayloadAction<ProductsProps>)=>{
            const itemIndex = state.items.findIndex((item)=>{
                item.id === action.payload.id;
            })
          if(itemIndex !==-1){
            state.items.splice(itemIndex,1);
            state.quantity -=1;
          }
        },

    }
})

export const {addToWishList,removeFromWishList} =wishListSlice.actions;
export default wishListSlice.reducer;