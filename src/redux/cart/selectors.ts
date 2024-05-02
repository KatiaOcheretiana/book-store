import { RootState } from "../store";

export const selectCartBooks = (state: RootState) => state.cart.idCartBooks;
