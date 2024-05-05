import { useSelector } from "react-redux";
import { selectBooks, selectIsLoading } from "../redux/books/selectors";
import { BooksList } from "../components/BooksList/BooksList";
import { Container } from "@mui/material";
import { Loader } from "../components/Loader";

const BooksPage = () => {
  const booksData = useSelector(selectBooks);

  const isLoading = useSelector(selectIsLoading);

  return (
    <Container style={{ marginTop: "110px", marginBottom: "100px" }}>
      {isLoading ? <Loader /> : <BooksList booksData={booksData} />}
    </Container>
  );
};

export default BooksPage;
