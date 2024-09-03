import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    loader: false,
    refresh: false,
  },
  reducers: {
    showLoader(state, action) {
      return { ...state, loader: true };
    },
    hideLoader(state, action) {
      return { ...state, loader: false };
    },
  },
});

export const { showLoader, hideLoader } = globalSlice.actions;
export default globalSlice.reducer;
