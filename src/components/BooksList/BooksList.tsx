import { Button, Grid } from "@mui/material";
import { Book } from "../../types";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToCart, storageKey } from "../../redux/cart/cartSlice";
import { BookDetails } from "../BookDetails/BookDetails";

type BooksListPropsType = {
  booksData: Book[];
};

export const BooksList = ({ booksData }: BooksListPropsType) => {
  const dispatch = useDispatch();

  const handleAddToCart = (_id: string) => {
    const booksInCartString = localStorage.getItem(storageKey);
    const booksInCart: string[] = booksInCartString
      ? JSON.parse(booksInCartString)
      : [];

    const isBookInCart = booksInCart.includes(_id);

    if (isBookInCart) {
      console.log("already in cart");
    } else {
      const updatedBooksInCart = [...booksInCart, { _id, amount: 1 }];
      localStorage.setItem(storageKey, JSON.stringify(updatedBooksInCart));

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
              Add to cart
            </Button>
          </BookDetails>
        </Grid>
      ))}
    </Grid>
  );
};
