import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../core/hooks/axios";

const initialState = {
    datas : [],
    tag : "",
    filteredData : [],
    isLoading : false,
    error : null,
}

export const fetchContent = createAsyncThunk( 'content/fetchContent',
    async () => {
      const res = await axios.post('/getproducts')
      const data = await res.data
      return data
    }
)

const productsSlice = createSlice({
    name: "products", 
    initialState, 
    reducers: {
      filterDatas(state,action){
        const tag = action.payload
        state.tag = tag
        if(tag !== "")
          state.filteredData = state.datas.filter(product => product.tag == tag)
        else
          state.filteredData = state.datas
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
          state.isLoading = false
          state.datas = [...action.payload]
          state.filteredData = [...action.payload]
          state.error = null
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
          state.isLoading = false
          console.log(action,"action")
          if (action.payload && action.payload.response) {
            state.error = action.payload.response.data.error.message;
          } else {
            state.error = action.error.message;
          }
        })
      },
});



export const getProducts = (state, cartIds) => {
    return state.products.filteredData.filter(product => !cartIds.includes(product._id))
}

export const getIsLoading = (state) => state.products.isLoading
export const getError = (state) => state.products.error

export const getTag = (state) => state.products.tag

export const getSingleProduct = (state, id) => {
    
    let data = null;
    state.products.datas.forEach(element => {
        if (id == element._id) {
            data = element
            return;
        }
    });

    return data;
}

export const { filterDatas } = productsSlice.actions

export default productsSlice.reducer
