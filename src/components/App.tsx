import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
// import { fetchPerson } from "../services/swapiService";
import SearchForm from "./SearchForm";
import { fetchArticles } from "../services/articleService";
import ArticleList from "./ArticleList";
import css from "./App.module.css";

export default function App() {
  // const [count, setCount] = useState(1);

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["character", count],
  //   queryFn: () => fetchPerson(count),

  // });

  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articles", topic, currentPage],
    queryFn: () => fetchArticles(topic, currentPage),
    enabled: topic !== "",
    placeholderData: keepPreviousData,
  });

  const handleSearch = (newTopic: string) => {
    setTopic(newTopic);
    setCurrentPage(1);
  };

  const changePage = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const totalPages = data?.nbPages ?? 0;

  return (
    <>
      <SearchForm onSubmit={handleSearch} />

      {isSuccess && totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={changePage}
          forcePage={currentPage - 1}
          nextLabel=">"
          previousLabel="<"
          containerClassName={css.pagination}
          activeClassName={css.active}
        />
      )}

      {isLoading && <p>Loading data...</p>}
      {isError && <p>There was an error!!!!!</p>}
      {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
      <hr />

      {/* <button onClick={() => setCount(count + 1)}>
        Fetch next character with ID: {count}
      </button>
      {isLoading && <p>Loading data...</p>}
      {isError && <p>There was an error!!!!!</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </>
  );
}
