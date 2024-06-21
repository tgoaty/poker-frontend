import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "src/shared/api/apiSlice";
import tableSlice from "src/app/store/reducers/tableSlice";
import userSlice from "src/app/store/reducers/userSlice";

const rootReducer = combineReducers({
    tableSlice,
    userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']