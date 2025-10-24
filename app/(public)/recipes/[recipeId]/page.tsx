import BackButton from "@/components/BackButton/BackButton";
import css from "./page.module.css";
import { getRecipeDetails } from "@/lib/recipes-service";

type Props = {
  params: Promise<{ recipeId: string }>;
};

export default async function Page({ params }: Props) {
  const { recipeId } = await params;

  const recipe = await getRecipeDetails(recipeId);

  return (
    <div>
      <BackButton />
      <article className={css.cardInner}>
        <div className={css.imageWrapper}>
          <img
            className={css.image}
            src={recipe.image}
            alt={recipe.name}
            loading="lazy"
          />
          <span className={css.badge}>{recipe.difficulty}</span>
        </div>
        <div className={css.content}>
          <h3 className={css.name}>{recipe.name}</h3>
          <p className={css.summary}>
            {recipe.cuisine} · Serves {recipe.servings}
          </p>
          <dl className={css.meta}>
            <div className={css.metaItem}>
              <dt>Prep</dt>
              <dd>{recipe.prepTimeMinutes} mins</dd>
            </div>
            <div className={css.metaItem}>
              <dt>Cook</dt>
              <dd>{recipe.cookTimeMinutes} mins</dd>
            </div>
          </dl>
          <div className={css.footer}>
            <span className={css.rating}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="m12 3.8 1.9 4 4.4.6-3.2 3.1.8 4.3L12 14l-3.9 2.1.8-4.3-3.2-3.1 4.4-.6L12 3.8Z"
                  fill="currentColor"
                />
              </svg>
              {recipe.rating.toFixed(1)} ({recipe.reviewCount})
            </span>
            <span className={css.cta} aria-hidden="true">
              View recipe →
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
