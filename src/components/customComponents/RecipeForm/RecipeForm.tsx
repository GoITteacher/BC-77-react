import css from "./RecipeForm.module.css";

interface RecipeFormProps {
  onSubmit: (title: string) => void;
}

const RecipeForm = ({ onSubmit }: RecipeFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    onSubmit(title);
  };

  return (
    <form className={css["recipeForm"]} action={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Search recipes</button>
    </form>
  );
};

export default RecipeForm;
