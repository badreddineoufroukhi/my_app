import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#16324f",
        color: "white",
        padding: 20,
      }}
    >
      <h2>Gestion des candidatures</h2>

      <nav style={{ display: "flex", gap: 24 }}>
        <Link href="/" style={{ color: "white" }}>
          Accueil
        </Link>

        <Link href="/candidats" style={{ color: "white" }}>
          Candidats
        </Link>
      </nav>
    </header>
  );
}