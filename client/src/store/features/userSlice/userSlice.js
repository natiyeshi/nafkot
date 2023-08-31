import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { isLogedIn,deleteToken ,storeToken} from "../../../core/functions/user.helper";
import axios from "../../../core/hooks/axios"

const [loged , token ] = isLogedIn()

const initialState = {
    isLogedIn : loged,
    user : {},
    isLoading : loged,
    error : null
}


export const getUser = createAsyncThunk( 'content/getUser',
    async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post('/auth/isuserlogedin',null, config )
      const data = await res.data
      return data
    }
)

const userSlice = createSlice({
    initialState,
    name : "user",
    reducers : {
        loginUser(state,action){
          const {token,user} = action.payload
          storeToken(token)
          state.user = user
          state.isLogedIn = true
        },
        logoutUser(state,action){
            deleteToken()
            state.user = {}
            state.isLoading = false
            state.isLogedIn = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
          state.isLoading = false
          state.isLogedIn = true
          state.user = action.payload
          state.error = null
        })
        builder.addCase(getUser.rejected, (state, action) => {
          state.isLogedIn = false
          state.isLoading = false
          deleteToken()
        })
      },
})

export const isUserLogedIn = (state) =>{
    return state.user.isLogedIn
}

export const getUserData = (state) =>{
  return state.user.user
}

export const loadingUser = (state) =>{
    return state.user.isLoading
}

export const { loginUser,logoutUser } = userSlice.actions

export default userSlice.reducer
