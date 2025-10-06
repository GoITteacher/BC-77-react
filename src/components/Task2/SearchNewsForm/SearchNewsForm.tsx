import { useId } from "react";
import css from "./SearchNewsForm.module.css";

interface SearchNewsFormProps {
  onSearch: (query: string, page: string) => void;
}

const SearchNewsForm = ({ onSearch }: SearchNewsFormProps) => {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    const page = formData.get("page") as string;

    onSearch(query, page);
  };

  return (
    <form className={css["searchNewsForm"]} action={handleSubmit}>
      <label htmlFor={`${id}-query`}>Query</label>
      <input type="text" name="query" id={`${id}-query`} />

      <label htmlFor={`${id}-page`}>Page</label>
      <input type="number" name="page" id={`${id}-page`} min="0" />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchNewsForm;
