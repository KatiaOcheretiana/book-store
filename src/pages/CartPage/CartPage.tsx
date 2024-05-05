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

const CartPage = () => {
  const booksInCart = useSelector(selectCartBooks);

  const totalPrice = useSelector(selectTotalPrice);

  const isLoading = useSelector(selectIsLoading);

  return (
    <Container style={{ marginTop: "80px", marginBottom: "100px" }}>
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
            <PriceText>TOTAL: {totalPrice} $</PriceText>
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
