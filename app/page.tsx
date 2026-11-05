import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Bienvenue</h1>

      <p>
        Consultez la liste des candidats et ajoutez de nouvelles candidatures.
      </p>

      <Link href="/candidats">
        Accéder à la gestion des candidats
      </Link>
    </section>
  );
}