import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import companySlice from "./slice/companySlice";
import loaderSlice from "./slice/loaderSlice"; // Import the loader slice

import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    userReducer: userSlice,
    companyReducer: companySlice,
    loaderReducer: loaderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
