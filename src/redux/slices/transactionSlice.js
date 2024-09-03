import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transactions: [],
    transaction: {},
  },
  reducers: {
    getTransaction(state, action) {
      return [...state, action.payload];
    },
    postTransaction(state, action) {
      return { ...state, transaction: action.payload };
    },
  },
});

export const { getTransaction, postTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
