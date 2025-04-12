import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../shared/types";
import { fetchUserAPI } from "./userAPI";

export const fetchUser = createAsyncThunk<IUser, string>(
  "user/fetchUser",
  async (userId: string): Promise<IUser> => {
    try {
      const user: IUser = await fetchUserAPI(userId);
      console.log(user, "user from thunk");  // Ensure this is logged after the API call resolves
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;  // Make sure to handle errors
    }
  }
);
