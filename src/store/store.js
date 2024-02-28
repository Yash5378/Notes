import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import todoSlice from "./todoSlice";
const store = configureStore({
  reducer: {
    todos: todoSlice,
    auth: authSlice,
  },
});

export default store;
