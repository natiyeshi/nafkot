import { createSlice } from "@reduxjs/toolkit";
import productsInitialData from "../../../data/dummyProduct";


const productsSlice = createSlice({
    name: "products",
    initialState : productsInitialData,
    
})


export const getProducst = (state) => state.products 

export default productsSlice.reducer