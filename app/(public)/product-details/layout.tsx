import Categories from "../products/Categories";
import css from "./layout.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={css.page}>
      <aside className={css.sidebar}>
        <Categories />
      </aside>
      <div className={css.content}>{children}</div>
    </section>
  );
}
