import { getTodos } from "@/lib/todos-service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TodoList from "./TodoList";
import css from "./page.module.css";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", { userId: "" }],
    queryFn: () => getTodos(""),
  });

  return (
    <section className={css.page}>
      <div className={css.hero}>
        <span className={css.eyebrow}>Task Board</span>
        <h1 className={css.title}>Track what matters today</h1>
        <p className={css.subtitle}>
          Stay on top of your daily commitments with a clean, at-a-glance list
          of everything that needs attention. Completed items stay visible so
          you can celebrate progress.
        </p>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className={css.listArea}>
          <TodoList />
        </div>
      </HydrationBoundary>
    </section>
  );
}
