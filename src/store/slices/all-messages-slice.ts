import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMessages } from "../services/messagesThunks";
import { UserLastMessage } from "../../shared/types";


interface IMessagesState {
  list: UserLastMessage[];
}

const initialState: IMessagesState = {
  list: [],
};

const messagesSlice = createSlice({
  name: "allMessages",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMessages.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default messagesSlice.reducer;
