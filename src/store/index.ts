import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
