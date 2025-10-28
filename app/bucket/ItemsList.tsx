"use client";

import {
  selectItems,
  selectRemoveItems,
  useBucketStore,
} from "@/stores/bucketStore";

const ItemsList = () => {
  const items = useBucketStore(selectItems);
  const removeItem = useBucketStore(selectRemoveItems);

  return (
    <ul>
      {items.map((el) => {
        return (
          <li
            key={el.id}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              borderRadius: "10px",
              maxWidth: "300px",
              padding: "20px",
              margin: "10px",
              listStyleType: "none",
            }}
          >
            <p>Title: {el.title}</p>
            <p>Amount: {el.amount}</p>
            <p>Price: {el.price}</p>
            <button onClick={() => removeItem(el.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
