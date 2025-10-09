import css from "./Example.module.css";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { fetchArticles } from "../../services/articleService";
import ArticleList from "./ArticleList";
import ReactPaginate from "react-paginate";
const Example = () => {
  //!======================================================
  // const [counter, setCounter] = useState(1);
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["getCharacter", counter],
  //   queryFn: () => fetchPerson(counter),
  // retry: 5,
  // retryDelay: 5000,
  // refetchOnMount: false,
  // refetchOnReconnect: true,
  // refetchOnWindowFocus: true,
  // placeholderData: keepPreviousData,
  // });
  //!======================================================

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = (topic: string) => {
    setTopic(topic);
    setPage(1);
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articles", topic, page],
    queryFn: () => fetchArticles(topic, page),
    enabled: topic !== "",
    retry: false,
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.nbPages ?? 0;

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      {isSuccess && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          previousLabel="<"
          breakLabel="..."
          nextLabel=">"
          onPageChange={({ selected }) => {
            setPage(selected + 1);
          }}
          forcePage={page - 1}
          containerClassName={css["pagination"]}
          activeClassName={css.active}
        />
      )}
      {data && data.hits.length && <ArticleList items={data.hits} />}

      {isError && <p>There was an error!!!</p>}
      {isLoading && <p>Loading data...</p>}

      {/* //!====================================================== */}
      {/* <button onClick={() => setCounter(counter + 1)}>
        Load Next Person {counter}
      </button>

      {isError && <p>There was an error!!!</p>}
      {isLoading && <p>Loading data...</p>}
      {data && !isError && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </>
  );
};

export default Example;
