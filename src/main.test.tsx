import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/slices/authSlice";
import boardReducer from "./store/slices/boardSlice";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { MemoryRouter } from "react-router";

const initialBoardState = {
  columns: [
    {
      id: "test-col",
      title: "Test Column",
      tasks: [
        {
          id: "fake-task-1",
          content: "Fake Task 1",
          date: "2025-06-12",
          priority: 3,
          tags: [],
        },
        {
          id: "fake-task-2",
          content: "Fake Task 2",
          date: "2025-11-05",
          priority: 1,
          tags: [],
        },
      ],
      color: "blue",
    },
  ],
};

const renderWithStore = (initialAuthState: boolean, initialRoute = "/") => {
  const store = configureStore({
    reducer: { auth: authReducer, board: boardReducer },
    preloadedState: {
      auth: { isAuthenticated: initialAuthState },
      board: initialBoardState,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    </Provider>,
  );
};

it("renders the login page when not authenticated", () => {
  renderWithStore(false, "/dashboard");
  screen.getByRole("heading", { name: /log in/i });
});

it("renders the dashboard page when not authenticated", () => {
  renderWithStore(true, "/dashboard");
  const login = screen.queryByRole("heading", { name: /log in/i });
  expect(login).not.toBeInTheDocument();
});

it("renders not found page on unknown path", () => {
  renderWithStore(false, "/some/bad/route");
  screen.getByText(/404/i);
});

it("renders about page", () => {
  renderWithStore(false, "/about");
  screen.getByText(/about/i);
});
