import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = {
    products: [],
    totalProducts: 0,
    totalPrice: 0
};
const productsInStorage = JSON.parse(localStorage.getItem('cart'));
if(productsInStorage){
    initialStateValue.products = productsInStorage;
    initialStateValue.totalProducts = productsInStorage.length;
    initialStateValue.totalPrice = productsInStorage.reduce((prevProd, curProd) => {
        return prevProd.price + curProd.price;
    });
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: { value: initialStateValue },
    reducers: {
        addProductToCart: (state, action) => {
            state.value.products.push(action.payload);
            state.value.totalPrice += action.payload.price;
            state.value.totalProducts++;
            // console.log(state.value.products);
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