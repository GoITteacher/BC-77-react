import { Input } from "antd";
import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (query: string) => void;
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    console.log(title);
    onSubmit(title);
  };

  return (
    <form className={css["form"]} action={handleSubmit}>
      <input type="text" name="title" />

      {/* <Input placeholder="Basic usage" name="title" /> */}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
