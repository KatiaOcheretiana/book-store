import { useSelector } from "react-redux";
import { selectCartBooks } from "../redux/cart/selectors";
import { Container } from "@mui/material";
import { CartList } from "../components/CartList/CartList";

const CartPage = () => {
  const booksInCart = useSelector(selectCartBooks);

  return (
    <Container style={{ marginTop: "110px", marginBottom: "100px" }}>
      <CartList booksData={booksInCart} />

      <h3>Total:</h3>
    </Container>
  );
};

export default CartPage;
