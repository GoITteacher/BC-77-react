import styles from "./page.module.css";
import Lang from "@/components/Lang/Lang";

export default function Home() {
  return (
    <div className={styles.page}>
      <Lang />
      <main>
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
