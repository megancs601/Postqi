import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import boardReducer from "../store/slices/boardSlice";
import TaskCardAction from "./TaskCardActions";
import * as boardSlice from "../store/slices/boardSlice";
import userEvent from "@testing-library/user-event";

const columns = [
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

// Required drag context for <Droppable>
const renderWithStore = (ui: React.ReactNode) => {
  const store = configureStore({
    reducer: { auth: authReducer, board: boardReducer },
    preloadedState: {
      auth: { isAuthenticated: true },
      board: { columns },
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
};

afterEach(() => {
  vi.clearAllMocks();
});

it("has expected behavior when 'move up' is clicked", async () => {
  const moveTaskSpy = vi.spyOn(boardSlice, "moveTask");
  const user = userEvent.setup();

  renderWithStore(
    <TaskCardAction
      index={3}
      columnId={columns[0].id}
      taskId={columns[0].tasks[2].id}
    />,
  );

  // up
  await user.click(screen.getByText("more_horiz"));
  await screen.findByText("Task Actions");

  await user.click(screen.getByText(/move up/i));
  expect(moveTaskSpy).toHaveBeenCalledWith({
    sourceColId: "test-col-1",
    destinationColId: "test-col-1",
    sourceIndex: 3,
    destinationIndex: 2,
  });
});

it("has expected behavior when 'move down' is clicked", async () => {
  const moveTaskSpy = vi.spyOn(boardSlice, "moveTask");
  const user = userEvent.setup();

  renderWithStore(
    <TaskCardAction
      index={2}
      columnId={columns[0].id}
      taskId={columns[0].tasks[0].id}
    />,
  );

  await user.click(screen.getByText("more_horiz"));
  await screen.findByText("Task Actions");

  await user.click(screen.getByText(/move down/i));
  expect(moveTaskSpy).toHaveBeenCalledWith({
    sourceColId: "test-col-1",
    destinationColId: "test-col-1",
    sourceIndex: 2,
    destinationIndex: 3,
  });
});
