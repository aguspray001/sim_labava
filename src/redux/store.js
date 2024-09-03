import toolkit from "@reduxjs/toolkit";
import transactionReducer from "./slices/transactionSlice";
import userReducer from "./slices/userSlice";
import logsheetReducer from "./slices/logsheetSlice";
import monitoringReducer from "./slices/monitoringSlice";

const { configureStore } = toolkit;

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    user: userReducer,
    logsheet: logsheetReducer,
    monitoring: monitoringReducer,
  },
});

export default store;
