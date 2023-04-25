import { createSlice } from "@reduxjs/toolkit";

const counterDefaultState = {
  number: 0,
  show: true,
};
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: counterDefaultState,
  reducers: {
    increment(state) {
      state.number++;
    },
    decrement(state) {
      state.number--;
    },
    increase(state, action) {
      state.number = state.number + action.payload;
    },
    decrease(state, action) {
      state.number = state.number - action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export default counterSlice;
export const counterSliceActions = counterSlice.actions;
