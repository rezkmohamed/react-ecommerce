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
            state.value.isLoggedIn = true;
            state.value.profileData = action.payload;
            localStorage.setItem('profileData', JSON.stringify(state.value.profileData));
            console.log(action.payload);
        },
        logout: (state) => {
            state.value.isLoggedIn = false;
            state.value.profileData = initialStateValue;
            localStorage.removeItem('profileData');
            console.log('logged out.');
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;