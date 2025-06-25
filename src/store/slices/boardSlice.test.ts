import boardReducer, {
  deleteTask,
  getAllColumns,
  getColumnById,
  getAllTasksAtColumnId,
  moveTask,
  getAllColumnsExcept,
  changeTaskPriority,
  addTask,
} from "./boardSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialBoardState = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      color: "blue",
      tasks: [
        {
          id: "task-1",
          content: "",
          date: "2025-06-12",
          priority: 1,
          tags: [],
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      color: "green",
      tasks: [
        {
          id: "task-2",
          content: "",
          date: "2025-01-10",
          priority: 2,
          tags: [],
        },
        {
          id: "task-3",
          content: "",
          date: "2025-10-15",
          priority: 1,
          tags: [],
        },
      ],
    },
  ],
};

it("moves the task correctly", () => {
  // move to new column and below task-2
  const moveTaskAction = moveTask({
    sourceColId: "todo",
    sourceIndex: 0,
    destinationColId: "done",
    destinationIndex: 1,
  });

  const newState = boardReducer(initialBoardState, moveTaskAction);

  expect(newState.columns[1].tasks.length).toEqual(3);
  expect(newState.columns[0].tasks.length).toEqual(0);
  expect(newState.columns[1].tasks[1].id).toEqual("task-1");
});

it("deletes the task correctly", () => {
  const deleteTaskAction = deleteTask({ columnId: "done", taskId: "test-2" });

  const newState = boardReducer(initialBoardState, deleteTaskAction);
  const [column] = newState.columns.filter((col) => col.id === "done");
  expect(column.tasks.length).toEqual(2);
});

it("adds new task to column with addTask", () => {
  const newTask = {
    id: "task-100",
    content: "new task",
    date: "2025-06-24",
    priority: 3,
    tags: [],
  };

  const columnId = initialBoardState.columns[1].id;
  const addTaskAction = addTask({ columnId, task: newTask });
  expect(initialBoardState.columns[1].tasks.length).toEqual(2);

  const newState = boardReducer(initialBoardState, addTaskAction);
  const [column] = newState.columns.filter((col) => col.id === columnId);
  expect(column.tasks.length).toEqual(3);
});

it("changes a tasks's priority with changeTaskPriority", () => {
  const columnId = initialBoardState.columns[0].id;
  const task = initialBoardState.columns[0].tasks[0];

  expect(task.priority).toEqual(1);

  const changeTaskPriorityAction = changeTaskPriority({
    taskId: task.id,
    columnId,
    newPriority: 3,
  });

  const newState = boardReducer(initialBoardState, changeTaskPriorityAction);
  const [newColumnState] = newState.columns.filter(
    (col) => col.id === columnId,
  );
  const [newTaskState] = newColumnState.tasks.filter(
    (_task) => _task.id === task.id,
  );

  expect(newTaskState.priority).toEqual(3);
});

it("returns all columns with getAllColumns", () => {
  const state = { board: initialBoardState };
  const result = getAllColumns(state as any);

  expect(result).toEqual(initialBoardState.columns);
});

it("returns a specific column with getColumnById", () => {
  const state = { board: initialBoardState };
  const selector = getColumnById("todo");
  const result = selector(state as any);
  const [column] = initialBoardState.columns.filter((col) => col.id === "todo");

  expect(result).toEqual(column);
});

it("returns other columns with getAllColumnIdsExcept", () => {
  const state = { board: initialBoardState };
  const result = getAllColumnsExcept(state as any, "todo");
  const availableColumns = result.filter((col) => col.id !== "todo");

  expect(result).toEqual(availableColumns);
});

it("returns the length of tasks in a specific column with getAllTasksAtColumnId", () => {
  const state = { board: initialBoardState };
  const selector = getAllTasksAtColumnId("done");
  const result = selector(state as any);

  expect(result.length).toEqual(2);
});
