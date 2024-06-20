import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {votingSystem} from "src/shared/types/types";
import {NIL as NIL_UUID } from "uuid"

interface tableState {
    tableName: string;
    votingSystem: votingSystem;
    id: string;
}

const initialState: tableState = {
    tableName: '',
    votingSystem: votingSystem.POWERS_OF_TWO,
    id: NIL_UUID,
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setTableName(state, action: PayloadAction<string>) {
            state.tableName = action.payload;
        },
        setVotingSystem(state, action: PayloadAction<votingSystem>) {
            state.votingSystem = action.payload
        },
        setId(state, action: PayloadAction<string>) {
            state.id = action.payload
        },

    }
})

export default tableSlice.reducer;