import { useSelector } from "react-redux";
import { selectCartBooks } from "../redux/cart/selectors";
import { Container } from "@mui/material";
import { selectBooks } from "../redux/books/selectors";

const CartPage = () => {
  const booksIdCart = useSelector(selectCartBooks);
  // console.log(booksIdCart);

  const books = useSelector(selectBooks);

  // console.log(books);

  const booksInCart = books.filter((book) => booksIdCart.includes(book._id));

  console.log(booksInCart);

  return <Container>{/* <p>{booksInCart}</p> */}</Container>;
};

export default CartPage;
