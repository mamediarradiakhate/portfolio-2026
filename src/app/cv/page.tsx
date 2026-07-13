"use client";

import { useState } from "react";

export default function CVPage() {
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    setLoading(true);
    const element = document.getElementById("cv-content");
    if (!element) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const html2pdf = (await import("html2pdf.js" as any)).default;
    await html2pdf()
      .set({
        margin: [15, 15, 15, 15],
        filename: "CV_Mame_Diarra_Bousso_Diakhate.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
    setLoading(false);
  };

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; padding: 0; background: white; }
          .cv-page { box-shadow: none !important; margin: 0 !important; padding: 0 !important; max-width: 100% !important; }
          @page { size: A4; margin: 2cm; }
          .exp-block { break-inside: avoid; page-break-inside: avoid; }
        }
        @media screen {
          body { background: #f1f5f9; }
        }
      `}</style>

      {/* Bouton impression — masqué à l'impression */}
      <div className="no-print" style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 100, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href="/" style={{ padding: "0.6rem 1.2rem", borderRadius: "10px", border: "1px solid #e2e8f0", background: "#ffffff", color: "#475569", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
            ← Portfolio
          </a>
          <button
            onClick={downloadPDF}
            disabled={loading}
            style={{ padding: "0.6rem 1.4rem", borderRadius: "10px", background: loading ? "#a78bfa" : "#7c3aed", color: "#ffffff", border: "none", fontSize: "0.85rem", fontWeight: 700, cursor: loading ? "wait" : "pointer", boxShadow: "0 4px 14px #7c3aed30", transition: "background 0.2s" }}
          >
            {loading ? "⏳ Génération..." : "⬇ Télécharger PDF"}
          </button>
        </div>
      </div>

      {/* ── CV A4 ── */}
      <div id="cv-content" className="cv-page" style={{
        maxWidth: "794px",
        margin: "3rem auto",
        padding: "2.5cm 2cm",
        background: "#ffffff",
        boxShadow: "0 4px 40px rgba(0,0,0,0.12)",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "10.5pt",
        lineHeight: 1.55,
        color: "#1a1a1a",
      }}>

        {/* ══ EN-TÊTE ══ */}
        <header style={{ borderBottom: "2px solid #7c3aed", paddingBottom: "1rem", marginBottom: "1.25rem" }}>
          <h1 style={{ fontSize: "22pt", fontWeight: 900, margin: "0 0 0.2rem 0", color: "#0f172a", letterSpacing: "-0.5px" }}>
            Mame Diarra Bousso Diakhate
          </h1>
          <p style={{ fontSize: "12pt", fontWeight: 700, color: "#7c3aed", margin: "0 0 0.75rem 0" }}>
            Ingénieure Fullstack | IA Agentique | Automatisation
          </p>
          <p style={{ margin: 0, fontSize: "9.5pt", color: "#334155", lineHeight: 1.7 }}>
            <a href="mailto:diakhate.mamediarrabousso99@gmail.com" style={{ color: "#334155", textDecoration: "none" }}>diakhate.mamediarrabousso99@gmail.com</a>
            {" · "}<a href="tel:+33661933965" style={{ color: "#334155", textDecoration: "none" }}>+33 6 61 93 39 65</a>
            {" · "}Île-de-France, France
          </p>
        </header>

        {/* ══ PROFIL ══ */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Profil</h2>
          <p style={{ margin: "0 0 0.55rem 0" }}>
            Apprentie ingénieure informatique en dernière année à l'ESIEE Paris (diplôme prévu septembre 2026),
            spécialisée en développement fullstack, IA agentique et automatisation. 3 ans d'alternance chez
            Kilifa Consulting avec une progression sur 3 niveaux : intégration de modules ERP Odoo 17 (modules
            Employé, Congé, droits d'accès), développement from scratch d'un module Payroll complet, puis
            conception et développement solo d'une plateforme multi-agents IA de prospection commerciale
            (mémoire de fin d'études). Fondatrice de 3S Tech & IA et 3S Design.
          </p>
          <p style={{ margin: 0 }}>
            Utilisatrice avancée des outils d'IA générative (Claude, ChatGPT, Gemini, Notion AI, Cursor,
            GitHub Copilot, Windsurf, Google Flow, Runway, ElevenLabs) pour produire des livrables qui
            dépassent largement le cadre de la formation classique : vidéos publicitaires professionnelles,
            systèmes intelligents complexes, automatisation de workflows métier, génération de contenu
            multimédia et création de produits numériques complets de bout en bout. Ma capacité à orchestrer
            ces outils me permet de livrer en solo ce que des équipes entières réalisent habituellement,
            tout en maintenant la maîtrise technique des fondamentaux.
          </p>
        </section>

        {/* ══ EXPÉRIENCE PROFESSIONNELLE ══ */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Expérience Professionnelle</h2>

          {/* Kilifa — Année 3 */}
          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>Ingénieure IA, Conception Plateforme Multi-Agents</span>
              <span style={expDate}>2025 – 2026</span>
            </div>
            <p style={expCompany}>Kilifa Consulting · Île-de-France · Alternance (Année 3)</p>
            <ul style={list}>
              <li>Conception et développement solo d&apos;une plateforme multi-agents IA (9 workflows N8N, 14 agents IA) pour la prospection commerciale automatisée et la veille des appels d&apos;offres (mémoire de fin d&apos;études)</li>
              <li>Moteur de veille (opérationnel) : scraping automatique BOAMP, France Travail, TED Europe, scoring IA 0-100, matching expert–offre (score 95/100 atteint), génération automatique de lettres de motivation via l&apos;API Claude (Anthropic)</li>
              <li>Moteur de prospection (développé) : qualification IA des prospects B2B, séquences de relances automatiques J+5/J+10/J+15, traitement IA des réponses entrantes par analyse de sentiment</li>
              <li>CRM web de pilotage (Next.js), API REST (Express.js/TypeScript), base de données PostgreSQL (Prisma), monitoring temps réel (Socket.IO), déployé via Docker sur VPS Kilifa</li>
              <li>Stack : N8N, Express.js TypeScript, Next.js, PostgreSQL, Prisma, API Claude (Anthropic), Brevo, Docker, JWT, Socket.IO</li>
            </ul>
          </div>

          {/* Kilifa — Année 2 */}
          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>Développeuse, Module Payroll Odoo</span>
              <span style={expDate}>2024 – 2025</span>
            </div>
            <p style={expCompany}>Kilifa Consulting · Île-de-France · Alternance (Année 2)</p>
            <ul style={list}>
              <li>Développement from scratch d'un module complet de gestion des fiches de paie sous Odoo 17 (Python, Odoo Framework)</li>
              <li>Personnalisation des règles de calcul salariales, gestion des cotisations, génération PDF des bulletins</li>
              <li>Gestion fine des droits d'accès aux données RH sensibles</li>
            </ul>
          </div>

          {/* Kilifa — Année 1 */}
          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>Intégratrice ERP Odoo, Modules RH & Accès</span>
              <span style={expDate}>2023 – 2024</span>
            </div>
            <p style={expCompany}>Kilifa Consulting · Île-de-France · Alternance (Année 1)</p>
            <ul style={list}>
              <li>Déploiement Odoo 17 Community via Docker sur l'infrastructure cloud de l'entreprise</li>
              <li>Intégration et personnalisation des modules Employé, Congé et configuration des droits d'accès par profil</li>
              <li>Stack : Python, Odoo Framework, Docker, PostgreSQL, Linux, XML</li>
            </ul>
          </div>

          {/* 3S Tech */}
          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>Fondatrice & Développeuse, 3S Tech & IA</span>
              <span style={expDate}>2024 – Présent</span>
            </div>
            <p style={expCompany}>3S Tech & IA · Startup personnelle</p>
            <ul style={list}>
              <li>Développement solo de 3S POS System : SaaS de gestion commerciale multi-secteurs (commerce, pharmacie), de l'architecture à la mise en production sur VPS</li>
              <li>Stack : React, Node.js, PostgreSQL, Docker, TypeScript, REST API, JWT Auth</li>
              <li>En développement : 3S AGENTIC IA (plateforme 12 agents IA aux prénoms sénégalais, support wolof, n8n, LangGraph) et Jang Anglais (app éducative trilingue pour enfants)</li>
            </ul>
          </div>

          {/* 3S Design */}
          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>Fondatrice, 3S Design</span>
              <span style={expDate}>2022 – Présent</span>
            </div>
            <p style={expCompany}>3S Design · Agence digitale</p>
            <ul style={list}>
              <li>Identités visuelles, sites vitrine, vidéos publicitaires et digitalisation pour TPE/PME</li>
            </ul>
          </div>
        </section>

        {/* ══ FORMATION ══ */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Formation</h2>

          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>Cycle Ingénieur Informatique & Applications</span>
              <span style={expDate}>2023 – Sept. 2026</span>
            </div>
            <p style={expCompany}>ESIEE Paris · Marne-la-Vallée · Apprentissage</p>
            <ul style={list}>
              <li>Projet DevSecOps Cloud-Native : Node.js, Docker, Kubernetes, Terraform, GitHub Actions</li>
              <li>Projet IA : Machine Learning & Deep Learning avec Python, TensorFlow/Keras, CNN (Dogs vs Cats, MNIST, Intel Image Classification)</li>
              <li>Projet Réalité Virtuelle : Musée d'Empathie, avec Unity, C#</li>
            </ul>
          </div>

          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>Licence Sciences de l'Ingénieur</span>
              <span style={expDate}>2021 – 2022</span>
            </div>
            <p style={{ ...expCompany, marginBottom: 0 }}>Université Paris Nord · Paris</p>
          </div>

          <div className="exp-block" style={expBlock}>
            <div style={expHeader}>
              <span style={expTitle}>DST Télécommunications & Réseaux</span>
              <span style={expDate}>2019 – 2021</span>
            </div>
            <p style={{ ...expCompany, marginBottom: 0 }}>École Polytechnique de Dakar · Sénégal</p>
          </div>
        </section>

        {/* ══ COMPÉTENCES TECHNIQUES ══ */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Compétences Techniques</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10pt" }}>
            <tbody>
              {[
                ["Langages", "Python, JavaScript, TypeScript, C#, SQL, XML"],
                ["Frontend", "React, Next.js, Tailwind CSS, Framer Motion, HTML/CSS"],
                ["Backend", "Node.js, Express.js, REST API, Odoo Framework"],
                ["IA & Machine Learning", "TensorFlow, Keras, Scikit-learn, CNN, Anthropic API (Claude), OpenAI API"],
                ["IA Agentique & Automatisation", "N8N, LangGraph, Agents autonomes, Orchestration multi-agents, Ollama, MCP"],
                ["DevOps & Cloud", "Docker, Kubernetes, Git, GitHub Actions, Linux, VPS, Terraform"],
                ["Bases de données", "PostgreSQL, MongoDB, Neo4j"],
                ["Outils IA productivité", "Claude AI, Cursor, GitHub Copilot, ChatGPT, Windsurf"],
              ].map(([cat, techs]) => (
                <tr key={cat} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "0.3rem 0.75rem 0.3rem 0", fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", verticalAlign: "top", width: "34%" }}>{cat}</td>
                  <td style={{ padding: "0.3rem 0", color: "#334155", verticalAlign: "top" }}>{techs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ══ PROJETS CLÉS ══ */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Projets Clés</h2>
          <ul style={list}>
            <li><strong>3S POS System.</strong> SaaS de gestion commerciale (commerce & pharmacie) développé en solo, déployé en production sur VPS. React, Node.js, PostgreSQL, Docker. Site : 3spossystem.com</li>
            <li><strong>Plateforme Multi-Agents IA Kilifa.</strong> 9 workflows N8N, 14 agents IA, 2 moteurs (prospection B2B + veille BOAMP/France Travail/TED), CRM Next.js, scoring IA, génération de lettres via Claude API. (Mémoire ingénieur 2026)</li>
            <li><strong>3S AGENTIC IA.</strong> Plateforme de 12 agents IA aux prénoms sénégalais (Fatou, Koumba, Sokhna…), support wolof via Kàllaama, téléphonie africaine Infobip. En cours de développement.</li>
            <li><strong>Jang Anglais.</strong> Application mobile éducative trilingue (Wolof, Français, Anglais) pour enfants 5-13 ans. React Native, NLP, Speech-to-Text. En développement.</li>
          </ul>
        </section>

        {/* ══ LANGUES ══ */}
        <section style={{ marginBottom: "1rem" }}>
          <h2 style={sectionTitle}>Langues</h2>
          <p style={{ margin: 0 }}>
            <strong>Français :</strong> courant (langue de travail)
            {" · "}
            <strong>Anglais :</strong> intermédiaire (B1/B2)
            {" · "}
            <strong>Wolof :</strong> langue maternelle
          </p>
        </section>

        {/* ══ CENTRES D'INTÉRÊT ══ */}
        <section style={{ marginBottom: "0.5rem" }}>
          <h2 style={sectionTitle}>Centres d&apos;intérêt</h2>
          <p style={{ margin: 0 }}>
            <strong>Lecture</strong>
            {" · "}
            <strong>Art</strong>
            {" · "}
            <strong>Création de contenu IA</strong> (histoires & films générés par IA)
            {" · "}
            <strong>Documentation</strong>
            {" · "}
            <strong>Sport</strong>
          </p>
        </section>

      </div>
    </>
  );
}

/* ── Styles réutilisables ── */
const sectionTitle: React.CSSProperties = {
  fontSize: "11pt",
  fontWeight: 800,
  color: "#7c3aed",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  borderBottom: "1px solid #e2e8f0",
  paddingBottom: "0.25rem",
  marginBottom: "0.65rem",
  marginTop: 0,
};

const expBlock: React.CSSProperties = {
  marginBottom: "0.9rem",
};

const expHeader: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "0.5rem",
};

const expTitle: React.CSSProperties = {
  fontWeight: 700,
  color: "#0f172a",
  fontSize: "10.5pt",
};

const expDate: React.CSSProperties = {
  fontSize: "9.5pt",
  color: "#64748b",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const expCompany: React.CSSProperties = {
  color: "#7c3aed",
  fontSize: "9.5pt",
  fontWeight: 600,
  margin: "0.1rem 0 0.35rem 0",
};

const list: React.CSSProperties = {
  margin: "0.2rem 0 0 0",
  paddingLeft: "1.4rem",
  color: "#334155",
  listStyleType: "disc",
};
