import { useState, useEffect } from "react";
// import Timer from "./Timer";
import Sidebar from "./Sidebar";
import CharacterWidget from "./CharacterWidget";

export default function App() {
  const [isOpen, setIsOpen] = useState(() => {
    const savedStatus = localStorage.getItem("sidebar-status");
    return savedStatus !== null ? JSON.parse(savedStatus) : false;
  });
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    console.log("localStorage.setItem");
    window.localStorage.setItem("sidebar-status", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <>
      <button onClick={open}>Open</button>
      {isOpen && <Sidebar onClose={close} />}
      <CharacterWidget />
      {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <Timer />} */}
    </>
  );
}
