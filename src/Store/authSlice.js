import { createSlice } from "@reduxjs/toolkit";

const authDefaultState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authDefaultState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
export const authSliceActions = authSlice.actions;
