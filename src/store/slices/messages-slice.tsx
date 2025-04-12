import { createSlice } from "@reduxjs/toolkit";
import { fetchMessages } from "../services/messagesThunks";
import { IMessage } from "../../shared/types";


interface IMessagesState {
  list: IMessage[];
}

const initialState: IMessagesState = {
  list: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.list.push(action.payload);
    },
    clearMessages: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { addMessage, clearMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
