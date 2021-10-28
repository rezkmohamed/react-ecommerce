import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";
import productsVendorReducer from "./products-vendor-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        warehouse: productsVendorReducer
    }
});

export default store;