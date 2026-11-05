"use client";

import CandidatForm from "../../components/CandidatForm";
import CandidatTable from "../../components/CandidatTable";
import useCandidats from "../../hooks/useCandidats";

export default function CandidatsPage() {

  const {
    candidats,
    ajouterCandidat,
    supprimerCandidat,
  } = useCandidats();

  return (
    <section>
      <h1>Gestion des candidats</h1>

      <h2>Ajouter un candidat</h2>
      <CandidatForm onAjouter={ajouterCandidat} />

      <h2>Liste des candidats ({candidats.length})</h2>
      <CandidatTable candidats={candidats} onSupprimer={supprimerCandidat} />
    </section>
  );
}
