import { useEffect, useState } from "react";
// import Timer from "./Timer";
// import Sidebar from "./Sidebar";
import Modal from "./Modal/Modal";
import Pokemons from "./Pokemons/Pokemons";
// import CharacterWidget from "./CharacterWidget";

export default function App() {
  const [isVisible, setIsVisible] = useState(() => {
    const data = localStorage.getItem("sidebarStatus") || "false";
    console.log(data);
    return JSON.parse(data);
  });

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    localStorage.setItem("sidebarStatus", JSON.stringify(isVisible));
  }, [isVisible]);

  return (
    <>
      <Pokemons />
      {/* <CharacterWidget /> */}

      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle Timer</button>
      {isVisible && <Timer />} */}

      {/* <button onClick={() => setIsVisible(!isVisible)}>Open</button> */}
      {/* {isVisible && <Sidebar onClose={handleClose} />} */}
      {/* 
      {isVisible && (
        <Modal onClose={handleClose}>
          <h1>Hello modal</h1>
        </Modal>
      )} */}
    </>
  );
}
