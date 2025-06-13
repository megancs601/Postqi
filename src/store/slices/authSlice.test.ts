import authReducer, { login, logout } from "./authSlice";

beforeEach(() => {
  localStorage.clear();
});

it("should return the initial state", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({ isAuthenticated: false });
});

it("should set authentication to true on login", () => {
  const state = authReducer({ isAuthenticated: false }, login());
  expect(state).toEqual({ isAuthenticated: true });
});

it("should set authentication to false on logout", () => {
  const state = authReducer({ isAuthenticated: true }, logout());
  expect(state).toEqual({ isAuthenticated: false });
});
