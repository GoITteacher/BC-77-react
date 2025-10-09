import css from "./ProductList.module.css";
import { Product } from "../../../types/product";

interface ProductListProps {
  items: Product[];
}

const ProductList = ({ items }: ProductListProps) => {
  return (
    <ul className={css.container}>
      {items.map((el) => (
        <li key={el._id} className={css.item}>
          <article className={css.card}>
            <div className={css.imageWrapper}>
              <img
                src={el.img}
                alt={el.name}
                className={css.image}
                loading="lazy"
              />
            </div>

            <div className={css.content}>
              <h3 className={css.name}>{el.name}</h3>
              <p className={css.category}>🗂 {el.category}</p>
              <p className={css.size}>📏 Size: {el.size}</p>

              <div className={css.infoRow}>
                <span className={css.price}>💰 {el.price} ₴</span>
                <span className={css.popularity}>⭐ {el.popularity}</span>
              </div>

              <button type="button" className={css.addBtn}>
                ➕ Додати в кошик
              </button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
