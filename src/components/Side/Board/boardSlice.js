import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardState: Array(9).fill(null),
  playersTurn: "x",
  lineClass: "",
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    fillCell: (state, action) => {
      state.boardState[action.payload] = state.playersTurn;
    },
    flipTurns: (state) => {
      if (state.playersTurn === "x") {
        state.playersTurn = "o";
      } else {
        state.playersTurn = "x";
      }
    },
    defineLineClass: (state, action) => {
      state.lineClass = action.payload;
    },
    resetBoard: (state) => {
      state.boardState = Array(9).fill(null);
      state.playersTurn = "x";
      state.lineClass = "";
    },
  },
});

export const { fillCell, flipTurns, defineLineClass, resetBoard } =
  boardSlice.actions;

export default boardSlice.reducer;
