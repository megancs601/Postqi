import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
};

const getIntinigialAuthState = (): boolean => {
  try {
    const stored = localStorage.getItem("isAuthenticated");
    return stored === "true";
  } catch {
    return false;
  }
};

const initialState: AuthState = {
  isAuthenticated: getIntinigialAuthState(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
