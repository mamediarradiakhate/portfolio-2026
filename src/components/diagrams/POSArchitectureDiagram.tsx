/* Diagramme d'architecture simplifié de 3S POS System, dessiné en SVG. */
export default function POSArchitectureDiagram({ color = "#0ea5e9" }: { color?: string }) {
  const box = { fill: "#ffffff", stroke: "#e2e8f0" };
  const label = { fill: "#0f172a", fontWeight: 700 as const };
  const sub = { fill: "#64748b", fontWeight: 500 as const };

  return (
    <svg viewBox="0 0 760 430" width="100%" height="auto" role="img" aria-label="Architecture simplifiée de 3S POS System" style={{ maxWidth: "100%" }}>
      <defs>
        <marker id="pos-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Client */}
      <rect x="300" y="10" width="160" height="42" rx="10" fill={color} />
      <text x="380" y="36" textAnchor="middle" fontSize="13" fill="#ffffff" fontWeight={700}>Client (navigateur)</text>

      {/* Applications frontend */}
      {[
        { x: 20, w: 168, title: "Dashboard admin" },
        { x: 200, w: 168, title: "Boutique e-commerce" },
        { x: 380, w: 168, title: "Kiosque client" },
        { x: 560, w: 168, title: "Portail partenaires" },
      ].map((n) => (
        <g key={n.title}>
          <rect x={n.x} y="92" width={n.w} height="46" rx="10" {...box} strokeWidth={1.2} />
          <text x={n.x + n.w / 2} y="112" textAnchor="middle" fontSize="12.5" style={label}>{n.title}</text>
          <text x={n.x + n.w / 2} y="128" textAnchor="middle" fontSize="10.5" style={sub}>React / Next.js</text>
        </g>
      ))}

      {/* Flèches client -> apps */}
      <line x1="380" y1="52" x2="104" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
      <line x1="380" y1="52" x2="284" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
      <line x1="380" y1="52" x2="464" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
      <line x1="380" y1="52" x2="644" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />

      {/* Flèches apps -> API */}
      <line x1="104" y1="138" x2="360" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
      <line x1="284" y1="138" x2="370" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
      <line x1="464" y1="138" x2="400" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
      <line x1="644" y1="138" x2="440" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />

      {/* API REST */}
      <rect x="240" y="182" width="280" height="52" rx="10" fill={`${color}12`} stroke={color} strokeWidth={1.4} />
      <text x="380" y="205" textAnchor="middle" fontSize="13.5" style={label}>API REST multi-tenant</text>
      <text x="380" y="222" textAnchor="middle" fontSize="10.5" style={sub}>FastAPI · SQLAlchemy 2.0 async · isolation par company_id</text>

      {/* Flèches API -> DB */}
      <line x1="330" y1="234" x2="230" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
      <line x1="430" y1="234" x2="530" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />

      {/* PostgreSQL + Redis */}
      <rect x="130" y="278" width="200" height="46" rx="10" {...box} strokeWidth={1.2} />
      <text x="230" y="298" textAnchor="middle" fontSize="12.5" style={label}>PostgreSQL</text>
      <text x="230" y="314" textAnchor="middle" fontSize="10.5" style={sub}>Données métier (Alembic)</text>

      <rect x="430" y="278" width="200" height="46" rx="10" {...box} strokeWidth={1.2} />
      <text x="530" y="298" textAnchor="middle" fontSize="12.5" style={label}>Redis</text>
      <text x="530" y="314" textAnchor="middle" fontSize="10.5" style={sub}>Cache & synchronisation kiosque</text>

      {/* Infra layer */}
      <rect x="60" y="358" width="640" height="56" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.2} strokeDasharray="4 3" />
      <text x="380" y="381" textAnchor="middle" fontSize="12.5" style={label}>Docker Compose · Nginx (TLS) · Terraform · Ansible</text>
      <text x="380" y="398" textAnchor="middle" fontSize="10.5" style={sub}>Déployé sur VPS via CI/CD GitHub Actions (build → healthcheck → rollback)</text>

      <line x1="380" y1="324" x2="380" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pos-arrow)" />
    </svg>
  );
}
