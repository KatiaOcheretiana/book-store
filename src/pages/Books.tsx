import { useSelector } from "react-redux";
import { selectBooks } from "../redux/books/selectors";
import { BooksList } from "../components/BooksList/BooksList";
import { Container } from "@mui/material";

const Books = () => {
  const booksData = useSelector(selectBooks);

  console.log(booksData);

  return (
    <Container>
      <BooksList booksData={booksData} />
    </Container>
  );
};

export default Books;
