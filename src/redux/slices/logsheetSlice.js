import { createSlice } from "@reduxjs/toolkit";

export const logsheetSlice = createSlice({
  name: "logsheet",
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

export const { showLoader, hideLoader } = logsheetSlice.actions;
export default logsheetSlice.reducer;
