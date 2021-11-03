import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    products: [],
    totalProducts: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: { value: initialStateValue },
    reducers: {
        addProductToCart: (state, action) => {
            state.value.products.push(action.payload);
            state.value.totalPrice += action.payload.price;
            console.log(state.value.products);
            localStorage.setItem('cart', JSON.stringify(state.value.products));
        },
        removeProductFromCart: (state, action) => {
            
        },
        finishBuying: (state) => {
            state.value = initialStateValue;
            localStorage.removeItem('cart');
            console.log('Buying process finished!');
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;