import { keepPreviousData, useQuery } from "@tanstack/react-query";

import css from "./Task2.module.css";
import { useState } from "react";
import { getProducts } from "../../services/productService";
import ProductList from "../customComponents/ProductList/ProductList";
import { Pagination } from "antd";
import SearchForm from "../customComponents/SearchForm/SearchForm";

const PER_PAGE = 9;

const Task2 = () => {
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = (query: string) => {
    setTitle(query);
  };

  const { data } = useQuery({
    queryKey: ["products", title, currentPage],
    queryFn: () => getProducts(title, currentPage),
    placeholderData: keepPreviousData,
  });

  const totalPage = data?.totalPages ?? 0;
  const totalResult = totalPage * PER_PAGE;

  return (
    <div className={css["container"]}>
      <h1>Product List</h1>

      <SearchForm onSubmit={handleSubmit} />

      {data && data.results.length && <ProductList items={data.results} />}

      <Pagination
        onChange={(page: number) => {
          setCurrentPage(page);
        }}
        total={totalResult}
        pageSize={PER_PAGE}
        showTitle={true}
        disabled={totalPage <= 10}
      />
    </div>
  );
};

export default Task2;
