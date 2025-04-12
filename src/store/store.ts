import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users-slice";
import userReducer from "./slices/user-slice"; 
import contactsReducer from "./slices/contacts-slice";
import chatsReducer from "./slices/chats-slice";
import messagesReducer from "./slices/messages-slice";
import allMessagesReducer from "./slices/all-messages-slice";  

export const store = configureStore({
  reducer: {
    user: userReducer, // Corrected to match the slice name
    users: usersReducer,
    contacts: contactsReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    allMessages: allMessagesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
