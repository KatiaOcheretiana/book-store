import { useSelector } from "react-redux";
import {
  selectCartBooks,
  selectIsLoading,
  selectTotalPrice,
} from "../../redux/cart/selectors";
import { Container, Grid } from "@mui/material";
import { CartList } from "../../components/CartList/CartList";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { LinkBack, PriceText } from "./CartPage.styled";
import { UserForm } from "../../components/UserForm/UserForm";
import { Loader } from "../../components/Loader";
import {
  selectCurrentCarrencyValue,
  selectSymbolCurrency,
} from "../../redux/currency/selectors";

const CartPage = () => {
  const booksInCart = useSelector(selectCartBooks);

  const totalPrice = useSelector(selectTotalPrice);

  const isLoading = useSelector(selectIsLoading);

  const currencySymbol = useSelector(selectSymbolCurrency);

  const carrencyValue = useSelector(selectCurrentCarrencyValue);
  const priceByCurrency = Math.round(totalPrice * carrencyValue);

  return (
    <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
      <LinkBack to={"/"}>
        <ArrowBackIosNewIcon color="primary" fontSize="small" />
        <p> Go back</p>
      </LinkBack>

      {isLoading && <Loader />}

      {totalPrice !== 0 ? (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap="40px"
        >
          <Grid item>
            <CartList booksData={booksInCart} />
            <PriceText>
              TOTAL: {priceByCurrency} {currencySymbol}
            </PriceText>
          </Grid>
          <UserForm />
        </Grid>
      ) : (
        <p>Cart is empty, please go back to choose some books 😊</p>
      )}
    </Container>
  );
};

export default CartPage;
