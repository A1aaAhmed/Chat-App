import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMessagesAPI } from "./messagesAPI";
import { IMessage } from "../../shared/types";

export const fetchMessages = createAsyncThunk<IMessage[]>(
  "messages/fetchMessages",
  async () => {
    const data = await fetchMessagesAPI();
    return data;
  }
);
