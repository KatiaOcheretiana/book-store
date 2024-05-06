import { Button, Grid } from "@mui/material";
import { Book } from "../../types";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaceAmount } from "../../redux/cart/cartSlice";
import { BookDetails } from "../BookDetails/BookDetails";
import { selectCartBooks } from "../../redux/cart/selectors";

type BooksListPropsType = {
  booksData: Book[];
};

export const BooksList = ({ booksData }: BooksListPropsType) => {
  const dispatch = useDispatch();

  const booksInCart = useSelector(selectCartBooks);

  const handleAddToCart = (_id: string) => {
    const existingBook = booksInCart.find((book) => book._id === _id);

    if (existingBook) {
      dispatch(increaceAmount(_id));
    } else {
      dispatch(addToCart(_id));
    }
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 6 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {booksData.map((book) => (
        <Grid item xs={4} sm={4} md={3} key={book._id}>
          <BookDetails book={book}>
            <Button
              variant="contained"
              endIcon={<AddShoppingCartOutlinedIcon />}
              onClick={() => handleAddToCart(book._id)}
            >
              Buy/add
            </Button>
          </BookDetails>
        </Grid>
      ))}
    </Grid>
  );
};
