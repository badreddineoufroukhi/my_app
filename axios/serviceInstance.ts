import { creerInstanceApi } from "./axiosInstance";

// API de gestion des candidats
export const candidatApi = creerInstanceApi(
  "http://localhost:8080/api"
);

// API de gestion des concours
export const concoursApi = creerInstanceApi(
  "http://localhost:8081/api"
);

// Pour ajouter un autre microservice, ajoute une instance :

export const juryApi = creerInstanceApi(
    "http://localhost:8082/api"
  );