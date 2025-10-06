import axios from "axios";
import { useEffect, useState } from "react";

interface Character {
  name: string;
  height: number;
  mass: number;
}

export default function CharacterWidget() {
  const [count, setCount] = useState(1);
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    console.log("document.title");
    document.title = String(count);
  }, [count]);

  useEffect(() => {
    axios
      .get(`https://swapi.info/api/people/${count}`)
      .then((res) => setCharacter(res.data));
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </>
  );
}
