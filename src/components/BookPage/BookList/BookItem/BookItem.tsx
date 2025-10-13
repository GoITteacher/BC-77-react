import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Book, UpdatedBook } from "../../../../types/book";
import css from "./BookItem.module.css";
import { deleteBook, updateBook } from "../../../../services/bookService";
import Modal from "../../../Modal/Modal";
import UpdateBookForm from "../../UpdateBookForm/UpdateBookForm";
import { useState } from "react";

const BookItem = ({ book }: { book: Book }) => {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { mutate } = useMutation({
    mutationFn: (id: string) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const handleDelete = () => {
    mutate(book.id);
  };

  const updateBookMutation = useMutation({
    mutationFn: (data: UpdatedBook) => updateBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      closeModal();
    },
  });

  const handleSubmit = (book: UpdatedBook) => {
    updateBookMutation.mutate(book);
  };

  return (
    <>
      <div className={css["bookItem"]}>
        <div>
          <h5>{book.title}</h5>
          <p>{book.author}</p>
        </div>

        <p>{book.description}</p>

        <div>
          <p>{book.price}</p>
          <p>{book.pages}</p>
        </div>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={openModal}>Edit</button>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <UpdateBookForm book={book} onSubmit={handleSubmit} />
        </Modal>
      )}
    </>
  );
};

export default BookItem;
