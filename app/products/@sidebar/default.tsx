import Link from "next/link";
import { fetchCategories } from "@/lib/products-api";
import styles from "./Sidebar.module.css";

export default async function SidebarSlot() {
  const categories = await fetchCategories();

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.heading}>Categories</h2>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              className={styles.link}
              href={`/products/${category.slug}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
