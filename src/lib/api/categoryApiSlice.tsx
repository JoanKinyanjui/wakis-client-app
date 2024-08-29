import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath : 'categoryApi',
    baseQuery:fetchBaseQuery({baseUrl:''}),
    endpoints: (builder)=>({

        getAllProductCategories : builder.query({
            query: ()=> '/categories'
        }),

        getProductCategoryById : builder.query({
            query: (id)=>({
                url:`/categories/${id}`,
                method:'GET',
            })
        })
         
    })
})

export const {useGetAllProductCategoriesQuery,useLazyGetProductCategoryByIdQuery} = categoryApi;