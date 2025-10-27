import { Roboto_Mono, Montserrat } from "next/font/google";
import AppHeader from "@/components/AppHeader/AppHeader";
import TanStackProvider from "@/components/TanStackProvider";
import "./globals.css";
import styles from "./layout.module.css";
import { Metadata } from "next";

const robotoFont = Roboto_Mono({
  variable: "--roboto-font",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserratFont = Montserrat({
  variable: "--montserrat-font",
  subsets: ["cyrillic"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Home Page from Layout",
  description: "Descrption for Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanStackProvider>
        <body className={`${robotoFont.variable} ${montserratFont.variable}`}>
          <div className={styles.shell}>
            <AppHeader />
            <main className={styles.content}>{children}</main>
          </div>
        </body>
      </TanStackProvider>
    </html>
  );
}
