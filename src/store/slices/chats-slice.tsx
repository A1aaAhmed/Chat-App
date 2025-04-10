import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./users-slice";

interface IChatsState {
  list: IUser["id"][];
}

const initialState: IChatsState = {
  list: [],
};

export const ChatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addToChats: (state, action) => {
      const userId = action.payload;
      if (!(state.list.findIndex((item) => item === userId) > -1)) {
        state.list.push(userId);
      }
    },
    removeFromChats: (state, action) => {
      const userId = action.payload;
      state.list = state.list.filter((item) => item !== userId);
    },
    clearChats: (state) => {
      state.list = [];
    },
  },
});

export const { addToChats, removeFromChats, clearChats } = ChatsSlice.actions;

export default ChatsSlice.reducer;
