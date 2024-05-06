import { Button, Grid } from "@mui/material";
import { Book } from "../../types";
import { BookDetails } from "../BookDetails/BookDetails";
import { useDispatch } from "react-redux";
import {
  decreaceAmount,
  deleteFromCart,
  increaceAmount,
} from "../../redux/cart/cartSlice";

type CartListPropsType = {
  booksData: Book[];
};

export const CartList = ({ booksData }: CartListPropsType) => {
  const dispatch = useDispatch();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 2, md: 5 }}
      columns={{ xs: 2, sm: 8 }}
    >
      {booksData.map((book) => (
        <Grid item key={book._id}>
          <BookDetails book={book} isCart>
            <Grid
              width="310px"
              columnGap="10px"
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  if (book.amount === 1) {
                    dispatch(deleteFromCart(book._id));
                  } else {
                    dispatch(decreaceAmount(book._id));
                  }
                }}
              >
                -
              </Button>
              <p>{book.amount}</p>
              <Button
                variant="contained"
                size="small"
                onClick={() => dispatch(increaceAmount(book._id))}
              >
                +
              </Button>
            </Grid>
          </BookDetails>
        </Grid>
      ))}
    </Grid>
  );
};
