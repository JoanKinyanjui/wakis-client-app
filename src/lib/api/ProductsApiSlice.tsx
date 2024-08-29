import { ProductsProps } from "@/Data/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Filters {
    category?: string;
    priceRange?: { min: number; max: number };
    // other filter fields
  }


export const productsApi = createApi({
    reducerPath : 'productsApi',
    baseQuery : fetchBaseQuery({baseUrl:'/products'}),
    endpoints : (builder)=>({
        getAllProducts : builder.query<ProductsProps[],Filters>({
                         query:(filters={})=>({
                            url:'/',
                            params:filters
                         })
        }),

        getProductById : builder.query<ProductsProps,string>({
            query:(id)=>`/${id}`
        }),

        getProductReviews :builder.query({
            query:(id)=>`/${id}/reviews`
        }),

        addProductReview: builder.mutation({
            query:({id,review})=>({
                url:`/${id}/reviews`,
                method:'POST',
                body:review,
            })
        })

    })
})


export const {
    useGetAllProductsQuery,
    useLazyGetProductByIdQuery,
    useGetProductReviewsQuery,
    useLazyGetProductReviewsQuery,
} = productsApi;