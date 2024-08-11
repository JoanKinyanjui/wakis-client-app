import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartProps } from "./types";
import { ProductsProps } from "@/Data/type";


const initialState:cartProps = {
    cartItems:[],
    quantity:0,
    total:0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers :{
        addToCart : (state,action:PayloadAction<ProductsProps>)=>{
          const existingItem = state.cartItems.find((item)=> item.id === action.payload.id);
          if(existingItem){
            existingItem.quantity ? existingItem.quantity += 1 : null;
          }else{
            state.cartItems.push({...action.payload,quantity:1});
            state.quantity +=1;
          }
          state.total = state.cartItems.reduce((total,item)=> total + item.price*item.quantity ,0)
        },

        increaseQuantity : (state,action:PayloadAction<ProductsProps>)=>{
            const item = state.cartItems.find((item)=>item.id === action.payload.id);
            if(item){
                item.quantity +=1;
                state.total += item.price
            }

        },

        decreaseQuantity : (state,action:PayloadAction<ProductsProps>) =>{
           const item = state.cartItems.find((item)=>item.id === action.payload.id);
           if(item){
           if(item.quantity !== 0){
            item.quantity -=1;
            state.total -=item.price;
           }
           }
        },

        removeFromCart : (state,action:PayloadAction<ProductsProps>)=>{
         const item = state.cartItems.find((item)=>item.id === action.payload.id);
         if(item){
            state.cartItems = state.cartItems.filter((item)=>{
             return item.id !== action.payload.id
            })
         }
        }

    }
})

export const {addToCart ,increaseQuantity,decreaseQuantity,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;