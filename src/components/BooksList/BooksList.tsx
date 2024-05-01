import { Grid } from "@mui/material";
import { Book } from "../../types";

type BooksListPropsType = {
  booksData: Book[];
};

export const BooksList = ({ booksData }: BooksListPropsType) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 8 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {booksData.map(
        ({ _id, author, title, book_image, description, price }) => (
          <Grid item xs={4} sm={4} md={3} key={_id}>
            <img src={book_image} alt={title} />
            <h3> {title}</h3>
            <p>Author: {author}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <button>Order</button>
          </Grid>
        )
      )}
    </Grid>
  );
};
