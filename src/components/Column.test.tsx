import { render, screen } from "@testing-library/react";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import boardReducer from "../store/slices/boardSlice";

const fakeTaskColumn = {
  id: "test",
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
};

// Required drag context for <Droppable>
const renderWithDnd = (ui: React.ReactNode) => {
  const store = configureStore({
    reducer: { auth: authReducer, board: boardReducer },
    preloadedState: {
      auth: { isAuthenticated: true },
      board: { [fakeTaskColumn.id]: fakeTaskColumn },
    },
  });

  return render(
    <Provider store={store}>
      <DragDropContext onDragEnd={() => {}}>{ui}</DragDropContext>
    </Provider>,
  );
};

it("renders column title and tasks", () => {
  renderWithDnd(<Column column={fakeTaskColumn} />);

  screen.getByRole("heading", { name: /test column/i });

  const tasks = screen.getAllByText(/fake task/i);
  expect(tasks.length).toEqual(2);
  screen.getByText(/task 1/i);
  screen.getByText(/task 2/i);
});
