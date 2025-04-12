import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./users-slice";

interface IContactsState {
  list: IUser["id"][];
}

const initialState: IContactsState = {
  list: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addToContacts: (state, action) => {
      const userId = action.payload;
      if (!(state.list.findIndex((item) => item === userId) > -1)) {
        state.list.push(userId);
      }
    },
    removeFromContacts: (state, action) => {
      const userId = action.payload;
      state.list = state.list.filter((item) => item !== userId);
    },
    clearContacts: (state) => {
      state.list = [];
    },
  },
});

export const { addToContacts, removeFromContacts, clearContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
