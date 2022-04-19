import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//THIS IS API ---MAKE REQUEST FOR US
//define a service user a base URL


const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),

    endpoints: (builder)=>({
        //CREATING USER
        signupUser: builder.mutation({
            //Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects
            query: (user)=> ({
                url: '/users',
                method:'POST',
                body:user,
            }),
        }),
        
        //LOGIN USER
        loginUser: builder.mutation({
            query: (user)=> ({
                url: '/users/login',
                method:'POST',
                body:user,
            }),
        }),

       //LOGOUT
       logoutUser: builder.mutation({
           query: (payload)=>({
            url: '/logout',
            method: 'DELETE',
            body: payload,
           }),
       }),
    }),
});

//this endpoints give us a hooks like functions that we can use to have access to the endpoints
export const {useSignupUserMutation,useLoginUserMutation,useLogoutUserMutation} = appApi;

export default appApi;


