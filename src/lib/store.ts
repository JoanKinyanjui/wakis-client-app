import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import wishListReducer from './features/wishlist/wishListSlice';
import { userApi } from './api/usersApiSlice';
import { productsApi } from './api/ProductsApiSlice';
import { storesApi } from './api/storesApiSlice';
import { wishListApi } from './api/wishListApiSlice';
import { categoryApi } from './api/categoryApiSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      wishList: wishListReducer,
      [userApi.reducerPath]: userApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [storesApi.reducerPath]: storesApi.reducer,
      [wishListApi.reducerPath]: wishListApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        userApi.middleware,
        productsApi.middleware,
        storesApi.middleware,
        wishListApi.middleware,
        categoryApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer RootState and AppDispatch types from store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
