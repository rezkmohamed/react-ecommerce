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
            let allProducts = JSON.parse(localStorage.getItem('products'));
            profile.products.push(action.payload);
            if(allProducts){
                allProducts.push(action.payload);
            } else {
                allProducts = [action.payload];
            }
            const profilesUpdated = profiles.map(p => {
                if(p.email === profile.email) {
                    p = profile;
                }
                return p;
            })
            localStorage.setItem('profileData',JSON.stringify(profile));
            localStorage.setItem('profiles', JSON.stringify(profilesUpdated));
            localStorage.setItem('products', JSON.stringify(allProducts));
            window.alert('PRODUCT ADDED!!!');

        }
    }
});

export const productsVendorActions = productsVendorSlice.actions;

export default productsVendorSlice.reducer;