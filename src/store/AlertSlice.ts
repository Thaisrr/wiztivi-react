import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Alert} from "../utils/types/Alert.ts";

export const alertSlice = createSlice({
    name: 'alert',
    initialState: [] as Alert[],
    reducers: {
        createAlert: (state: Alert[], action: PayloadAction<Alert>) => [...state, action.payload],
        removeAlert: (state: Alert[], action: PayloadAction<Alert>) => {
            const copy = [...state];
            const index = state.findIndex(a => a.text === action.payload.text)
            copy.splice(index, 1);
            return copy;
        }
    }
});
export const {createAlert, removeAlert} = alertSlice.actions;
export default alertSlice.reducer;