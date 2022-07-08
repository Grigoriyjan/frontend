import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./reducer/order.reducer";

export const store = configureStore({
    reducer:{
        services: orderSlice.reducer
    }
})