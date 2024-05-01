import { AppBar, Grid, Toolbar } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { StyledLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <StyledLink to="/" color="textLayout">
              Book shop
            </StyledLink>
          </Grid>
          <Grid item>
            <StyledLink to="/basket">
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
