import { createSlice } from "@reduxjs/toolkit";
import cartData from "../../../data/dummyCart";

let total = 0;
let cartItems = [];

cartData.forEach(data => {
    cartItems[data._id] = {
        data, amount : 1
    }
    total += data.price
})

const remove = (obj,id) =>{
    let result = {}
    for(let i in obj){
        if(i == id) continue
        result[i] = obj[i]  
    }
    return result
}

const initialState = {
    cartItems,
    total,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        increaseAmount(state,action){
            const id = action.payload
            state.cartItems[id].amount++
            state.total += Number(state.cartItems[id].data.price)

        },
        decreaseAmount(state,action){
            const id = action.payload
            const num = --state.cartItems[id].amount
            state.total -= Number(state.cartItems[id].data.price)
            if(num == 0){
                state.cartItems = remove(state.cartItems,id)
            }
        },
        remove(state,action){
            const id = action.payload
        }

    }
})


export const getCart = state => state.cart

export const { increaseAmount,decreaseAmount } = cartSlice.actions
export default cartSlice.reducer


/** `
{
    cartItems : {
        id : {
            data : {}
            amount : number
        }
    }
    total : 10
}

 */
