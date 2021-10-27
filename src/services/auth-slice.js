import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    isLoggedIn: false,
    profileData: {
        email: "",
        psw: "",
        isVendor: false,
        products: [],
        cart: []
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {

        },
        logout: (state) => {

        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;