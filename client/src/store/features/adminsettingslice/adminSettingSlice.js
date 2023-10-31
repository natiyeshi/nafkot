import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../Admin/hooks/axios"

const initialState = {
    setting : {},
    loading : true,
    error : null,
}

const adminSettingSlice = createSlice({
  name: "settings",
  initialState,
  reducers : {
     setCurrency(state,action){
      state.setting = action.payload
      state.loading = false
     },
     setError(state,action){
      state.loading = false
      state.error = action.payload
     },
     
  },
  
})

export const getCurrency = (state) => state.adminSetting.setting 
export const getLoading = (state) => state.adminSetting.loading 
export const getError = (state) => state.adminSetting.error 

export const { setCurrency,setError } = adminSettingSlice.actions

export default adminSettingSlice.reducer
