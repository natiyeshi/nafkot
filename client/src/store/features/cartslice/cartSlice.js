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
        removeCartItem(state,action){
            const id = action.payload
            state.total -= Number(state.cartItems[id].data.price) * Number(state.cartItems[id].amount)
            state.cartItems = remove(state.cartItems,id)
        },
        addToCart(state,action){
            const data = action.payload
            if(state.cartItems[data._id] == null){
                state.cartItems[data._id] = {
                    data,amount : 1 
                }
                state.total += data.price
            }
        }

    }
})


export const getCart = state => state.cart


export const getCartIds = state =>{
    let cartIds = []
    for(let id in state.cart.cartItems){
        cartIds.push(Number(id))
    }
    return cartIds
}

export const { increaseAmount,decreaseAmount,removeCartItem,addToCart } = cartSlice.actions
export default cartSlice.reducer


/** `
cart = {
    cartItems : {
        id : {
            data : {}
            amount : number
        }
    }
    total : 10
}

 */
