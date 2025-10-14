import { useState } from "react";

import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import css from "./App.module.css";
import TaskList from "../TaskList/TaskList";
import { useModal } from "../../hooks/useModal";
import { useTasks } from "../../hooks/useTasks";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, openModal, closeModal] = useModal();
  const { data } = useTasks(searchValue);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox value={searchValue} onChange={setSearchValue} />
        <SortFilter />
        <button className={css.createButton} onClick={() => openModal()}>
          Create task
        </button>
      </header>

      {data && data.length && <TaskList tasks={data} />}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
}
