import { useSelector } from "react-redux";
import { Book } from "../../types";
import {
  BookImg,
  CardDescription,
  CardTextContent,
  ItemBox,
  Text,
  Title,
} from "./BookDetails.styled";
import {
  selectCurrentCarrencyValue,
  selectSymbolCurrency,
} from "../../redux/currency/selectors";

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
  const currencySymbol = useSelector(selectSymbolCurrency);

  const carrencyValue = useSelector(selectCurrentCarrencyValue);

  const priceByCurrency = Math.round(Number(price) * carrencyValue);

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
          <CardDescription>Price:</CardDescription> {priceByCurrency}{" "}
          {currencySymbol}
        </Text>
      </CardTextContent>
      {children}
    </ItemBox>
  );
};
