import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import authReducer from "../store/slices/authSlice";
import boardReducer from "../store/slices/boardSlice";
import type { Column } from "../types/board";

interface RenderWithStoreOptions {
  ui: React.ReactNode;
  columns?: Column[];
  isAuthenticated?: boolean;
}

export const fakeColumns = [
  {
    id: "test-col-1",
    title: "Test Column 1",
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
        date: "2025-06-12",
        priority: 3,
        tags: [],
      },
      {
        id: "fake-task-3",
        content: "Fake Task 3",
        date: "2025-06-12",
        priority: 3,
        tags: [],
      },
    ],
    color: "blue",
  },
  { id: "test-col-2", title: "Test Column 2", tasks: [], color: "green" },
];

export const renderWithStore = ({
  ui,
  columns = fakeColumns,
  isAuthenticated = true,
}: RenderWithStoreOptions) => {
  const store = configureStore({
    reducer: { auth: authReducer, board: boardReducer },
    preloadedState: {
      auth: { isAuthenticated },
      board: { columns },
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
};
