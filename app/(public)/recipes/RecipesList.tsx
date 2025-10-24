"use client";

import { searchRecipes } from "@/lib/recipes-service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import css from "./RecipesList.module.css";
import Link from "next/link";

export default function RecipesList() {
  const [query, setQuery] = useState("");

  const { data } = useQuery({
    queryKey: ["recipes", { query }],
    queryFn: () => searchRecipes(query.trim()),
  });

  const recipes = data?.recipes || [];
  const totalResults = data?.total ?? 0;
  const trimmedQuery = query.trim();
  const showEmptyState = recipes.length === 0;

  return (
    <section className={css.wrapper}>
      <form
        className={css.search}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className={css.label} htmlFor="recipe-search">
          Search recipes
        </label>
        <div className={css.inputBox}>
          <span className={css.inputIcon} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M12.5 12.5 16 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle
                cx="8"
                cy="8"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          <input
            className={css.input}
            id="recipe-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Try "pasta" or "thai"'
            autoComplete="off"
          />
          {trimmedQuery ? (
            <button
              className={css.clearButton}
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              ×
            </button>
          ) : null}
        </div>
        <p className={css.status} role="status" aria-live="polite">
          {trimmedQuery
            ? `${totalResults} recipe${totalResults === 1 ? "" : "s"} found`
            : `Showing featured recipes`}
        </p>
      </form>

      {showEmptyState ? (
        <p className={css.empty}>
          {trimmedQuery
            ? `No recipes matched “${trimmedQuery}”. Try another keyword or cuisine.`
            : "We could not load recipes at the moment. Please try again soon."}
        </p>
      ) : (
        <ul className={css.grid}>
          {recipes.map((recipe) => {
            const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

            return (
              <li className={css.card} key={recipe.id}>
                <Link href={`/recipes/${recipe.id}`}>
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
                          <dt>Ready in</dt>
                          <dd>{totalTime} mins</dd>
                        </div>
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
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
