import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = 
{
    isLoggedIn: false,
    profileData: {
        isVendor: false,
        idProfile: ''
    },
};

const profileDataStorage = JSON.parse(localStorage.getItem('profileData'));
if(profileDataStorage){
    initialStateValue.isLoggedIn = true;
    initialStateValue.profileData = profileDataStorage;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value.isLoggedIn = true;
            state.value.profileData.isVendor = action.payload.isVendor;
            state.value.profileData.idProfile = action.payload.idProfile;
        },
        logout: (state) => {
            state.value.isLoggedIn = false;
            state.value.profileData = initialStateValue;
            localStorage.removeItem('profileData');
            console.log('logged out.');
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;