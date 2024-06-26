import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DATABASE_URL } from "../firebase/database";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: DATABASE_URL }),
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }),
        signUp: builder.mutation({
            query: (credentials) => ({
                url: "/signUp",
                method: "POST",
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        })
    })
})

export const {
    useLoginMutation,
    useSignUpMutation
} = authApi;
