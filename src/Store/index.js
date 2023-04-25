// redux-toolkit

import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultCounterState = {
  number: 0,
  show: true,
};

const counterState = createSlice({
  name: "counter",
  initialState: defaultCounterState,
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

const store = configureStore({
  reducer: counterState.reducer,
});

export default store;
export const counterActions = counterState.actions;

// simple redux

// import { createStore } from "redux";
//
// const defaultStateObj = {
//   number: 0,
//   show: true,
// };
// const reducerFunc = (state = defaultStateObj, action) => {
//   if (action.type === "increment") {
//     return {
//       number: state.number + 1,
//       show: true,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       number: state.number - 1,
//       show: true,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       number: state.number + action.payload,
//       show: true,
//     };
//   }
//
//   if (action.type === "decrease") {
//     return {
//       number: state.number - action.payload,
//       show: true,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       number: state.number,
//       show: !state.show,
//     };
//   }
//   return state;
// };
// const store = createStore(reducerFunc);
//
// export default store;
