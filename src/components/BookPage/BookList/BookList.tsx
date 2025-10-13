import { Book } from "../../../types/book";
import BookItem from "./BookItem/BookItem";
import css from "./BookList.module.css";

interface BookListProps {
  items: Book[];
}
const BookList = ({ items }: BookListProps) => {
  return (
    <div className={css["bookList"]}>
      <ul>
        {items.map((book) => {
          return (
            <li key={book.id}>
              <BookItem book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
