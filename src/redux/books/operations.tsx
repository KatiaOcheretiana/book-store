import { createAsyncThunk } from "@reduxjs/toolkit";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, "books");
      return new Promise((resolve) => {
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          resolve(data);
        });
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
