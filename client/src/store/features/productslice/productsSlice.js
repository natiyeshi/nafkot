import {createSlice} from "@reduxjs/toolkit";
import productsInitialData from "../../../data/dummyProduct";


const productsSlice = createSlice({name: "products", initialState: productsInitialData})


export const getProducts = (state, cartIds) => {
    return state.products.filter(product => !cartIds.includes(product._id))
}

export const getSingleProduct = (state, id) => {
    let data;
    state.products.forEach(element => {
        if (id == element._id) {
            data = element
            return;
        }
    });
    return data;
}

export default productsSlice.reducer
