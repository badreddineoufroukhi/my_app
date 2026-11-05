import type { Candidat } from "../types/candidat";

export function nettoyerCandidat(candidat: Candidat): Candidat {
  return {
    ...candidat,
    nom: candidat.nom.trim(),
    prenom: candidat.prenom.trim(),
    email: candidat.email.trim().toLowerCase(),
  };
}