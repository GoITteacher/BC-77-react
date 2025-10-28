import CreateItem from "./CreateItem";
import ItemsList from "./ItemsList";

export default function Page() {
  return (
    <div>
      <h1>Bucket</h1>
      <CreateItem />
      <ItemsList />
    </div>
  );
}
