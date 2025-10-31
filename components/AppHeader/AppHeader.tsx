"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { useAuthStore } from "@/store/userStore";

export default function AppHeader() {
  const isAuth = useAuthStore((s) => s.isAuth);
  const clearIsAuth = useAuthStore((s) => s.clearIsAuth);
  const router = useRouter();

  const handleLogout = async () => {
    logout();
    clearIsAuth();
    router.push("/sign-in");
  };

  return (
    <header className={css.header}>
      <ul style={{ display: "flex", gap: 8 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>

      {isAuth && (
        <div style={{ display: "flex", gap: 8 }}>
          <ProfileInfo />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!isAuth && (
        <ul style={{ display: "flex", gap: 8 }}>
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
