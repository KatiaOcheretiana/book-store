import { Button, Grid } from "@mui/material";
import { Book } from "../../types";
import { BookDetails } from "../BookDetails/BookDetails";
import { useDispatch } from "react-redux";
// import {
//   selectCartBooks,
//   selectCartBooksIdAmound,
// } from "../../redux/cart/selectors";
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

  // const info = useSelector(selectCartBooksIdAmound);

  // console.log(info);

  // const selectCartBookss = useSelector(selectCartBooks);

  // console.log(selectCartBookss);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={5}
    >
      {booksData.map((book) => (
        <Grid item key={book._id}>
          <BookDetails book={book} isCart>
            <Grid
              width="350px"
              columnGap="10px"
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
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
