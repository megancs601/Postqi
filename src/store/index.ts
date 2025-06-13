import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
