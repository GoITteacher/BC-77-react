import { Recipe } from "../../../types/recipe";
import css from "./RecipeList.module.css";

const RecipeList = ({ items }: { items: Recipe[] }) => {
  return (
    <ul className={css.recipeList}>
      {items.map((el) => (
        <li key={el._id} className={css.recipeItem}>
          <article className={css.recipeCard}>
            <div className={css.previewWrapper}>
              <img
                src={el.preview}
                alt={el.title}
                className={css.previewImage}
              />
            </div>

            <div className={css.recipeContent}>
              <h3 className={css.recipeTitle}>{el.title}</h3>
              <p className={css.recipeArea}>🌍 {el.area}</p>
              <p className={css.recipeDescription}>{el.description}</p>

              <div className={css.recipeActions}>
                <a
                  href={el.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.youtubeLink}
                >
                  🎥 Watch on YouTube
                </a>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
