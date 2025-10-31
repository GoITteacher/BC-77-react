"use client";

import { register } from "@/lib/auth";

export default function SignUp() {
  const handleSubmit = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("email") as string;
    register({ email, password });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form action={handleSubmit}>
        <input type="email" name="email" placeholder="test@gmail.com" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
