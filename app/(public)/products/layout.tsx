import { Suspense } from "react";
import Categories from "./Categories";
import css from "./layout.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={css.page}>
      <aside className={css.sidebar}>
        <Suspense fallback={<div>Loading Categories</div>}>
          <Categories />
        </Suspense>
      </aside>
      <div className={css.content}>{children}</div>
    </section>
  );
}
