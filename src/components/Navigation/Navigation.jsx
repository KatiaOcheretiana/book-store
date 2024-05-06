import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { StyledLink } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../redux/cart/selectors";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import {
  selectCurrentCarrencyValue,
  selectSymbolCurrency,
} from "../../redux/currency/selectors";

export const Navigation = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const currencySymbol = useSelector(selectSymbolCurrency);

  const carrencyValue = useSelector(selectCurrentCarrencyValue);
  const priceByCurrency = Math.round(totalPrice * carrencyValue);

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <StyledLink to="/" color="textLayout">
              Book shop
            </StyledLink>
          </Grid>

          <Grid
            container
            width={"240px"}
            justifyContent="flex-end"
            gap={"20px"}
            alignItems="center"
          >
            <CurrencySelector />
            {totalPrice !== 0 && (
              <Box>
                {" "}
                <Typography variant="body1">Total price:</Typography>
                <Typography variant="body1" color="secondary">
                  {priceByCurrency} {currencySymbol}
                </Typography>
              </Box>
            )}
            <StyledLink to="/cart">
              <AddShoppingCartOutlinedIcon
                color="textLayout"
                fontSize="medium"
              />
            </StyledLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
