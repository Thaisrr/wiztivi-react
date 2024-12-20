import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartSlice.ts';
import alertReducer from './AlertSlice.ts';
import userReducer from './UserSlice.ts';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        alert: alertReducer,
        user: userReducer,
    }
});

export default store;

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;