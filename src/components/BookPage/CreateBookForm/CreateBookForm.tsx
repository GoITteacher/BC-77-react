import { CreatedBook } from "../../../types/book";
import css from "./CreateBookForm.module.css";

interface CreateBookFormProps {
  onSubmit: (data: CreatedBook) => void;
}

const CreateBookForm = ({ onSubmit }: CreateBookFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const pages = Number(formData.get("pages"));
    const createdAt = formData.get("createdAt") as string;
    const bookData = { title, author, description, price, pages, createdAt };
    onSubmit(bookData);
  };

  return (
    <form className={css["createBookForm"]} action={handleSubmit}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <textarea name="description" placeholder="Description"></textarea>
      <input type="number" name="price" placeholder="Price" />
      <input type="number" name="pages" placeholder="Pages" />
      <input type="date" name="createdAt" placeholder="Created At" />
      <button>Create</button>
    </form>
  );
};

export default CreateBookForm;
