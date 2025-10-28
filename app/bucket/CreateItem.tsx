"use client";

import { selectAddItems, useBucketStore } from "@/stores/bucketStore";

const CreateItem = () => {
  const itemTitle = useBucketStore((s) => s.itemTitle);
  const itemPrice = useBucketStore((s) => s.itemPrice);
  const itemAmount = useBucketStore((s) => s.itemAmount);

  const setTitle = useBucketStore((s) => s.setTitle);
  const setPrice = useBucketStore((s) => s.setPrice);
  const setAmount = useBucketStore((s) => s.setAmount);
  const clearItem = useBucketStore((s) => s.clearItem);

  const addItem = useBucketStore(selectAddItems);

  const handleSubmit = (formData: FormData) => {
    const id = Date.now().toString();
    const title = formData.get("title") as string;
    const price = Number(formData.get("price"));
    const amount = Number(formData.get("amount"));

    const item = { id, title, price, amount };

    addItem(item);
    clearItem();
  };
  return (
    <form action={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        value={itemTitle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        required
        value={itemPrice}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        required
        value={itemAmount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button type="submit">Create Item</button>
    </form>
  );
};

export default CreateItem;
