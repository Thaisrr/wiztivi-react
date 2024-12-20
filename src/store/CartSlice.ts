import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as string[],
    reducers: {
        addToCart: (state: string[], action: PayloadAction<string>) => [...state, action.payload],
    }
});

export const cartLength = (state: {cart: string[]}) => state.cart.length;
export const {addToCart} = cartSlice.actions; // on exporte les actions pour les utiliser dans les composants
export default cartSlice.reducer; // on exporte le reducer pour l'utiliser dans le store.ts