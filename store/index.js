import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query/react';

import authReducer from "../features/authSlice"
import shopReducer from '../features/shopSlice'

// import ctrReducer from "../features/ctrSlice"
// import {appServicesApi} from "../services/appServices"
import { authApi } from "../services/authServices"
import { shopApi } from "../services/shopService";

export const store =  configureStore({
    reducer: {
        auth: authReducer,
        shop: shopReducer,
        // ctrSearch: ctrReducer,
        // [appServicesApi.reducerPath]: appServicesApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, shopApi.middleware) 

})

setupListeners(store.dispatch)