//https://swapi.info/api/people/${count}

import axios from "axios";
import { useEffect, useState } from "react";

interface Character {
  name: string;
  height: string;
  mass: string;
}
// mount (getCharacter) -> unmount -> mount (getCharacter);

export default function CharacterWidget() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [counter, setCounter] = useState(1);

  // useEffect(() => {
  //   console.log("Вітаємо вас!");
  // }, []);

  // useEffect(() => {
  //   console.log("З днем народження");
  // }, [age]);

  // useEffect(() => {
  //   console.log("Яка ти гарненька!");
  // }, [age, hairColor]);

  // useEffect(() => {
  //   console.log("Create Interval");

  //   const intervalId = setInterval(() => {
  //     console.log("HELLO", Date.now());
  //   }, 1000);

  //   return () => {
  //     console.log("Clear Interval");
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("add");

  //   const handleKeyPress = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("keypress", handleKeyPress);

  //   return () => {
  //     console.log("remove");

  //     window.removeEventListener("keypress", handleKeyPress);
  //   };
  // }, []);

  //!======================================================

  useEffect(() => {
    const getCharacter = async () => {
      const url = `https://swapi.info/api/people/${counter}`;
      const res = await axios.get<Character>(url);
      setCharacter(res.data);
    };

    getCharacter();
  }, [counter]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Count ({counter})</button>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </>
  );
}
