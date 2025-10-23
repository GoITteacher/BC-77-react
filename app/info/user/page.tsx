"use client";

import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <div>
      <button onClick={handleClick}>Back to Info</button>
      User Info
    </div>
  );
}
