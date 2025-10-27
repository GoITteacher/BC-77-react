import Link from "next/link";
import styles from "./page.module.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  // title: "Home Page from page.tsx",
  // description: "Home Page for youtube.com",
  // openGraph: {
  //   title: "Youtube",
  //   description: "Home page Youtube",
  //   url: "http://localhost:3000",
  //   siteName: "Youtube",
  //   images: [
  //     {
  //       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrvhs-Kqr0q0_n9Rv_c-x3mv81-kYWyDGhw&s",
  //       width: "550",
  //       height: "664",
  //       alt: "Cat",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Home page for Twitter",
  //   description: "Home page for Twitter",
  //   images: [
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrvhs-Kqr0q0_n9Rv_c-x3mv81-kYWyDGhw&s",
  //   ],
  // },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>Next.js Playground</span>
        <h1 className={styles.title}>
          Discover beautiful products at a glance
        </h1>

        <Image
          src="https://cdn.pixabay.com/photo/2025/08/21/09/51/rouen-cathedral-9787080_1280.jpg"
          alt="Cat"
          width={1200}
          height={1200}
        />

        <p className={styles.subtitle}>
          Browse curated categories, inspect detailed descriptions, and learn
          how TanStack Query keeps everything snappy.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} href="/products/beauty">
            Explore products
          </Link>
          <a
            className={styles.secondaryAction}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            Next.js docs
          </a>
        </div>
      </section>

      <section className={styles.quickStart}>
        <h2 className={styles.sectionTitle}>Quick start guide</h2>
        <ol className={styles.stepList}>
          <li className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <h3>Edit the home page</h3>
              <p>
                Get started by editing <code>app/page.tsx</code> to make it your
                own experience.
              </p>
            </div>
          </li>
          <li className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <h3>See changes instantly</h3>
              <p>
                Save your updates and the dev server will refresh the UI to show
                the latest tweaks.
              </p>
            </div>
          </li>
          <li className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <h3>Preview product flows</h3>
              <p>
                Navigate between categories and product details to experience
                the styled layout.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
