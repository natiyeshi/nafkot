import { createSlice } from "@reduxjs/toolkit";
import cartData from "../../data/dummyCart";

let total = 0;
let cartItems = [];

cartData.forEach(data => {
    addToCart(data)
    total += data.price
})

function addToCart(data){
    cartItems[data._id] = {
        data, amount : 1
    }
}

console.log(cartItems)

const initialState = {
    cartItems,
    total,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
})

export default cartSlice.reducer