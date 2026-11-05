import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "../components/Header";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Gestion des candidatures",
  description: "Application de gestion des candidats",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <Header />

        <main style={{ maxWidth: 1000, margin: "auto", padding: 24 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
