import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath:'userApi',
    baseQuery: fetchBaseQuery({baseUrl:''}),
    endpoints: (builder)=>({

        signUp : builder.mutation({
            query:(credentials)=>({
               url:'/auth/signup',
               method:'POST',
               body:credentials
            })
        }),

        login : builder.mutation({
            query:(credentials)=>({
               url:'/auth/login',
               method:'POST',
               body:credentials
            })
        }),

        socialLogin : builder.mutation({
            query:(credentials)=>({
               url:'/auth/socialLogin',
               method:'POST',
               body:credentials
            })
        }),

        addUserInfo : builder.mutation({
            query:({userId,info})=>({
                url:`/user/${userId}/personalInfo`,
                method:'POST',
                body:info
            })
        }),

        editUserInfo :builder.mutation({
            query:({userId , info})=>({
                url:`/users/${userId}/user-info`,
                method:'PUT',
                body :info ,
            })
        }),

        getUserOrders :builder.query({
            query:(userId)=>`/users/${userId}/orders`
        }),
        
       




    })
})

export const {
    useSignUpMutation,
    useLoginMutation,
    useAddUserInfoMutation,
    useEditUserInfoMutation,
    useLazyGetUserOrdersQuery,
} = userApi;