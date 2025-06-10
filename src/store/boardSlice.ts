import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialData } from "../data/initialState";
import type { ColumnState } from "../types/board";

interface DragDropPayload {
  sourceColId: string;
  destinationColId: string;
  sourceIndex: number;
  destinationIndex: number;
}

export const boardSlice = createSlice({
  name: "board",
  initialState: initialData as ColumnState,
  reducers: {
    moveTask: (state, action: PayloadAction<DragDropPayload>) => {
      const { sourceColId, destinationColId, sourceIndex, destinationIndex } =
        action.payload;
      const sourceTasks = state[sourceColId].tasks;
      const [movedTask] = sourceTasks.splice(sourceIndex, 1);
      const destinationTasks = state[destinationColId].tasks;
      destinationTasks.splice(destinationIndex, 0, movedTask);
    },
  },
});

export const { moveTask } = boardSlice.actions;
export default boardSlice.reducer;
