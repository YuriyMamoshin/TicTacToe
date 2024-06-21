import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "components/Side/Board/boardSlice"
import appReducer from "src/appSlice"
import chatReducer from "components/Side/Chat/chatSlice"

export const store = configureStore({
    reducer: {
        board: boardReducer,
        game: appReducer,
        chat: chatReducer
    }
})