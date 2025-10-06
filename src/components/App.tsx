import { useState } from "react";
import OrderForm from "./OrderForm/OrderForm";

export default function App() {
  const [data, setData] = useState("Hello");
  return (
    <>
      <p>{data}</p>
      <OrderForm />
    </>
  );
}
