import { useState } from "react";
import { getArticles } from "../../services/articleService";
import css from "./Task1.module.css";
import { Article } from "../../types/article";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

const Task1 = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(import.meta.env.VITE_TEST_MESSAGE);

  const handleSearch = async (topic: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      setArticles([]);
      const articles = await getArticles(topic);
      setArticles(articles);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={css["task1"]}>
      <SearchForm onSearch={handleSearch} />
      <ArticleList items={articles} />
      {isLoading && <strong>Loading articles...</strong>}
      {isError && <strong>Something went wrong pleasy try again...</strong>}
    </div>
  );
};

export default Task1;
