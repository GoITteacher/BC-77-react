import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>We misplaced that page</h1>
      <p className={styles.description}>
        The content you are looking for has drifted off. Let&apos;s guide you
        back to something inspiring.
      </p>
      <Link className={styles.action} href="/">
        Return home
      </Link>
    </section>
  );
}
