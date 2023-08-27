import { createSlice } from "@reduxjs/toolkit";
import cartData from "../../../data/dummyCart";
import {storeCart,getCartFromStore} from "../../../core/functions/common"

let {cartItems,total} =  getCartFromStore();

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
            console.log(state)
            state.cartItems.forEach((element,ind) => {
                if(element.data._id == id){
                    state.cartItems[ind].amount += 1
                    state.total += Number(state.cartItems[ind].data.price)
                } 
            })
            
            storeCart(state.cartItems)
        },
        decreaseAmount(state,action){
            const id = action.payload
            state.cartItems.forEach((element,ind) => {
                if(element.data._id == id){
                    state.total -= Number(state.cartItems[ind].data.price)
                    if(state.cartItems[ind].amount == 1){
                        state.cartItems.splice(ind,1)
                    } else {
                        state.cartItems[ind].amount -= 1
                    }
                } 
            })
            storeCart(state.cartItems)

        },
        removeCartItem(state,action){
            const id = action.payload
            state.cartItems.forEach((element,ind) => {
                if(element.data._id == id){
                    state.total -= Number(state.cartItems[ind].data.price) * Number(state.cartItems[ind].amount)
                    state.cartItems.splice(ind,1)
                }
            })
            storeCart(state.cartItems)

        },
        addToCart(state,action){
            
            const data = action.payload
            state.cartItems.push({
                data,amount : 1 
            })
            state.total += data.price
            storeCart(state.cartItems)
        }

    }
})


export const getCart = state => {
    return state.cart
}

export const getSingleCart = (state,id) => {
    return state.cart.cartItems.find(ele => ele.data._id == id)
}
        

export const getCartIds = state =>{
    let cartIds = []
    for(let element of state.cart.cartItems){
        cartIds.push(element.data._id)
    }
    console.log(cartIds)
    return cartIds
}

export const { increaseAmount,decreaseAmount,removeCartItem,addToCart } = cartSlice.actions
export default cartSlice.reducer


/** `
cart = {
    cartItems : [
         {
            data : {}
            amount : number
        },
    ],
    total : 10
}

 */
