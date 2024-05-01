import { Book } from "../../types";

type BooksResultType = [] | Book[];

export const selectBooks = (state: any): BooksResultType => state.books.books;
