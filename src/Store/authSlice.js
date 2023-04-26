import { createSlice } from "@reduxjs/toolkit";

const authDefaultState = {
  status: {
    error: false,
    isLoggedIn: false,
    loading: false,
    showLoginMessage: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authDefaultState,
  reducers: {
    login(state) {
      state.status = {
        error: false,
        isLoggedIn: true,
        loading: false,
        showLoginMessage: false,
      };
    },
    signup(state) {
      state.status = {
        error: false,
        isLoggedIn: false,
        loading: false,
        showLoginMessage: true,
      };
    },
    loading(state) {
      state.status = {
        error: false,
        isLoggedIn: false,
        loading: true,
        showLoginMessage: false,
      };
    },
    findError(state) {
      state.status = {
        error: true,
        isLoggedIn: false,
        loading: false,
        showLoginMessage: false,
      };
    },
    logout(state) {
      state.status = authDefaultState;
    },
  },
});

export default authSlice;
export const authSliceActions = authSlice.actions;
