import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMessagesAPI, fetchAllMessagesAPI } from "./messagesAPI"; 
import { IMessage, UserLastMessage } from "../../shared/types";

// Fetch messages for a specific contact
export const fetchMessages = createAsyncThunk<IMessage[], string>(
  "messages/fetchMessages",
  async (contactId: string) => {
    const data = await fetchMessagesAPI(contactId);
    return data;
  }
);

// Fetch all messages for the user
export const fetchAllMessages = createAsyncThunk<UserLastMessage[]>(
  "messages/fetchAllMessages",
  async (): Promise<UserLastMessage[]> => {
    const messages: UserLastMessage[] = await fetchAllMessagesAPI();
    return messages;
  }
);
