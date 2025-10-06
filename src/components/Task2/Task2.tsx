import { useState } from "react";
import ArticleList from "./ArticleList/ArticleList";
import SearchNewsForm from "./SearchNewsForm/SearchNewsForm";
import css from "./Task2.module.css";
import { NewsArticle } from "../../types/newsArtilce";
import { searchArticles } from "../../services/newsService";

const Task2 = () => {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query: string, page: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const res = await searchArticles(query, page);
      setItems(res.articles);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css["task2"]}>
      <SearchNewsForm onSearch={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Ups... Error!</p>}

      <ArticleList items={items} />
    </div>
  );
};

export default Task2;
