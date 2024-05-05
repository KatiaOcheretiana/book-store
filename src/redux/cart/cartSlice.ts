import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export const storageKey = "cart";

type CartBooksType = {
  _id: string;
  amount: number;
};

type cartSliceType = { cartBooks: CartBooksType[] };

const getInitialCart = (): CartBooksType[] => {
  const cartBooks = localStorage.getItem(storageKey);
  return cartBooks !== null ? JSON.parse(cartBooks) : [];
};

const initialState: cartSliceType = {
  cartBooks: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: Draft<cartSliceType>, action: PayloadAction<string>) => {
      state.cartBooks.push({ _id: action.payload, amount: 1 });
    },
    deleteFromCart: (
      state: Draft<cartSliceType>,
      action: PayloadAction<string>
    ) => {
      state.cartBooks = state.cartBooks.filter(
        (book) => book._id !== action.payload
      );
    },
    increaceAmount: (
      state: Draft<cartSliceType>,
      action: PayloadAction<string>
    ) => {
      state.cartBooks = state.cartBooks.map((book) =>
        book._id === action.payload
          ? { ...book, amount: book.amount + 1 }
          : book
      );
    },
    decreaceAmount: (
      state: Draft<cartSliceType>,
      action: PayloadAction<string>
    ) => {
      state.cartBooks = state.cartBooks.map((book) =>
        book._id === action.payload
          ? { ...book, amount: book.amount - 1 }
          : book
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart, increaceAmount, decreaceAmount } =
  cartSlice.actions;
