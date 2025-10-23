"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Info() {
  const router = useRouter();

  const handleClick = () => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (isAdmin) {
      router.push("/info/user");
    }
  };

  return (
    <div>
      <h1>GLOBAL INFO PAGE</h1>
    </div>
  );
}
