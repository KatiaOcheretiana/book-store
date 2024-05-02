import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getBooks } from "./operations";
import { BooksState } from "../../types";

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(
        getBooks.fulfilled,
        (state: Draft<BooksState>, action: PayloadAction<any>) => {
          state.books = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )

      .addCase(
        getBooks.rejected,
        (state: Draft<BooksState>, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload as string | null;
        }
      );
  },
});

export const booksReducer = booksSlice.reducer;
