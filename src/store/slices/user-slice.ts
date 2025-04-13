import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../shared/types";
import { fetchUser } from "../services/userThunks";  // Import the async thunk

const initialState: IUser = {
  id: "",
  name: "",
  email: '',
  phone: '',
  bio: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phone = action.payload.phone;     
        state.bio = action.payload.bio;
        state.userImg = action.payload.userImg;
      })

  },
});

export default userSlice.reducer;
