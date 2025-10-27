import { fetchProductById } from "@/lib/products-api";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { productId } = await params;
  const product = await fetchProductById(Number(productId));

  return {
    title: `${product.title}`,
    description: `${product.description}`,
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { productId } = await params;
  const product = await fetchProductById(Number(productId));
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <article className={styles.card}>
      <div className={styles.media}></div>
      <div className={styles.details}>
        <p className={styles.kicker}>Product details</p>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.meta}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>Price</span>
            <span className={styles.priceValue}>{formattedPrice}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
