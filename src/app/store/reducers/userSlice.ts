import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userModeENUM, } from "src/shared/types/types";

interface userState {
    name: string;
    mode: userModeENUM
}

const initialState: userState = {
    name: '',
    mode: userModeENUM.standart
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setMode(state, action: PayloadAction<userModeENUM>) {
            state.mode = action.payload
        }
    }
})

export default userSlice.reducer;