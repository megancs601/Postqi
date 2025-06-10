import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../data/initialState";
import type { ColumnState } from "../types/board";

export const boardSlice = createSlice({
  name: "board",
  initialState: initialData as ColumnState,
  reducers: {
    moveTask: () => {
      console.log("move task called");
    },
  },
});

export const { moveTask } = boardSlice.actions;
export default boardSlice.reducer;
