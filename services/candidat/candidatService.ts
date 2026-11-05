/*
import { candidatApi } from "../../axios/serviceInstances";
import type { Candidat } from "../../types/candidat";

export async function obtenirCandidats(): Promise<Candidat[]> {
  const reponse = await candidatApi.get<Candidat[]>("/candidats");

  return reponse.data;
}
  */

import type { Candidat } from "../../types/candidat";

export function obtenirCandidats(): Candidat[] {
  return [
    {
      id: "1",
    
      nom: "Alami",
      prenom: "Sara",
      email: "sara@example.com",
    },
    {
      id: "2",
      nom: "Bennani",
      prenom: "Amine",
      email: "amine@example.com",
    },
  ];
}


