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
        tags: [{ title: "home", color: "pink" }],
      },
      {
        id: "task-2",
        content: "Write unit tests",
        date: "2025-10-31T00:00:00Z",
        priority: 1,
        tags: [{ title: "code", color: "gray" }],
      },
      {
        id: "task-5",
        content: "Schedule dentist appointment",
        date: "2025-06-20T00:00:00Z",
        priority: 2,
        tags: [{ title: "health", color: "red" }],
      },
      {
        id: "task-6",
        content: "Start portfolio redesign",
        date: "2025-06-15T00:00:00Z",
        priority: 1,
        tags: [
          { title: "personal", color: "purple" },
          { title: "design", color: "blue" },
        ],
      },
      {
        id: "task-7",
        content: "Organize desktop files",
        date: "2025-06-12T00:00:00Z",
        priority: 3,
        tags: [],
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
        tags: [
          { title: "personal", color: "purple" },
          { title: "project", color: "cyan" },
        ],
      },
      {
        id: "task-8",
        content: "Learn Redux Toolkit",
        date: "2025-06-10T00:00:00Z",
        priority: 2,
        tags: [
          { title: "learning", color: "yellow" },
          { title: "code", color: "gray" },
        ],
      },
      {
        id: "task-9",
        content: "Write blog post on testing strategies",
        date: "2025-06-08T00:00:00Z",
        priority: 1,
        tags: [
          { title: "writing", color: "fuchsia" },
          { title: "tech", color: "lime" },
        ],
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
        tags: [{ title: "project", color: "cyan" }],
      },
      {
        id: "task-10",
        content: "Renew car registration",
        date: "2025-06-01T00:00:00Z",
        priority: 3,
        tags: [{ title: "home", color: "pink" }],
      },
      {
        id: "task-11",
        content: "Refactor legacy component",
        date: "2025-05-28T00:00:00Z",
        priority: 2,
        tags: [{ title: "code", color: "gray" }],
      },
      {
        id: "task-12",
        content: "Submit job application to company",
        date: "2025-06-04T00:00:00Z",
        priority: 1,
        tags: [{ title: "career", color: "violet" }],
      },
    ],
    color: "border-green-400",
  },
};
