import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { addTask, getTasks } from "../../services/taskService";
import css from "./App.module.css";
import { NewTaskData, Task } from "../../types/task";
import BookPage from "../BookPage/BookPage";
import Checkout from "../Checkout/Checkout";

export default function App() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const createTaskMutation = useMutation({
    mutationFn: (task: NewTaskData) => addTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (title: string) => {
    closeModal();
    createTaskMutation.mutate({ text: title });
  };

  return (
    <div className={css.container}>
      <Checkout />
      <BookPage />
      {/* <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={handleSubmit} />
        </Modal>
      )} */}
    </div>
  );
}
