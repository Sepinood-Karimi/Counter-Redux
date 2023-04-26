import { createSlice } from "@reduxjs/toolkit";

const authDefaultState = {
  isLoggedIn: false,
  error: "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authDefaultState,
  reducers: {
    login(state) {
      state.error = "";
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    findError(state) {
      state.isLoggedIn = false;
      state.error = "Something went Wrong!";
    },
    isLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

export default authSlice;
export const authSliceActions = authSlice.actions;
