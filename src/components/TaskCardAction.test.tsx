import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as boardSlice from "../store/slices/boardSlice";
import { fakeColumns, renderWithStore } from "../utils/TestUtils";
import TaskCardAction from "./TaskCardActions";

const user = userEvent.setup();

afterEach(() => {
  vi.clearAllMocks();
});

it("has expected behavior when 'move up' is clicked", async () => {
  const moveTaskSpy = vi.spyOn(boardSlice, "moveTask");

  renderWithStore({
    ui: (
      <TaskCardAction
        index={3}
        columnId={fakeColumns[0].id}
        taskId={fakeColumns[0].tasks[2].id}
      />
    ),
  });

  await user.click(screen.getByText("more_horiz"));
  await screen.findByText("Task Actions");

  await user.click(screen.getByRole("menuitem", { name: /move up/i }));

  expect(moveTaskSpy).toHaveBeenCalledWith({
    sourceColId: "test-col-1",
    destinationColId: "test-col-1",
    sourceIndex: 3,
    destinationIndex: 2,
  });
});

it("has expected behavior when 'move down' is clicked", async () => {
  const moveTaskSpy = vi.spyOn(boardSlice, "moveTask");

  renderWithStore({
    ui: (
      <TaskCardAction
        index={2}
        columnId={fakeColumns[0].id}
        taskId={fakeColumns[0].tasks[0].id}
      />
    ),
  });

  await user.click(screen.getByText("more_horiz"));
  await screen.findByText("Task Actions");

  await user.click(screen.getByRole("menuitem", { name: /move down/i }));

  expect(moveTaskSpy).toHaveBeenCalledWith({
    sourceColId: "test-col-1",
    destinationColId: "test-col-1",
    sourceIndex: 2,
    destinationIndex: 3,
  });
});

it("has expected behavior when 'change status' is clicked", async () => {
  const moveTaskSpy = vi.spyOn(boardSlice, "moveTask");

  renderWithStore({
    ui: (
      <TaskCardAction
        index={2}
        columnId={fakeColumns[0].id}
        taskId={fakeColumns[0].tasks[0].id}
      />
    ),
  });
  await user.click(screen.getByText("more_horiz"));
  await screen.findByText("Task Actions");

  // open submenu
  await user.click(screen.getByRole("menuitem", { name: /change status/i }));

  // user.click() wasnt working, fireEvent.click() is best used with custom UI libraries
  fireEvent.click(await screen.findByText(/test column 2/i));

  expect(moveTaskSpy).toHaveBeenCalledWith({
    sourceColId: "test-col-1",
    destinationColId: "test-col-2",
    sourceIndex: 2,
    destinationIndex: 0, // since test-col-2 is empty
  });
});

it("has expected behavior when 'delete' is clicked", async () => {
  const deleteTaskSpy = vi.spyOn(boardSlice, "deleteTask");

  renderWithStore({
    ui: (
      <TaskCardAction
        index={2}
        columnId={fakeColumns[0].id}
        taskId={fakeColumns[0].tasks[0].id}
      />
    ),
  });

  await user.click(screen.getByText("more_horiz"));
  await screen.findByText("Task Actions");

  await user.click(screen.getByRole("menuitem", { name: /delete/i }));
  expect(deleteTaskSpy).toHaveBeenCalledWith({
    columnId: "test-col-1",
    taskId: "fake-task-1",
  });
});
