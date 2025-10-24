import css from "./page.module.css";

export default function Page() {
  return (
    <section className={css.wrapper}>
      <div className={css.hero}>
        <span className={css.eyebrow}>Catalog 1</span>
        <h1 className={css.title}>
          Discover curated products crafted for everyday brilliance
        </h1>
        <p className={css.subtitle}>
          Select a category from the left to reveal carefully sourced picks.
          Each collection offers focused, high-quality essentials designed to
          make daily routines smoother and more inspiring.
        </p>
        <p className={css.cta}>Choose a category to begin</p>
      </div>
    </section>
  );
}
