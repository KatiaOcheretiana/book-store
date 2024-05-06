import { useSelector } from "react-redux";
import { selectCartBooks, selectTotalPrice } from "../../redux/cart/selectors";
import { Container, Grid } from "@mui/material";
import { CartList } from "../../components/CartList/CartList";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { LinkBack, PriceText } from "./CartPage.styled";
import { UserForm } from "../../components/UserForm/UserForm";
import {
  selectCurrentCarrencyValue,
  selectSymbolCurrency,
} from "../../redux/currency/selectors";
import styled from "styled-components";

const GridForm = styled(Grid)`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 320px;
  }
`;

const GridContentCart = styled(Grid)`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 800px;
  }
`;

const CartPage = () => {
  const booksInCart = useSelector(selectCartBooks);

  const totalPrice = useSelector(selectTotalPrice);

  const currencySymbol = useSelector(selectSymbolCurrency);

  const carrencyValue = useSelector(selectCurrentCarrencyValue);
  const priceByCurrency = Math.round(totalPrice * carrencyValue);

  return (
    <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
      <LinkBack to={"/"}>
        <ArrowBackIosNewIcon color="primary" fontSize="small" />
        <p> Go back</p>
      </LinkBack>

      {totalPrice !== 0 ? (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap="30px"
        >
          <GridContentCart item>
            <CartList booksData={booksInCart} />
            <PriceText>
              TOTAL: {priceByCurrency} {currencySymbol}
            </PriceText>
          </GridContentCart>
          <GridForm item>
            <UserForm />
          </GridForm>
        </Grid>
      ) : (
        <p>Cart is empty, please go back to choose some books 😊</p>
      )}
    </Container>
  );
};

export default CartPage;
