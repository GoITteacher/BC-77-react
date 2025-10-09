import { useState } from "react";
import RecipeForm from "../customComponents/RecipeForm/RecipeForm";
import css from "./Task1.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/recipesService";
import RecipeList from "../customComponents/RecipeList/RecipeList";
import ReactPaginate from "react-paginate";

const Task1 = () => {
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = (title: string) => {
    setTitle(title);
    setCurrentPage(1);
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["recipes", title, currentPage],
    queryFn: () => getRecipes(title, currentPage),
    placeholderData: keepPreviousData,
    // enabled: title !== "" && currentPage !== 0,
  });

  const totalPages = data?.totalPages ?? 0;

  return (
    <div className={css["container"]}>
      <h1>Recipes</h1>

      <RecipeForm onSubmit={handleSubmit} />

      {data && data.results.length && <RecipeList items={data.results} />}

      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          forcePage={currentPage - 1}
          pageRangeDisplayed={5}
          previousLabel="<"
          breakLabel="..."
          nextLabel=">"
          containerClassName={css["pagination"]}
          activeClassName={css["active"]}
          onPageChange={({ selected }) => {
            setCurrentPage(selected + 1);
          }}
        />
      )}
    </div>
  );
};

export default Task1;
