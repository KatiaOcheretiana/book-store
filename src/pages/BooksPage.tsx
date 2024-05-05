import { useSelector } from "react-redux";
import { selectBooks } from "../redux/books/selectors";
import { BooksList } from "../components/BooksList/BooksList";
import { Container } from "@mui/material";

const BooksPage = () => {
  const booksData = useSelector(selectBooks);

  return (
    <Container style={{ marginTop: "110px", marginBottom: "100px" }}>
      <BooksList booksData={booksData} />
    </Container>
  );
};

export default BooksPage;
