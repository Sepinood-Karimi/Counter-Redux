// redux-toolkit

import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
});

const persistConfig = {
  key: "redux-persist",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     auth: authSlice.reducer,
//   },
// });

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };
