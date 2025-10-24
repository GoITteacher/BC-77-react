import { getCategoryList } from "@/lib/products-service";
import Link from "next/link";
import css from "./Categories.module.css";

const formatLabel = (value: string) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default async function Categories() {
  // await new Promise((res) => setTimeout(res, 5000));
  const categories = await getCategoryList();

  return (
    <nav className={css.container} aria-label="Product categories">
      <h2 className={css.title}>Categories</h2>
      <ul className={css.list}>
        {categories.map((el) => {
          return (
            <li className={css.item} key={el}>
              <Link href={`/products/${el}`} className={css.link}>
                {formatLabel(el)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
