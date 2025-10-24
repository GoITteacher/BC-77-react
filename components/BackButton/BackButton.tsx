"use client";

import { useRouter } from "next/navigation";
import css from "./BackButton.module.css";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={css.button} onClick={handleClick} type="button">
      <span className={css.icon} aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          focusable="false"
          aria-hidden="true"
        >
          <path
            d="M9.5 4 6 8l3.5 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Back
    </button>
  );
}
