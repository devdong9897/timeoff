import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counterSlice";
import booleanSlice from "../reducers/tlogSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    boolean: booleanSlice.reducer,
  },
});

export default store;
