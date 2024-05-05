import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, push, ref, set } from "firebase/database";

export const orderBooks = createAsyncThunk(
  "cartBooks/orderBooks",
  async (data, thunkAPI) => {
    try {
      const db = getDatabase();
      const postListRef = ref(db, "orders");
      const newPostRef = push(postListRef);
      set(newPostRef, data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
