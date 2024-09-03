import { createSlice } from "@reduxjs/toolkit";

export const monitoringSlice = createSlice({
  name: "monitoring",
  initialState: {
    level: [],
    material: [],
    sgStatus: [],
  },
  reducers: {
    getLevel(state, action) {
      return { ...state, level: action.payload };
    },
    getMaterial(state, action) {
      return { ...state, material: action.payload };
    },
    getSGStatus(state, action) {
      return { ...state, sgStatus: action.payload };
    },
  },
});

export const { showLoader, hideLoader } = monitoringSlice.actions;
export default monitoringSlice.reducer;
