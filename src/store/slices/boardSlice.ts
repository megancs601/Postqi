import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { initialBoardState } from "../../data/initialBoardData";
import type { BoardState } from "../../types/board";
import type { RootState } from "../index";

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
  initialState: initialBoardState as BoardState,
  // No memoization needed here – reducers only run on dispatched actions
  reducers: {
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { sourceColId, destinationColId, sourceIndex, destinationIndex } =
        action.payload;
      const sourceColumn = state.columns.find((col) => col.id === sourceColId);
      const destinationColumn = state.columns.find(
        (col) => col.id === destinationColId,
      );

      if (!sourceColumn || !destinationColumn) {
        return;
      }

      const [movedTask] = sourceColumn.tasks.splice(sourceIndex, 1);
      destinationColumn.tasks.splice(destinationIndex, 0, movedTask);
    },
    deleteTask: (state, action: PayloadAction<DeleteTaskPayload>) => {
      const { columnId, taskId } = action.payload;
      const column = state.columns.find((col) => col.id === columnId);

      if (!column) {
        return;
      }

      const columnTasks = column.tasks;
      column.tasks = columnTasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { moveTask, deleteTask } = boardSlice.actions;
export default boardSlice.reducer;

// SELECTORS
export const getAllColumns = (state: RootState) => state.board.columns;
export const getColumnById = (columnId: string) => (state: RootState) =>
  state.board.columns.find((col) => col.id === columnId);

// Memoize b/c it's a selector and we are filtering an object
export const getAllColumnsExcept = createSelector(
  [
    (state: RootState) => state.board.columns,
    (_: RootState, excludeId: string) => excludeId,
  ],
  (columns, excludedId) => columns.filter((col) => col.id !== excludedId),
);

export const getAllTasksAtColumnId =
  (columnId: string) => (state: RootState) => {
    const column = state.board.columns.find((col) => col.id === columnId);
    return column ? column.tasks : [];
  };
