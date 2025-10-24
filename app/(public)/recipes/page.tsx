import { searchRecipes } from "@/lib/recipes-service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import RecipesList from "./RecipesList";
import css from "./page.module.css";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipes", { query: "" }],
    queryFn: () => searchRecipes(""),
  });

  return (
    <section className={css.page}>
      <header className={css.hero}>
        <span className={css.eyebrow}>Chef&apos;s picks</span>
        <h1 className={css.title}>
          Explore recipes tailored to your taste and time
        </h1>
        <p className={css.subtitle}>
          Search across cuisines, difficulty levels, and prep times to find the
          perfect dish. Save favorites or revisit classics with ease.
        </p>
      </header>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className={css.listArea}>
          <RecipesList />
        </div>
      </HydrationBoundary>
    </section>
  );
}
