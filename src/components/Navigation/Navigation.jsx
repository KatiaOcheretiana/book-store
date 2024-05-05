import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { StyledLink } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../redux/cart/selectors";

export const Navigation = () => {
  const totalPrice = useSelector(selectTotalPrice);

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
            width={"140px"}
            justifyContent="flex-end"
            gap={"20px"}
            alignItems="center"
          >
            {totalPrice !== 0 && (
              <Box>
                {" "}
                <Typography variant="body1">Total price:</Typography>
                <Typography variant="body1" color="secondary">
                  {totalPrice} $
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
