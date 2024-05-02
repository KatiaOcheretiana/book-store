import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export const storageKey = "cart";

const getInitialCart = () => {
  const cartBooks = localStorage.getItem(storageKey);
  return cartBooks !== null ? JSON.parse(cartBooks) : [];
};

type cartSliceType = { idCartBooks: string[] | [] };

const initialState: cartSliceType = {
  idCartBooks: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: Draft<cartSliceType>, action: PayloadAction<string>) => {
      state.idCartBooks = [...state.idCartBooks, action.payload];
    },
    deleteFromCart: (
      state: Draft<cartSliceType>,
      action: PayloadAction<string>
    ) => {
      state.idCartBooks = state.idCartBooks.filter(
        (book) => book !== action.payload
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
