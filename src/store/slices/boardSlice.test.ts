import boardReducer, {
  deleteTask,
  getAllColumns,
  getColumnById,
  moveTask,
} from "./boardSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  todo: {
    id: "todo",
    title: "To Do",
    color: "blue",
    tasks: [{ id: "task-1", content: "", date: "", priority: 1, tags: [] }],
  },
  done: {
    id: "done",
    title: "Done",
    color: "green",
    tasks: [
      { id: "task-2", content: "", date: "", priority: 2, tags: [] },
      { id: "task-3", content: "", date: "", priority: 1, tags: [] },
    ],
  },
};

it("moves the task correctly", () => {
  // move to new column and below task-2
  const moveTaskAction = moveTask({
    sourceColId: "todo",
    sourceIndex: 0,
    destinationColId: "done",
    destinationIndex: 1,
  });

  const newState = boardReducer(initialState, moveTaskAction);

  expect(newState.done.tasks.length).toEqual(3);
  expect(newState.todo.tasks.length).toEqual(0);
  expect(newState.done.tasks[1].id).toEqual("task-1");
});

it("deletes the task correctly", () => {
  const deleteTaskAction = deleteTask({
    columnId: "done",
    taskId: "test-2",
  });

  const newState = boardReducer(initialState, deleteTaskAction);
  expect(newState.done.tasks.length).toEqual(2);
});

it("returns all columns with getAllColumns", () => {
  const state = { board: initialState };
  const result = getAllColumns(state as any);

  expect(result).toEqual(initialState);
});

it("returns a specific column with getColumnById", () => {
  const state = { board: initialState };
  const selector = getColumnById("todo");
  const result = selector(state as any);

  expect(result).toEqual(initialState.todo);
});

it.todo("returns other columns with getOtherColumns");

it.todo(
  "returns the length of tasks in a specific column with getAllTasksAtColumnId",
  () => {},
);
