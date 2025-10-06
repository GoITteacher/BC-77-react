import { Article } from "../../../types/article";
import css from "./ArticleList.module.css";

interface ArticleListProps {
  items: Article[];
}
export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ol className={css.list}>
      {items.map((item) => (
        <li key={item.objectID}>
          <a className={css.link} href={item.url}>
            {item.title} ({item.author})
          </a>
        </li>
      ))}
    </ol>
  );
}
