import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counterSlice";
import tlogSlice from "../reducers/tlogSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    tlogSlice: tlogSlice.reducer,
  },
});

export default store;
