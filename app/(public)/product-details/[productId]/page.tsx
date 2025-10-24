import BackButton from "@/components/BackButton/BackButton";
import { getProductDetails } from "@/lib/products-service";
import css from "./page.module.css";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCategoryName = (value: string) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = await params;
  const product = await getProductDetails(productId);
  const categoryLabel = formatCategoryName(product.category);
  const price = currencyFormatter.format(product.price);
  const galleryImages = Array.from(
    new Set(product.images.filter((image) => image !== product.thumbnail))
  );

  return (
    <article className={css.wrapper}>
      <BackButton />
      <header className={css.header}>
        <span className={css.label}>{categoryLabel}</span>
        <h1 className={css.title}>{product.title}</h1>
      </header>

      <div className={css.body}>
        <div className={css.media}>
          <img
            className={css.thumbnail}
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
          />
          {galleryImages.length > 1 ? (
            <ul className={css.gallery}>
              {galleryImages.map((image) => (
                <li className={css.galleryItem} key={image}>
                  <img
                    className={css.galleryImage}
                    src={image}
                    alt={product.title}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <section className={css.details}>
          <p className={css.description}>{product.description}</p>
          <div className={css.meta}>
            <div className={css.metaBlock}>
              <span className={css.metaLabel}>Brand</span>
              <span className={css.metaValue}>{product.brand}</span>
            </div>
            <div className={css.metaBlock}>
              <span className={css.metaLabel}>SKU</span>
              <span className={css.metaValue}>{product.sku}</span>
            </div>
            <div className={css.metaBlock}>
              <span className={css.metaLabel}>Stock</span>
              <span className={css.metaValue}>{product.stock}</span>
            </div>
            <div className={css.metaBlock}>
              <span className={css.metaLabel}>Rating</span>
              <span className={`${css.metaValue} ${css.rating}`}>
                {product.rating}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="m12 3.8 1.9 4 4.4.6-3.2 3.1.8 4.3L12 14l-3.9 2.1.8-4.3-3.2-3.1 4.4-.6L12 3.8Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>

          <footer className={css.footer}>
            <span className={css.price}>{price}</span>
            <span className={css.stock}>
              {product.discountPercentage
                ? `Save ${product.discountPercentage}% today`
                : "Ready to ship"}
            </span>
          </footer>
        </section>
      </div>
    </article>
  );
}
