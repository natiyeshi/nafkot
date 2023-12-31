import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartslice/cartSlice";
import productsReducer from "./features/productslice/productsSlice";
import adminProductsReducer from "./features/adminproductslice/adminProductsSlice";
import adminSettingReducer from "./features/adminsettingslice/adminSettingSlice";
import userReducer from "./features/userSlice/userSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        products : productsReducer,
        adminProducts : adminProductsReducer,
        adminSetting : adminSettingReducer,
        user : userReducer
    },
})