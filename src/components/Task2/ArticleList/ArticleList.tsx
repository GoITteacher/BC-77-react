import { NewsArticle } from "../../../types/newsArtilce";
import css from "./ArticleList.module.css";

interface ArticleListProps {
  items: NewsArticle[];
}

const ArticleList = ({ items }: ArticleListProps) => {
  return (
    <section className={css.articleList}>
      <ul className={css.grid}>
        {items.map((item, idx) => {
          const key = item.url ? `${item.url}-${idx}` : idx;

          return (
            <li key={key} className={css.card}>
              <article className={css.article}>
                <div className={css.media}>
                  {item.urlToImage ? (
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className={css.placeholder} aria-hidden="true">
                      No image
                    </div>
                  )}
                </div>

                <div className={css.content}>
                  <h3 className={css.title}>{item.title}</h3>

                  {item.description && (
                    <p className={css.description}>{item.description}</p>
                  )}

                  <footer className={css.footer}>
                    {item.author && (
                      <span className={css.author}>{item.author}</span>
                    )}

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={css.link}
                    >
                      Read full story
                    </a>
                  </footer>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;
