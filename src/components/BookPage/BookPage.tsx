import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import BookList from "./BookList/BookList";
import css from "./BookPage.module.css";
import CreateBookForm from "./CreateBookForm/CreateBookForm";
import { createBook, getBooks } from "../../services/bookService";
import { CreatedBook } from "../../types/book";

const BookPage = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });

  const createBookMutation = useMutation({
    mutationFn: (bookData: CreatedBook) => createBook(bookData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const handleSubmit = (data: CreatedBook) => {
    createBookMutation.mutate(data);
  };

  return (
    <div className={css["bookPage"]}>
      <CreateBookForm onSubmit={handleSubmit} />
      {isLoading && <p>Loading books ...</p>}
      {data?.length && <BookList items={data} />}
    </div>
  );
};

export default BookPage;
