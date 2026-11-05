"use client";

import { useState } from "react";
import type { Candidat } from "../types/candidat";
import { obtenirCandidats } from "../services/candidat/candidatService";
import { nettoyerCandidat } from "../lib/utils";

function useCandidats() {
  const [candidats, setCandidats] = useState<Candidat[]>(obtenirCandidats);

  function ajouterCandidat(candidat: Candidat) {
    const candidatNettoye = nettoyerCandidat(candidat);

    setCandidats((liste) => [...liste, candidatNettoye]);
  }

  function supprimerCandidat(id: string) {
    setCandidats((liste) => liste.filter((candidat) => candidat.id !== id));
  }

  return {
    candidats,
    ajouterCandidat,
    supprimerCandidat,
  };
}

export default useCandidats;