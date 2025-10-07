/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 * time.toLocaleTimeString()
 */

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("ADD INTERVAL");

    const id = setInterval(() => {
      console.log("SET NEW TIME");
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Clear Interval");

      clearInterval(id);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
