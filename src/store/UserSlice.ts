import {createSlice, PayloadAction} from "@reduxjs/toolkit";
type StateType = {token: string} | null;
const userSlice = createSlice({
    name: 'user',
    initialState: null as StateType,
    reducers: {
        setUser: (_state: StateType, action: PayloadAction<StateType> ) => action.payload
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;