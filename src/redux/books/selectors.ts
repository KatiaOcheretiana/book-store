import { Book } from "../../types";
import { RootState } from "../store";

type BooksResultType = [] | Book[];

export const selectBooks = (state: RootState): BooksResultType =>
  state.books.books;
