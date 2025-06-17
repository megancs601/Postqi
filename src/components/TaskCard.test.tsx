import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import boardReducer from "../store/slices/boardSlice";
import { Provider } from "react-redux";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";

const fakeColumn = {
  id: "test-col",
  title: "Test Column",
  tasks: [
    {
      id: "fake-task-1",
      content: "Fake Task 1",
      date: "2025-06-12",
      priority: 3,
      tags: [
        { title: "home", color: "blue" },
        { title: "project", color: "yellow" },
      ],
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
      board: { columns: [fakeColumn] },
    },
  });

  return render(
    <Provider store={store}>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="column-1">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {ui}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Provider>,
  );
};

it("renders task content and tags", () => {
  renderWithDnd(
    <TaskCard index={0} columnId={fakeColumn.id} task={fakeColumn.tasks[0]} />,
  );

  screen.getByText("more_horiz");
  screen.getByText("Fake Task 1");
  screen.getByText("home");
  screen.getByText("project");
  screen.getByLabelText(/low priority/i);
  expect(screen.getByRole("time")).toHaveTextContent("6/11/2025");
});
