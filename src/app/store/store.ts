import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "src/shared/api/apiSlice";
import tableSlice from "src/features/createTable/tableSlice";

const rootReducer = combineReducers({
    tableSlice,
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