import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import productsInitialData from "../../../data/dummyProduct";
import axios from "../../../Admin/hooks/axios"

const initialState = {
    products : [],
    isLoading : false,
    error : null,
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await axios.post('/getproducts')
        const data = await res.data
        return data
    }
)

const adminProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers : {
        removeItem(state,action){
          const temp = state.products.filter(data => data._id != action.payload)
          state.products = temp
        },
        addItem(state,action){
            state.products.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
          state.isLoading = false
          state.products = [...action.payload]
          state.error = null
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
          state.isLoading = false
          state.error = action.error.message
        })
      },
})



export const getAdminProducts = (state) => state.adminProducts.products 
export const getLoading = (state) => state.adminProducts.isLoading 
export const getError = (state) => state.adminProducts.error 


export const getSingleAdminProduct = (state, id) => {
    let data;
    state.adminProducts.products.forEach(element => {
        if (id == element._id) {
            data = element
            return;
        }
    });
    return data;
}

export const { removeItem } = adminProductsSlice.actions

export default adminProductsSlice.reducer
