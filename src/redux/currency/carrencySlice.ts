import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCurrencyValue } from "./operations";
import { CurrencyType } from "../../types";

const storageKey = "carrency";

const getInitialCurrency = () => {
  const currency = localStorage.getItem(storageKey);
  return currency !== null ? JSON.parse(currency) : "USD";
};

type CurrencySliceType = {
  currency: {} | CurrencyType;
  base: string;
  choosenCurrency: string;
  isLoading: boolean;
  error: string | null;
};

const initialState: CurrencySliceType = {
  currency: {},
  base: "USD",
  choosenCurrency: getInitialCurrency(),
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "carrency",
  initialState,
  reducers: {
    changeCurrency: (
      state: Draft<CurrencySliceType>,
      action: PayloadAction<string>
    ) => {
      state.choosenCurrency = action.payload;
      localStorage.setItem(storageKey, JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencyValue.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(
        getCurrencyValue.fulfilled,
        (
          state: Draft<CurrencySliceType>,
          action: PayloadAction<CurrencyType>
        ) => {
          state.currency = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )

      .addCase(
        getCurrencyValue.rejected,
        (state: Draft<CurrencySliceType>, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const currencyReducer = currencySlice.reducer;
export const { changeCurrency } = currencySlice.actions;
