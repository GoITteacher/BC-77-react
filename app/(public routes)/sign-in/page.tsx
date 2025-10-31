"use client";

import { ApiError } from "@/app/api/api";
import { login } from "@/lib/auth";
import { useAuthStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("email") as string;
    try {
      const res = await login({ email, password });

      if (res) {
        setUser(res);
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form action={handleSubmit}>
        <input type="email" name="email" placeholder="test@gmail.com" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
