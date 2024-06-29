import { baseUrl } from '../firebase/database'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { objectToArray } from "../scripts/array"

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getProductsByCategory: builder.query({
      query: category => `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: response => objectToArray(response),
    }),
    getProducts: builder.query({
      query: () => 'products.json',
    }),
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    postOrder: builder.mutation({
      query: order => ({
        url: 'orders.json',
        method: 'POST',
        body: order,
      }),
    }),
    getProfileImage: builder.query({
      query: localId => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body: { image },
      }),
    }),
  }),
})

export const {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
  useGetCategoriesQuery,
  usePostOrderMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation,

} = shopApi