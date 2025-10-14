import { useState } from "react";

import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import css from "./App.module.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox />
        <SortFilter />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
}
