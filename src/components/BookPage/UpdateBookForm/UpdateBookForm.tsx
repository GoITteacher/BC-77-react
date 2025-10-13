import { Book, UpdatedBook } from "../../../types/book";
import css from "./UpdateBookForm.module.css";

interface UpdateBookFormProps {
  book: Book;
  onSubmit: (book: UpdatedBook) => void;
}

const UpdateBookForm = ({ book, onSubmit }: UpdateBookFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const pages = Number(formData.get("pages"));
    const createdAt = formData.get("createdAt") as string;

    const bookData = {
      id: book.id,
      title,
      author,
      description,
      price,
      pages,
      createdAt,
    };

    onSubmit(bookData);
  };

  return (
    <form className={css["updateBookForm"]} action={handleSubmit}>
      <input type="text" name="title" placeholder={book.title} />
      <input type="text" name="author" placeholder={book.author} />
      <textarea name="description" placeholder={book.description}></textarea>
      <input type="number" name="price" placeholder={book.price.toString()} />
      <input type="number" name="pages" placeholder={book.pages.toString()} />
      <input type="date" name="createdAt" />
      <button>Update</button>
    </form>
  );
};

export default UpdateBookForm;
