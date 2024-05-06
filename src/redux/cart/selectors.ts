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

export const selectTotalPrice = createSelector([selectCartBooks], (books) => {
  const totalPrice = books.reduce((acc: number, item: Book) => {
    if (typeof item.amount === "number" && typeof item.price === "string") {
      acc += item.amount * parseFloat(item.price);
    }
    return acc;
  }, 0);

  return totalPrice;
});
