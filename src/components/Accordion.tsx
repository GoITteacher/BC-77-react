import { useState } from "react";
import { AccordionItem } from "../types/accordion";

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const changeIdx = (arrIdx: number) => {
    setActiveIdx(activeIdx === arrIdx ? null : arrIdx);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => changeIdx(index)}>{item.title}</button>
          {activeIdx === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
