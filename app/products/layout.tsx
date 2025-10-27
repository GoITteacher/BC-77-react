import { Suspense } from "react";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Test Products",
};
export default function ProductsLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <Suspense
        fallback={<div className={styles.fallback}>Loading categories...</div>}
      >
        {sidebar}
      </Suspense>
      <div>{children}</div>
    </div>
  );
}
