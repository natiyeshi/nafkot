import {createSlice} from "@reduxjs/toolkit";
import productsInitialData from "../../../data/dummyProduct";


const adminProductsSlice = createSlice({
    name: "products",
    initialState: productsInitialData,
    reducers : {
        removeItem(state,action){
            return state.filter(data => data._id != action.payload)
        },
        addItem(state,action){
            state.push(action.payload)
        }
    }
})


export const getAdminProducts = (state) => state.adminProducts  

export const getSingleAdminProduct = (state, id) => {
    let data;
    state.products.forEach(element => {
        if (id == element._id) {
            data = element
            return;
        }
    });
    return data;
}
export const { removeItem } = adminProductsSlice.actions

export default adminProductsSlice.reducer
