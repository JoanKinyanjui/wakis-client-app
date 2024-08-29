import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishListApi = createApi({
    reducerPath: 'wishListApi',
    baseQuery: fetchBaseQuery({baseUrl:''}),
    endpoints: (builder)=>({

        getWishListApi : builder.query({
            query:(userId)=> `/users/${userId}/wishList`,
        }),

        addProductToWishList: builder.mutation({
            query:({product,userId})=>({
                 url:`/users/${userId}/wishlist`,
                 method:'POST',
                 body:product
            })
           }),
        
        removeProductFromWishList: builder.mutation({
               query:({productId,userId})=>({
                    url:`/users/${userId}/wishlist/${productId}`,
                    method:'POST',
               })
        }),
    })
    
})

export const {
    useAddProductToWishListMutation,
    useLazyGetWishListApiQuery,
    useRemoveProductFromWishListMutation,
} = wishListApi;