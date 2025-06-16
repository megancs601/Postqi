import { render, screen } from "@testing-library/react";
import { DragDropContext } from "@hello-pangea/dnd";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import boardReducer from "../store/slices/boardSlice";
import KanbanBoard from "./KanbanBoard";

const columns = [
  {
    id: "test-col-1",
    title: "Test Column 1",
    tasks: [],
    color: "blue",
  },
  { id: "test-col-2", title: "Test Column 2", tasks: [], color: "green" },
];

// Required drag context for <Droppable>
const renderWithDnd = (ui: React.ReactNode) => {
  const store = configureStore({
    reducer: { auth: authReducer, board: boardReducer },
    preloadedState: {
      auth: { isAuthenticated: true },
      board: { columns },
    },
  });

  return render(
    <Provider store={store}>
      <DragDropContext onDragEnd={() => {}}>{ui}</DragDropContext>
    </Provider>,
  );
};

it("renders expected columns", () => {
  renderWithDnd(<KanbanBoard />);

  screen.getByRole("heading", { name: /test column 1/i });
  screen.getByRole("heading", { name: /test column 2/i });

  const columns = screen.getAllByText(/test column/i);
  expect(columns.length).equal(2);
});
