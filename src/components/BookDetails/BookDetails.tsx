import { Book } from "../../types";
import {
  BookImg,
  CardDescription,
  CardTextContent,
  ItemBox,
  Text,
  Title,
} from "./BookDetails.styled";

type BookDetailsPropsType = {
  children: React.ReactNode;
  book: Book;
  isCart?: boolean;
};

export const BookDetails = ({
  book,
  children,
  isCart,
}: BookDetailsPropsType) => {
  const { author, book_image, description, price, title } = book;

  return (
    <ItemBox isCart={isCart}>
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
      {children}
    </ItemBox>
  );
};
