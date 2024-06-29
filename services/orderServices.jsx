import { baseUrl } from '../firebase/database'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { objectToArray } from "../scripts/array"

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({

    getOrders:  builder.query({
      query: () => 'orders.json',
      transformResponse: response => objectToArray(response),

    }),
  }),
})

export const {
  useGetOrdersByIdQuery,
  useGetOrdersQuery,
} = ordersApi