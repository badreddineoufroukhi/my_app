import axios from "axios";
import { obtenirMessageErreur } from "./errorHandler";

export function creerInstanceApi(baseURL: string) {
  const instance = axios.create({
    baseURL,
    timeout: 10000, // Attendre au maximum 10 secondes
    headers: {
      Accept: "application/json",
    },
  });

  instance.interceptors.response.use(
    (reponse) => reponse,

    (erreur: unknown) => {
      console.error(obtenirMessageErreur(erreur));

      // Transmettre l’erreur au code qui a lancé la requête
      return Promise.reject(erreur);
    }
  );

  return instance;
}