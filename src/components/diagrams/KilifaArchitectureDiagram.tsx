/* Architecture globale simplifiée de la plateforme multi-agents IA Kilifa. */
export default function KilifaArchitectureDiagram({ color = "#7c3aed" }: { color?: string }) {
  const box = { fill: "#ffffff", stroke: "#e2e8f0" };
  const label = { fill: "#0f172a", fontWeight: 700 as const };
  const sub = { fill: "#64748b", fontWeight: 500 as const };

  return (
    <svg viewBox="0 0 760 590" width="100%" height="auto" role="img" aria-label="Architecture globale de la plateforme Kilifa" style={{ maxWidth: "100%" }}>
      <defs>
        <marker id="kilifa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Dirigeant */}
      <rect x="300" y="10" width="160" height="42" rx="10" fill={color} />
      <text x="380" y="36" textAnchor="middle" fontSize="13" fill="#ffffff" fontWeight={700}>Dirigeant</text>
      <line x1="380" y1="52" x2="380" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />

      {/* Interface web / CRM */}
      <rect x="220" y="90" width="320" height="48" rx="10" {...box} strokeWidth={1.2} />
      <text x="380" y="110" textAnchor="middle" fontSize="12.5" style={label}>Interface web / CRM (Next.js)</text>
      <text x="380" y="126" textAnchor="middle" fontSize="10" style={sub}>Prospects · Offres · Candidatures · Notifications</text>
      <line x1="380" y1="138" x2="380" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />

      {/* API REST */}
      <rect x="220" y="176" width="320" height="48" rx="10" {...box} strokeWidth={1.2} />
      <text x="380" y="196" textAnchor="middle" fontSize="12.5" style={label}>API REST (Node.js / Express / TypeScript)</text>
      <text x="380" y="212" textAnchor="middle" fontSize="10" style={sub}>JWT · Zod · rate limiting · webhooks agents</text>
      <line x1="380" y1="224" x2="380" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />

      {/* N8N orchestrateur (largeur pleine) */}
      <rect x="150" y="262" width="460" height="52" rx="10" fill={`${color}12`} stroke={color} strokeWidth={1.4} />
      <text x="380" y="284" textAnchor="middle" fontSize="12.5" style={label}>N8N — Orchestrateur</text>
      <text x="380" y="300" textAnchor="middle" fontSize="10" style={sub}>9 pipelines · 14 agents IA (API Claude, Anthropic)</text>

      {/* Flèches N8N -> Moteur 1 / Moteur 2 */}
      <line x1="300" y1="314" x2="185" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />
      <line x1="460" y1="314" x2="575" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />

      {/* Moteur 1 */}
      <rect x="40" y="352" width="290" height="56" rx="10" {...box} strokeWidth={1.4} />
      <text x="185" y="374" textAnchor="middle" fontSize="12.5" style={label}>Moteur 1 — Prospection B2B</text>
      <text x="185" y="390" textAnchor="middle" fontSize="10" style={sub}>3 workflows N8N (WF-01 à WF-03)</text>

      {/* Moteur 2 */}
      <rect x="430" y="352" width="290" height="56" rx="10" {...box} strokeWidth={1.4} />
      <text x="575" y="374" textAnchor="middle" fontSize="12.5" style={label}>Moteur 2 — Veille appels d&apos;offres</text>
      <text x="575" y="390" textAnchor="middle" fontSize="10" style={sub}>3 workflows N8N (WF-04 à WF-06)</text>

      {/* Flèches Moteur 1/2 -> PostgreSQL + Services externes */}
      <line x1="185" y1="408" x2="290" y2="446" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />
      <line x1="575" y1="408" x2="470" y2="446" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />

      {/* PostgreSQL */}
      <rect x="270" y="446" width="220" height="48" rx="10" {...box} strokeWidth={1.2} />
      <text x="380" y="466" textAnchor="middle" fontSize="12.5" style={label}>PostgreSQL / Prisma</text>
      <text x="380" y="482" textAnchor="middle" fontSize="10" style={sub}>Prospects, offres, candidatures, logs</text>

      {/* Services externes */}
      <line x1="185" y1="408" x2="120" y2="446" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />
      <line x1="575" y1="408" x2="640" y2="446" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />
      <rect x="20" y="446" width="220" height="48" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.2} strokeDasharray="4 3" />
      <text x="130" y="466" textAnchor="middle" fontSize="10.5" style={sub}>BOAMP, France Travail</text>
      <text x="130" y="482" textAnchor="middle" fontSize="10.5" style={sub}>(Moteur 2)</text>

      <rect x="520" y="446" width="220" height="48" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.2} strokeDasharray="4 3" />
      <text x="630" y="466" textAnchor="middle" fontSize="10.5" style={sub}>Brevo (emails)</text>
      <text x="630" y="482" textAnchor="middle" fontSize="10.5" style={sub}>(Moteur 1)</text>

      {/* Infra Docker */}
      <line x1="380" y1="494" x2="380" y2="528" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#kilifa-arrow)" />
      <rect x="60" y="528" width="640" height="46" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.2} strokeDasharray="4 3" />
      <text x="380" y="555" textAnchor="middle" fontSize="10.5" style={sub}>Conteneurisation Docker Compose (API, CRM, PostgreSQL, N8N)</text>
    </svg>
  );
}
