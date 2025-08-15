import { createSlice, type Draft } from "@reduxjs/toolkit";

interface InitialState {
  [key: string]: boolean; // Dynamic keys for multiple API loaders
}

const initialState: InitialState = {};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state: Draft<InitialState>, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
