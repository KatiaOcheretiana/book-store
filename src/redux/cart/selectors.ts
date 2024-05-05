import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { selectBooks } from "../books/selectors";
import { Book } from "../../types";

export const selectCartBooksIdAmound = (state: RootState) =>
  state.cart.cartBooks;

export const selectCartBooks = createSelector(
  [selectBooks, selectCartBooksIdAmound],
  (books, cartBooks) => {
    const result = books.map((book) => {
      const cartBook = cartBooks.find(
        (cartBook: { _id: string }) => cartBook._id === book._id
      );
      return cartBook ? { ...book, amount: cartBook.amount } : null;
    });

    return result.filter((book) => book !== null) as Book[];
  }
);
