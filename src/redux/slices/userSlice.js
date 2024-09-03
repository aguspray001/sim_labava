import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    operator: [],
    kerani_fg: [],
    supervisor: [],
  },
  reducers: {
    getKerani(state, action) {
      return [...state, state.kerani_fg.push(action.payload)];
    },
    getOperator(state, action) {
      return [...state, state.operator.push(action.payload)];
    },
    getSupervisor(state, action) {
      return [...state, state.supervisor.push(action.payload)];
    },
  },
});

export const { getKerani, getOperator, getSupervisor } = userSlice.actions;
export default userSlice.reducer;
