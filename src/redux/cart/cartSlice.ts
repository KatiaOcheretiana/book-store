import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { orderBooks } from "./operations";

export const storageKey = "cart";

type CartBooksType = {
  _id: string;
  amount: number;
};

type CartSliceType = {
  cartBooks: CartBooksType[];
};

const getInitialCart = (): CartBooksType[] => {
  const cartBooks = localStorage.getItem(storageKey);
  return cartBooks !== null ? JSON.parse(cartBooks) : [];
};

const initialState: CartSliceType = {
  cartBooks: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: Draft<CartSliceType>, action: PayloadAction<string>) => {
      state.cartBooks.push({ _id: action.payload, amount: 1 });
    },
    deleteFromCart: (
      state: Draft<CartSliceType>,
      action: PayloadAction<string>
    ) => {
      state.cartBooks = state.cartBooks.filter(
        (book) => book._id !== action.payload
      );
    },
    increaceAmount: (
      state: Draft<CartSliceType>,
      action: PayloadAction<string>
    ) => {
      state.cartBooks = state.cartBooks.map((book) =>
        book._id === action.payload
          ? { ...book, amount: book.amount + 1 }
          : book
      );
    },
    decreaceAmount: (
      state: Draft<CartSliceType>,
      action: PayloadAction<string>
    ) => {
      state.cartBooks = state.cartBooks.map((book) =>
        book._id === action.payload
          ? { ...book, amount: book.amount - 1 }
          : book
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(orderBooks.fulfilled, (state: Draft<CartSliceType>) => {
      state.cartBooks = [];
      localStorage.clear();
      alert("The order will be saved in Firebase. The JSON watch in console");
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart, increaceAmount, decreaceAmount } =
  cartSlice.actions;
