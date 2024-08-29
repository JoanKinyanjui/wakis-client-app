import { ReviewsProps, StoreProps } from "@/Data/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storesApi = createApi({
    reducerPath:'storesApi',
    baseQuery:fetchBaseQuery({baseUrl:''}),
    endpoints:(builder)=>({
         getAllStores: builder.query<StoreProps[],void>({
               query:()=>'/stores'
         }),
         getStoreById: builder.query<StoreProps[],string>({
                query:(id)=>`/stores/${id}`
         }),
         getStoreReviews:builder.query({
                 query:(id)=>`/stores/${id}/reviews`
         }),
         addStoreReview:builder.mutation<ReviewsProps,{storeId:string;review:ReviewsProps} >({
               query:({storeId,review})=>({
                     url:`/stores/${storeId}/reviews`,
                     method:'POST',
                     body:review 
               })
         }),
         followStore :builder.mutation({
                query:({userId,store})=>({
                    url:`/users/${userId}/followed-stores`,
                    method:'POST',
                    body:store
                })
         }),
         unFollowStore :builder.mutation({
            query:({userId,storeId})=>({
                  url:`/users/${userId}/followed-stores/${storeId}`,
                  method:'DELETE',
            })
         })
    })
})

export const {
    useGetAllStoresQuery,
    useLazyGetStoreByIdQuery,
    useGetStoreReviewsQuery,
    useFollowStoreMutation,
    useUnFollowStoreMutation,

} = storesApi;