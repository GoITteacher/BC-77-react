import Link from "next/link";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/info">Info</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
      </ul>
      <hr />
    </header>
  );
}
