import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatState: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.chatState.push(action.payload);
    },
    resetChat: (state) => {
      state.chatState = [];
    },
  },
});

export const { addMessage, resetChat } = chatSlice.actions;

export default chatSlice.reducer;
