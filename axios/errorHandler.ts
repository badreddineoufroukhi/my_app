import axios from "axios";

export function obtenirMessageErreur(erreur: unknown): string {
  if (axios.isAxiosError(erreur)) {
    if (erreur.code === "ECONNABORTED") {
      return "Le serveur met trop de temps à répondre.";
    }

    if (!erreur.response) {
      return "Impossible de contacter le serveur.";
    }

    switch (erreur.response.status) {
      case 400:
        return "Les informations envoyées sont incorrectes.";
      case 401:
        return "Vous devez vous connecter.";
      case 403:
        return "Vous n’avez pas accès à cette action.";
      case 404:
        return "La ressource demandée est introuvable.";
      case 500:
        return "Une erreur est survenue sur le serveur.";
      default:
        return "La requête a échoué.";
    }
  }

  return "Une erreur inattendue est survenue.";
}