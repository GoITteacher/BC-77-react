import { useCreateTask } from "../../hooks/useCreateTask";
import css from "./TaskForm.module.css";

interface TaskFormProps {
  onSuccess: () => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const { mutate, isPending } = useCreateTask(onSuccess);

  const handleSubmit = (formData: FormData) => {
    mutate({
      text: formData.get("text") as string,
    });
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        {isPending ? "Creating new task..." : "Create"}
      </button>
    </form>
  );
}
