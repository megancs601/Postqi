import type { ColumnState } from "../types/board";

export const initialData: ColumnState = {
  todo: {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "task-1",
        content: "Buy groceries",
        date: "2022-10-31T00:00:00Z",
        priority: 3,
      },
      {
        id: "task-2",
        content: "Write unit tests",
        date: "2025-10-31T00:00:00Z",
        priority: 1,
      },
    ],
    color: "border-red-400",
  },
  inprogress: {
    id: "inprogress",
    title: "In Progress",
    tasks: [
      {
        id: "task-3",
        content: "Build Kanban UI",
        date: "2025-07-12T00:00:00Z",
        priority: 2,
      },
    ],
    color: "border-orange-400",
  },
  done: {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "task-4",
        content: "Set up project",
        date: "2025-06-05T00:00:00Z",
        priority: 2,
      },
    ],
    color: "border-green-400",
  },
};
