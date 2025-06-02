import type { ColumnState } from "../types/board";

export const initialData: ColumnState = {
  todo: {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "task-1", content: "Buy groceries" },
      { id: "task-2", content: "Write unit tests" },
    ],
    color: "border-red-400",
  },
  inprogress: {
    id: "inprogress",
    title: "In Progress",
    tasks: [{ id: "task-3", content: "Build Kanban UI" }],
    color: "border-orange-400",
  },
  done: {
    id: "done",
    title: "Done",
    tasks: [{ id: "task-4", content: "Set up project" }],
    color: "border-green-400",
  },
};
