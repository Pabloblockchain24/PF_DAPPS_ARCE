import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import cartReducer from "../features/cartSlice"
import shopReducer from '../features/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react';


import { authApi } from "../services/authServices"
import { shopApi } from "../services/shopService";

export const store =  configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        shop: shopReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer

    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
    .concat(shopApi.middleware) 
    .concat(authApi.middleware)

})

setupListeners(store.dispatch)