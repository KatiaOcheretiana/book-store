import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCurrencyValues = (state: RootState): any =>
  state.currency.currency;

export const selectChosenCurrency = (state: RootState): any =>
  state.currency.choosenCurrency;

export const selectSymbolCurrency = createSelector(
  [selectChosenCurrency],
  (item) => {
    switch (item) {
      case "UAH":
        return "грн";
      case "USD":
        return "$";
      case "PLN":
        return "złoty";
      case "EUR":
        return "€";
      default:
        return "";
    }
  }
);

export const selectCurrentCarrencyValue = createSelector(
  [selectChosenCurrency, selectCurrencyValues],
  (currency, value) => {
    const result = value[currency];
    return result;
  }
);
