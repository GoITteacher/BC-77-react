import { Cat } from "../types/cat";

interface CatProfileProps {
  info: Cat;
}

export default function CatProfile({
  info: { name, phone, email, image, taken },
}: CatProfileProps) {
  return (
    <div>
      <img src={image} alt={name} width="200" />
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Taken: {taken ? "+" : "-"}</p>
    </div>
  );
}
