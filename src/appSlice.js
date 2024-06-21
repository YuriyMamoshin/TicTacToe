import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameStage: "inProgress",
  score: {
    o: 0,
    x: 0,
  },
};

export const appSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeGameStage: (state, action) => {
      state.gameStage = action.payload;
    },
    changeScore: (state, action) => {
      state.score[action.payload] += 1;
    },
    resetGame: (state) => {
      state.gameStage = "inProgress";
      state.score = {
        o: 0,
        x: 0,
      };
    },
  },
});

export const { changeGameStage, changeScore, resetGame } = appSlice.actions;

export default appSlice.reducer;
