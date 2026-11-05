"use client";

export type Candidat = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
};

type Props = {
  candidats: Candidat[];
  onSupprimer: (id: string) => void;
};

export default function CandidatTable({
  candidats,
  onSupprimer,
}: Props) {
  if (candidats.length === 0) {
    return <p>Aucun candidat enregistré.</p>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ background: "#e8eef5" }}>
            <th style={{ padding: 12 }}>Nom</th>
            <th style={{ padding: 12 }}>Prénom</th>
            <th style={{ padding: 12 }}>Email</th>
            <th style={{ padding: 12 }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {candidats.map((candidat) => (
            <tr
              key={candidat.id}
              style={{ borderBottom: "1px solid #ddd" }}
            >
              <td style={{ padding: 12 }}>{candidat.nom}</td>
              <td style={{ padding: 12 }}>{candidat.prenom}</td>
              <td style={{ padding: 12 }}>{candidat.email}</td>

              <td style={{ padding: 12 }}>
                <button
                  type="button"
                  onClick={() => onSupprimer(candidat.id)}
                  style={{ color: "#b91c1c", cursor: "pointer" }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}