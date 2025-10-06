import type { Task } from "../../types/task";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { useUpdateTask } from "../../hooks/useUpdateTask";
import css from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const deleteTaskMutation = useDeleteTask();
  const updateTaskMutation = useUpdateTask();

  const handleUpdate = (task: Task) => {
    updateTaskMutation.mutate({
      id: task.id,
      completed: !task.completed,
    });
  };

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={() => handleUpdate(task)}
            className={css.checkbox}
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteTaskMutation.mutate(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
