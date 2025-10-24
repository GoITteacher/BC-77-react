"use client";

import css from "./loading.module.css";

export default function Loading() {
  return (
    <div className={css.loading} role="status" aria-live="polite">
      <span className={css.spinner} aria-hidden="true" />
      <p className={css.text}>Loading recipes…</p>
    </div>
  );
}
