"use client";

import { useState, type FormEvent } from "react";
import type { Candidat } from "./CandidatTable";

type Props = {
  onAjouter: (candidat: Candidat) => void;
};

export default function CandidatForm({ onAjouter }: Props) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!nom.trim() || !prenom.trim() || !email.trim()) {
      return;
    }

    onAjouter({
      id: crypto.randomUUID(),
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim(),
    });

    setNom("");
    setPrenom("");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: 12,
        maxWidth: 450,
        marginBottom: 32,
      }}
    >
      <label htmlFor="nom">Nom</label>
      <input
        id="nom"
        value={nom}
        onChange={(event) => setNom(event.target.value)}
        required
        style={{ padding: 10 }}
      />

      <label htmlFor="prenom">Prénom</label>
      <input
        id="prenom"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
        required
        style={{ padding: 10 }}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        style={{ padding: 10 }}
      />

      <button
        type="submit"
        style={{
          padding: 12,
          background: "#16324f",
          color: "white",
          border: 0,
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Ajouter le candidat
      </button>
    </form>
  );
}