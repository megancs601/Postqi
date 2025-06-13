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
export const getColumnById = (columnId: string) => (state: RootState) =>
  state.board[columnId];

// Memoize b/c it's a selector and we are filtering an object
export const getAllColumnIdsExcept = createSelector(
  [
    (state: RootState) => state.board,
    (_: RootState, excludeId: string) => excludeId,
  ],
  (board, excludedId) => Object.keys(board).filter((id) => id != excludedId),
);

export const getAllTasksAtColumnId = (columnId: string) => (state: RootState) =>
  state.board[columnId].tasks;
