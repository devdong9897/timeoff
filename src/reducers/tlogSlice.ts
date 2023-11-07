import { createSlice } from "@reduxjs/toolkit";

interface TlogState {
  isTrue: boolean;
}

const initialState: TlogState = {
  isTrue: true,
};

const booleanSlice = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    setTrue: state => {
      state.isTrue = true;
    },
    setFalse: state => {
      state.isTrue = false;
    },
    toggle: state => {
      state.isTrue = !state.isTrue;
    },
  },
});

export const { setTrue, setFalse, toggle } = booleanSlice.actions;
export default booleanSlice;
