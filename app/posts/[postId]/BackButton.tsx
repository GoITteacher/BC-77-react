"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/posts");
  };
  return <button onClick={handleClick}>Back to posts</button>;
}
