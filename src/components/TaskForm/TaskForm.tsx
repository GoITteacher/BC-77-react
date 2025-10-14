import css from "./TaskForm.module.css";

export default function TaskForm() {
  const isPending = false;
  return (
    <form className={css.form}>
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
