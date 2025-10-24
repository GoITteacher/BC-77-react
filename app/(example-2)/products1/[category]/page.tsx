import { getProductByCategory } from "@/lib/products-service";
import Link from "next/link";
import css from "./page.module.css";

interface ProductListProps {
  params: Promise<{ category: string }>;
}

const formatCategoryName = (value: string) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default async function ProductList({ params }: ProductListProps) {
  await new Promise((res) => setTimeout(res, 5000));

  const { category } = await params;
  const { products } = await getProductByCategory(category);
  const categoryLabel = formatCategoryName(category);

  return (
    <section className={css.wrapper}>
      <header className={css.heading}>
        <span className={css.eyebrow}>Collection</span>
        <h1 className={css.title}>{categoryLabel}</h1>
      </header>
      <ul className={css.grid}>
        {products.map((el) => {
          return (
            <li className={css.card} key={el.id}>
              <Link href={`/product-details/${el.id}`} className={css.link}>
                <h2 className={css.productTitle}>{el.title}</h2>
                <p className={css.productMeta}>{categoryLabel}</p>
                <span className={css.cta}>
                  View details
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M5.5 3.5 10 8l-4.5 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
