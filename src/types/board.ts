export type Task = {
  id: string;
  content: string;
};

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
};

export type ColumnState = {
  [key: string]: Column;
};
