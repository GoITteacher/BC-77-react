import css from "./TaskForm.module.css";

interface TaskFormProps {
  onSuccess: (title: string) => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const isLoading = false;

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("text") as string;
    onSuccess(title);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>
      <button type="submit" className={css.button}>
        {isLoading ? "Creating new task..." : "Create"}
      </button>
    </form>
  );
}
