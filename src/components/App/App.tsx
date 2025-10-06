import { useState } from "react";
import { useDebounce } from "use-debounce";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import { useTasks } from "../../hooks/useTasks";
import css from "./App.module.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [debouncedQuery] = useDebounce(searchQuery, 300);

  const { data, isLoading } = useTasks(debouncedQuery);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox value={searchQuery} onSearch={setSearchQuery} />
        <SortFilter />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
}
