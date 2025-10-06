
import css from "./ArticleList.module.css";


export default function ArticleList() {
  return (
    <ol className={css.list}>
      {[].map((item) => (
        
        // <li key={item.objectID}>
        //   <a className={css.link} href={item.url}>
        //     {item.title}
        //   </a>
        // </li>
      ))}
    </ol>
  );
}
