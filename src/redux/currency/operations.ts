import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrencyValue = createAsyncThunk(
  "carrency/getCurrencyValue",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://api.currencybeacon.com/v1/latest?api_key=UPXYdYwPPFZ6guIeJmeS9hvG2A2sxmXR"
      );

      const { UAH, PLN, EUR, USD } = data.data.response.rates;

      const filteredData = {
        UAH,
        PLN,
        EUR,
        USD,
      };

      return filteredData;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
