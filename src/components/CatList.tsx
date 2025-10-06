import CatProfile from "./CatProfile";
import { Cat } from "../types/cat";

interface CatListProps {
  cats: Cat[];
}

export default function CatList({ cats }: CatListProps) {
  return (
    <ul>
      {cats.map((cat, index) => (
        <li key={index}>
          <CatProfile info={cat} />
        </li>
      ))}
    </ul>
  );
}
