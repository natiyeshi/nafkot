import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartslice/cartSlice";
import productsReducer from "./features/productslice/productsSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        products : productsReducer
    },
})