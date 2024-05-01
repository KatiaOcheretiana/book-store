export interface Book {
  _id: string;
  author: string;
  book_image: string;
  description: string;
  price: string;
  title: string;
}

export interface BooksState {
  books: Book[] | [];
  isLoading: boolean;
  error: string | null;
}