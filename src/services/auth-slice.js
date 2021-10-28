import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    isLoggedIn: false,
    profileData: {
        email: "",
        psw: "",
        isVendor: false,
        products: [],
        cart: []
    },
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
        },
        register: (state, action) => {
            const profiles = JSON.parse(localStorage.getItem('profiles'));

            if(profiles) {
                const checkIfEmailExists = profiles.filter((profile) => profile.email === action.payload.email);
                if(checkIfEmailExists){
                    window.alert('email already exists!!!');
                    return;
                }
                profiles.push(action.payload);
                localStorage.setItem('profiles', JSON.stringify(profiles));
                window.alert('PROFILE REGISTRATED. PROCEED WITH LOGIN');    
            }
            localStorage.setItem('profiles', JSON.stringify([action.payload]));
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;