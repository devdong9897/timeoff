import { createSlice } from "@reduxjs/toolkit";

interface TlogState {
  isChangeComponent: boolean;
}

const initialState: TlogState = {
  isChangeComponent: false,
};

const tlogSlice = createSlice({
  name: "tlogSlice",
  initialState,
  reducers: {
    toggle: state => {
      state.isChangeComponent = !state.isChangeComponent;
    },
  },
});

export const { toggle } = tlogSlice.actions;
export default tlogSlice;
