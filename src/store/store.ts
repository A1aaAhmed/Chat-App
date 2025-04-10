import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users-slice";
import contactsReducer from "./slices/contacts-slice";
import chatsReducer from "./slices/chats-slice";
import messagesReducer from "./slices/messages-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    contacts: contactsReducer,
    chats: chatsReducer,
    messages:messagesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
