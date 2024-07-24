import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export const makeStore = () =>{
    return configureStore({
        reducer :{
           'cart' :cartReducer,
        }
    })
}

// Infer the type of makeStore
 export type AppStore = ReturnType<typeof makeStore>
//  Infer RootState and AppDispatch types from store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']