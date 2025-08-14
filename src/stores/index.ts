import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import companySlice from "./slice/companySlice";

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    reducer: {
        userReducer: userSlice,
        companyReducer: companySlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;