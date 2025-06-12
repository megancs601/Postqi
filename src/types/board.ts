export type Tag = {
  title: string;
  color: string;
};

export type Task = {
  id: string;
  content: string;
  date: string;
  priority: number;
  tags: Tag[];
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
