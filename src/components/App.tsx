import { useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import css from "./App.module.css";
import Accordion from "./Accordion";
import { AccordionItem } from "../types/accordion";

const accordionItems: AccordionItem[] = [
  { title: "Section 1", content: "Content of section 1" },
  { title: "Section 2", content: "Content of section 2" },
  { title: "Section 3", content: "Content of section 3" },
  { title: "Section 4", content: "Content of section 4" },
  { title: "Section 5", content: "Content of section 5" },
];

interface Values {
  a: number;
  b: number;
  c: number;
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<Values>({
    a: 0,
    b: 0,
    c: 0,
  });

  const updateValues = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  const toggle = () => setIsOpen(!isOpen);

  const updateClicks = () => setClicks(clicks + 1);

  return (
    <>
      <Accordion items={accordionItems} />
      <hr />
      <CountDisplay count={clicks} />
      <ClickCounter value={clicks} onUpdate={updateClicks} />
      <ClickCounter value={clicks} onUpdate={updateClicks} />
      <ClickCounter value={clicks} onUpdate={updateClicks} />
      <hr />
      <button onClick={toggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>You can see me! 🐷</p>}
      <hr />
      <span className={css.badge} onClick={() => updateValues("a")}>
        A
      </span>
      <span className={css.badge} onClick={() => updateValues("b")}>
        B
      </span>
      <span className={css.badge} onClick={() => updateValues("c")}>
        C
      </span>
    </>
  );
}
