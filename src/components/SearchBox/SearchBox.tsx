import { useState } from "react";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}
export default function SearchBox({ value, onChange }: SearchBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  //!======================================================
  // const [formValues, setFormValues] = useState({
  //   name: "Vasya",
  //   email: "email@gmail.com",
  // });
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputName = e.target.name;
  //   const value = e.target.value;
  //   setFormValues({ ...formValues, [inputName]: value });
  // };
  //!======================================================

  return (
    <input
      type="text"
      className={css.searchInput}
      value={value}
      onChange={handleChange}
    />
  );
}
