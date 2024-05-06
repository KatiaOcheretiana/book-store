import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectChosenCurrency } from "../../redux/currency/selectors";
import { changeCurrency } from "../../redux/currency/carrencySlice";

export const CurrencySelector = () => {
  const choosenCarrency = useSelector(selectChosenCurrency);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeCurrency(event.target.value as string));
  };

  return (
    <FormControl size="small">
      <InputLabel id="demo-simple-select-label" color="secondary">
        Currency
      </InputLabel>
      <Select value={choosenCarrency} label="Currency" onChange={handleChange}>
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"PLN"}>PLN</MenuItem>
        <MenuItem value={"EUR"}>EUR</MenuItem>
        <MenuItem value={"UAH"}>UAH</MenuItem>
      </Select>
    </FormControl>
  );
};
