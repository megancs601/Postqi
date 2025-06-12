import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialData } from "../data/initialState";
import type { ColumnState } from "../types/board";
import type { RootState } from "./index";

interface MoveTaskPayload {
  sourceColId: string;
  destinationColId: string;
  sourceIndex: number;
  destinationIndex: number;
}

interface DeleteTaskPayload {
  columnId: string;
  taskId: string;
}

export const boardSlice = createSlice({
  name: "board",
  initialState: initialData as ColumnState,
  reducers: {
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { sourceColId, destinationColId, sourceIndex, destinationIndex } =
        action.payload;
      const sourceTasks = state[sourceColId].tasks;
      const [movedTask] = sourceTasks.splice(sourceIndex, 1);
      const destinationTasks = state[destinationColId].tasks;
      destinationTasks.splice(destinationIndex, 0, movedTask);
    },
    deleteTask: (state, action: PayloadAction<DeleteTaskPayload>) => {
      const { columnId, taskId } = action.payload;
      const columnTasks = state[columnId].tasks;
      state[columnId].tasks = columnTasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { moveTask, deleteTask } = boardSlice.actions;
export default boardSlice.reducer;

// SELECTORS
export const getAllColumns = (state: RootState) => state.board;
export const getColumnId = (columnId: string) => (state: RootState) =>
  state.board[columnId];
export const getOtherColumnIds = (excludeId: string) => (state: RootState) =>
  Object.keys(state.board).filter((id) => id !== excludeId);

export const getTaskLengthAtColumn = (columnId: string) => (state: RootState) =>
  state.board[columnId].tasks.length ?? 0;
