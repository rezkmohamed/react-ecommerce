import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    products: []
};


const productsVendorSlice = createSlice({
    name: 'products',
    initialState: { value: initialStateValue},
    reducers: {
        addNewProduct: (state, action) => {
            state.value.products.push(action.payload);
            const profile = JSON.parse(localStorage.getItem('profileData'));
            const profiles = JSON.parse(localStorage.getItem('profiles'));
            profile.products.push(action.payload);
            const profilesUpdated = profiles.map(p => {
                if(p.email === profile.email) {
                    p = profile;
                }
                return p;
            })
            localStorage.setItem('profileData',JSON.stringify(profile));
            localStorage.setItem('profiles', JSON.stringify(profilesUpdated));
            window.alert('PRODUCT ADDED!!!');

        }
    }
});

export const productsVendorActions = productsVendorSlice.actions;

export default productsVendorSlice.reducer;