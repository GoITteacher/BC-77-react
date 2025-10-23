"use client";

import Link from "next/link";
import css from "./layout.module.css";
type Props = {
  sidebar: React.ReactNode;
  page: React.ReactNode;
  content: React.ReactNode;
};

export default function Layout({ page, sidebar, content }: Props) {
  return (
    <div className={css["container"]}>
      <ul className={css["navigation"]}>
        <Link href="/dashboard/filters">Filters</Link>
        <Link href="/dashboard/folders">Folders</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </ul>

      <div className={css["content"]}>
        <div className={css["sidebar"]}>{sidebar}</div>
        <div className={css["sidebar"]}>{content}</div>
        <div className={css["page"]}>{page}</div>
      </div>
    </div>
  );
}

// dashboard/filters -> dashboard/@sidebar/filters/page.tsx + {children}
