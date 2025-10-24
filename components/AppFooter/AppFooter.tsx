import Link from "next/link";
import css from "./AppFooter.module.css";

const currentYear = new Date().getFullYear();

export default function AppFooter() {
  return (
    <footer className={css.footer}>
      <div className={css.inner}>
        <p className={css.tagline}>Build. Learn. Iterate.</p>
        <div className={css.meta}>
          <span className={css.year}>© {currentYear}</span>
          <span className={css.divider} aria-hidden="true">
            |
          </span>
          <Link href="/info" className={css.link}>
            Info
          </Link>
          <Link href="/store" className={css.link}>
            Store
          </Link>
        </div>
      </div>
    </footer>
  );
}
