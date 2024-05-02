import { Button, Grid } from "@mui/material";
import { Book } from "../../types";
import {
  BookImg,
  CardDescription,
  CardTextContent,
  ItemBox,
  Text,
  Title,
} from "./BooksList.styled";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToCart, storageKey } from "../../redux/cart/cartSlice";

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
      const updatedBooksInCart = [...booksInCart, _id];
      localStorage.setItem(storageKey, JSON.stringify(updatedBooksInCart));

      console.log(_id);

      dispatch(addToCart(_id));
    }
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 6 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {booksData.map(
        ({ _id, author, title, book_image, description, price }) => (
          <Grid item xs={4} sm={4} md={3} key={_id}>
            <ItemBox>
              <BookImg src={book_image} alt={title} />
              <CardTextContent>
                <Title> {title}</Title>
                <Text>
                  <CardDescription>Author:</CardDescription> {author}
                </Text>
                <Text>
                  <CardDescription>Description:</CardDescription> {description}
                </Text>
                <Text>
                  <CardDescription>Price:</CardDescription> {price} $
                </Text>
              </CardTextContent>
              <Button
                variant="contained"
                endIcon={<AddShoppingCartOutlinedIcon />}
                onClick={() => handleAddToCart(_id)}
              >
                Add to cart
              </Button>
            </ItemBox>
          </Grid>
        )
      )}
    </Grid>
  );
};
