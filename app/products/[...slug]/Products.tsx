"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "@/lib/products-api";
import styles from "./Products.module.css";

export default function Products() {
  const { slug } = useParams<{ slug: string[] }>();
  const category = slug[0];

  const readableCategory = category.replace(/-/g, " ");

  const { data: products } = useQuery({
    queryKey: ["products", { category }],
    queryFn: () => fetchProductsByCategory(category),
    refetchOnMount: false,
  });

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p className={styles.kicker}>Category spotlight</p>
        <h1 className={styles.title}>{readableCategory}</h1>
        <p className={styles.description}>
          Select a product to reveal rich details and imagery powered by
          TanStack Query.
        </p>
      </header>
      <ul className={styles.list}>
        {products?.map((product) => (
          <li key={product.id} className={styles.card}>
            <Link className={styles.cardLink} href={`/product-details/${product.id}`}>
              <span className={styles.cardTitle}>{product.title}</span>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
