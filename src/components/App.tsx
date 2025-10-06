import AppBar from "./AppBar/AppBar";
import CatList from "./CatList";
import catData from "../cats.json";
import { Cat } from "../types/cat";

const allCats: Cat[] = catData;

const takenCats: Cat[] = allCats.filter((cat) => cat.taken);

export default function App() {
  return (
    <>
      <AppBar />
      <CatList cats={allCats} />

      <h2>Taken cats</h2>
      <CatList cats={takenCats} />
    </>
  );
}
