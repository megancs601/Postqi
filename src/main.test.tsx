import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/authSlice";
import boardReducer from "./store/boardSlice";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { MemoryRouter } from "react-router";
const fakeTaskColumn = {
  "12345": {
    id: "12345",
    title: "Test Column",
    tasks: [
      {
        id: "1234",
        content: "Fake Task",
        date: "2025-06-12",
        priority: 3,
        tags: [],
      },
    ],
    color: "blue",
  },
};

const renderWithStore = (initialAuthState: boolean, initialRoute = "/") => {
  const store = configureStore({
    reducer: { auth: authReducer, board: boardReducer },
    preloadedState: {
      auth: { isAuthenticated: initialAuthState },
      board: fakeTaskColumn,
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

it("renders not found page on unknown path", () => {
  renderWithStore(false, "/some/bad/route");
  screen.getByText(/404/i);
});

it("renders about page", () => {
  renderWithStore(false, "/about");
  screen.getByText(/about/i);
});
