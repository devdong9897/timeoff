import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "todoSlice",
  initialState: { todo: [] },
  reducers: {
    go: state => {
      console.log("gogo");
    },
  },
});

export default counterSlice;
export const { go } = counterSlice.actions;
