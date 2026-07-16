"use client";

import { useState } from "react";

/* ── Données du CV (source unique : affichage écran + génération PDF) ── */
const cvData = {
  name: "Mame Diarra Bousso Diakhate",
  title: "Ingénieure Fullstack | IA Agentique | Automatisation",
  email: "diakhate.mamediarrabousso99@gmail.com",
  phone: "+33 6 61 93 39 65",
  location: "Île-de-France, France",

  profil: [
    "Apprentie ingénieure informatique en dernière année à l'ESIEE Paris (diplôme prévu septembre 2026), spécialisée en développement fullstack, IA agentique et automatisation. 3 ans d'alternance chez Kilifa Consulting avec une progression sur 3 niveaux : intégration de modules ERP Odoo 17 (modules Employé, Congé, droits d'accès), développement from scratch d'un module Payroll complet, puis conception et développement solo d'une plateforme multi-agents IA de prospection commerciale (mémoire de fin d'études). Fondatrice de 3S Tech & IA et 3S Design.",
    "Utilisatrice avancée des outils d'IA générative (Claude, ChatGPT, Gemini, Notion AI, Cursor, GitHub Copilot, Windsurf, Google Flow, Runway, ElevenLabs) pour produire des livrables qui dépassent largement le cadre de la formation classique : vidéos publicitaires professionnelles, systèmes intelligents complexes, automatisation de workflows métier, génération de contenu multimédia et création de produits numériques complets de bout en bout. Ma capacité à orchestrer ces outils me permet de livrer en solo ce que des équipes entières réalisent habituellement, tout en maintenant la maîtrise technique des fondamentaux.",
  ],

  experience: [
    {
      title: "Ingénieure IA, Conception Plateforme Multi-Agents",
      date: "2025 – 2026",
      company: "Kilifa Consulting · Île-de-France · Alternance (Année 3)",
      bullets: [
        "Conception et développement solo d'une plateforme multi-agents IA (9 workflows N8N, 14 agents IA) pour la prospection commerciale automatisée et la veille des appels d'offres (mémoire de fin d'études)",
        "Moteur de veille (opérationnel) : scraping automatique BOAMP, France Travail, TED Europe, scoring IA 0-100, matching expert-offre (score 95/100 atteint), génération automatique de lettres de motivation via l'API Claude (Anthropic)",
        "Moteur de prospection (développé) : qualification IA des prospects B2B, séquences de relances automatiques J+5/J+10/J+15, traitement IA des réponses entrantes par analyse de sentiment",
        "CRM web de pilotage (Next.js), API REST (Express.js/TypeScript), base de données PostgreSQL (Prisma), monitoring temps réel (Socket.IO), déployé via Docker sur VPS Kilifa",
        "Stack : N8N, Express.js TypeScript, Next.js, PostgreSQL, Prisma, API Claude (Anthropic), Brevo, Docker, JWT, Socket.IO",
      ],
    },
    {
      title: "Développeuse, Module Payroll Odoo",
      date: "2024 – 2025",
      company: "Kilifa Consulting · Île-de-France · Alternance (Année 2)",
      bullets: [
        "Développement from scratch d'un module complet de gestion des fiches de paie sous Odoo 17 (Python, Odoo Framework)",
        "Personnalisation des règles de calcul salariales, gestion des cotisations, génération PDF des bulletins",
        "Gestion fine des droits d'accès aux données RH sensibles",
      ],
    },
    {
      title: "Intégratrice ERP Odoo, Modules RH & Accès",
      date: "2023 – 2024",
      company: "Kilifa Consulting · Île-de-France · Alternance (Année 1)",
      bullets: [
        "Déploiement Odoo 17 Community via Docker sur l'infrastructure cloud de l'entreprise",
        "Intégration et personnalisation des modules Employé, Congé et configuration des droits d'accès par profil",
        "Stack : Python, Odoo Framework, Docker, PostgreSQL, Linux, XML",
      ],
    },
    {
      title: "Fondatrice & Développeuse, 3S Tech & IA",
      date: "2024 – Présent",
      company: "3S Tech & IA · Startup personnelle",
      bullets: [
        "Développement solo de 3S POS System : SaaS de gestion commerciale multi-secteurs (commerce, pharmacie), de l'architecture à la mise en production sur VPS",
        "Stack : React, Node.js, PostgreSQL, Docker, TypeScript, REST API, JWT Auth",
        "En développement : 3S AGENTIC IA (plateforme 12 agents IA aux prénoms sénégalais, support wolof, n8n, LangGraph) et Jang Anglais (app éducative trilingue pour enfants)",
      ],
    },
    {
      title: "Fondatrice, 3S Design",
      date: "2022 – Présent",
      company: "3S Design · Agence digitale",
      bullets: [
        "Identités visuelles, sites vitrine, vidéos publicitaires et digitalisation pour TPE/PME",
      ],
    },
  ],

  formation: [
    {
      title: "Cycle Ingénieur Informatique & Applications",
      date: "2023 – Sept. 2026",
      company: "ESIEE Paris · Marne-la-Vallée · Apprentissage",
      bullets: [
        "Projet DevSecOps Cloud-Native : Node.js, Docker, Kubernetes, Terraform, GitHub Actions",
        "Projet IA : Machine Learning & Deep Learning avec Python, TensorFlow/Keras, CNN (Dogs vs Cats, MNIST, Intel Image Classification)",
        "Projet Réalité Virtuelle : Musée d'Empathie, avec Unity, C#",
      ],
    },
    {
      title: "Licence Sciences de l'Ingénieur",
      date: "2021 – 2022",
      company: "Université Paris Nord · Paris",
      bullets: [],
    },
    {
      title: "DST Télécommunications & Réseaux",
      date: "2019 – 2021",
      company: "École Polytechnique de Dakar · Sénégal",
      bullets: [],
    },
    {
      title: "Baccalauréat Scientifique S1",
      date: "2018",
      company: "Sénégal",
      bullets: [],
    },
  ],

  competences: [
    ["Langages", "Python, JavaScript, TypeScript, C#, SQL, XML"],
    ["Frontend", "React, Next.js, Tailwind CSS, Framer Motion, HTML/CSS"],
    ["Backend", "Node.js, Express.js, REST API, Odoo Framework"],
    ["IA & Machine Learning", "TensorFlow, Keras, Scikit-learn, CNN, Anthropic API (Claude), OpenAI API"],
    ["IA Agentique & Automatisation", "N8N, LangGraph, Agents autonomes, Orchestration multi-agents, Ollama, MCP"],
    ["DevOps & Cloud", "Docker, Kubernetes, Git, GitHub Actions, Linux, VPS, Terraform"],
    ["Bases de données", "PostgreSQL, MongoDB, Neo4j"],
    ["Outils IA productivité", "Claude AI, Claude Code, Cursor, GitHub Copilot, ChatGPT, Windsurf"],
  ],

  projets: [
    { name: "3S POS System.", desc: "SaaS de gestion commerciale (commerce & pharmacie) développé en solo, déployé en production sur VPS. React, Node.js, PostgreSQL, Docker. Site : 3spossystem.com" },
    { name: "Plateforme Multi-Agents IA Kilifa.", desc: "9 workflows N8N, 14 agents IA, 2 moteurs (prospection B2B + veille BOAMP/France Travail/TED), CRM Next.js, scoring IA, génération de lettres via Claude API. (Mémoire ingénieur 2026)" },
    { name: "3S AGENTIC IA.", desc: "Plateforme de 12 agents IA aux prénoms sénégalais (Fatou, Koumba, Sokhna...), support wolof via Kàllaama, téléphonie africaine Infobip. En cours de développement." },
    { name: "Jang Anglais.", desc: "Application mobile éducative trilingue (Wolof, Français, Anglais) pour enfants 5-13 ans. React Native, NLP, Speech-to-Text. En développement." },
  ],

  langues: [
    { lang: "Français :", level: "courant (langue de travail)" },
    { lang: "Anglais :", level: "intermédiaire (B1/B2)" },
    { lang: "Wolof :", level: "langue maternelle" },
  ],

  interets: ["Lecture", "Art", "Création de contenu IA (histoires & films générés par IA)", "Documentation", "Sport"],
};

export default function CVPage() {
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    setLoading(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "mm", format: "a4" });

      const pageWidth = 210;
      const pageHeight = 297;
      const marginX = 18;
      const marginBottom = 15;
      const contentWidth = pageWidth - marginX * 2;
      const purple = [124, 58, 237] as const;
      const dark = [15, 23, 42] as const;
      const gray = [51, 65, 85] as const;
      const grayLight = [100, 116, 139] as const;

      let y = 16;

      const ensureSpace = (needed: number) => {
        if (y + needed > pageHeight - marginBottom) {
          doc.addPage();
          y = 16;
        }
      };

      const addWrapped = (text: string, opts: { size: number; color: readonly [number, number, number]; bold?: boolean; gap?: number; indent?: number; lineHeight?: number }) => {
        doc.setFont("helvetica", opts.bold ? "bold" : "normal");
        doc.setFontSize(opts.size);
        doc.setTextColor(opts.color[0], opts.color[1], opts.color[2]);
        const indent = opts.indent ?? 0;
        const lines: string[] = doc.splitTextToSize(text, contentWidth - indent);
        const lh = opts.lineHeight ?? opts.size * 0.42;
        ensureSpace(lines.length * lh);
        for (const line of lines) {
          doc.text(line, marginX + indent, y);
          y += lh;
        }
        y += opts.gap ?? 0;
      };

      const addBullets = (items: string[]) => {
        for (const item of items) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9.5);
          doc.setTextColor(gray[0], gray[1], gray[2]);
          const lines: string[] = doc.splitTextToSize(item, contentWidth - 5);
          const lh = 4.1;
          ensureSpace(lines.length * lh);
          doc.text("•", marginX, y);
          for (let i = 0; i < lines.length; i++) {
            doc.text(lines[i], marginX + 4, y);
            y += lh;
          }
        }
        y += 1.5;
      };

      const addSectionTitle = (title: string) => {
        ensureSpace(9);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11.5);
        doc.setTextColor(purple[0], purple[1], purple[2]);
        doc.text(title.toUpperCase(), marginX, y);
        y += 2;
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.3);
        doc.line(marginX, y, marginX + contentWidth, y);
        y += 5;
      };

      const addExpBlock = (item: { title: string; date: string; company: string; bullets: string[] }) => {
        ensureSpace(10);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(dark[0], dark[1], dark[2]);
        doc.text(item.title, marginX, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(grayLight[0], grayLight[1], grayLight[2]);
        doc.text(item.date, marginX + contentWidth, y, { align: "right" });
        y += 4.6;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(purple[0], purple[1], purple[2]);
        doc.text(item.company, marginX, y);
        y += 5;
        if (item.bullets.length) addBullets(item.bullets);
        y += 2;
      };

      // ── En-tête ──
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.text(cvData.name, marginX, y);
      y += 7.5;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12.5);
      doc.setTextColor(purple[0], purple[1], purple[2]);
      doc.text(cvData.title, marginX, y);
      y += 6.5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(gray[0], gray[1], gray[2]);
      doc.textWithLink(cvData.email, marginX, y, { url: `mailto:${cvData.email}` });
      const emailWidth = doc.getTextWidth(cvData.email);
      doc.text("   ·   ", marginX + emailWidth, y);
      const sepWidth = doc.getTextWidth("   ·   ");
      doc.textWithLink(cvData.phone, marginX + emailWidth + sepWidth, y, { url: `tel:${cvData.phone.replace(/\s/g, "")}` });
      const phoneWidth = doc.getTextWidth(cvData.phone);
      doc.text(`   ·   ${cvData.location}`, marginX + emailWidth + sepWidth + phoneWidth, y);
      y += 4;

      doc.setDrawColor(purple[0], purple[1], purple[2]);
      doc.setLineWidth(0.7);
      doc.line(marginX, y, marginX + contentWidth, y);
      y += 7;

      // ── Profil ──
      addSectionTitle("Profil");
      for (const p of cvData.profil) {
        addWrapped(p, { size: 9.7, color: gray, gap: 2.5, lineHeight: 4.3 });
      }
      y += 2;

      // ── Expérience ──
      addSectionTitle("Expérience Professionnelle");
      for (const exp of cvData.experience) addExpBlock(exp);

      // ── Formation ──
      addSectionTitle("Formation");
      for (const f of cvData.formation) addExpBlock(f);

      // ── Compétences ──
      addSectionTitle("Compétences Techniques");
      for (const [cat, techs] of cvData.competences) {
        ensureSpace(5);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.7);
        doc.setTextColor(dark[0], dark[1], dark[2]);
        doc.text(`${cat} :`, marginX, y);
        const catWidth = doc.getTextWidth(`${cat} :`) + 2;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(gray[0], gray[1], gray[2]);
        const lines: string[] = doc.splitTextToSize(techs, contentWidth - catWidth);
        doc.text(lines[0], marginX + catWidth, y);
        y += 4.3;
        for (let i = 1; i < lines.length; i++) {
          doc.text(lines[i], marginX + catWidth, y);
          y += 4.3;
        }
        y += 0.8;
      }
      y += 2;

      // ── Projets clés ──
      addSectionTitle("Projets Clés");
      for (const proj of cvData.projets) {
        addWrapped(`${proj.name} ${proj.desc}`, { size: 9.5, color: gray, gap: 2, lineHeight: 4.1 });
      }
      y += 1;

      // ── Langues ──
      addSectionTitle("Langues");
      addWrapped(cvData.langues.map((l) => `${l.lang} ${l.level}`).join("   ·   "), { size: 9.7, color: gray, gap: 2, lineHeight: 4.3 });

      // ── Centres d'intérêt ──
      addSectionTitle("Centres d'intérêt");
      addWrapped(cvData.interets.join("   ·   "), { size: 9.7, color: gray, gap: 0, lineHeight: 4.3 });

      doc.save("CV_Mame_Diarra_Bousso_Diakhate.pdf");
    } finally {
      setLoading(false);
    }
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

      {/* Bouton impression, masqué à l'impression */}
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

      {/* CV A4 */}
      <div id="cv-content" className="cv-page" style={{
        maxWidth: "794px",
        margin: "3rem auto",
        padding: "0.5cm 2cm 2.5cm",
        background: "#ffffff",
        boxShadow: "0 4px 40px rgba(0,0,0,0.12)",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "10.5pt",
        lineHeight: 1.55,
        color: "#1a1a1a",
      }}>

        {/* En-tête */}
        <header style={{ borderBottom: "2px solid #7c3aed", paddingBottom: "1rem", marginBottom: "1.25rem" }}>
          <h1 style={{ fontSize: "22pt", fontWeight: 900, margin: "0 0 0.2rem 0", color: "#0f172a", letterSpacing: "-0.5px" }}>
            {cvData.name}
          </h1>
          <p style={{ fontSize: "12pt", fontWeight: 700, color: "#7c3aed", margin: "0 0 0.75rem 0" }}>
            {cvData.title}
          </p>
          <p style={{ margin: 0, fontSize: "9.5pt", color: "#334155", lineHeight: 1.7 }}>
            <a href={`mailto:${cvData.email}`} style={{ color: "#334155", textDecoration: "none" }}>{cvData.email}</a>
            {" · "}<a href={`tel:${cvData.phone.replace(/\s/g, "")}`} style={{ color: "#334155", textDecoration: "none" }}>{cvData.phone}</a>
            {" · "}{cvData.location}
          </p>
        </header>

        {/* Profil */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Profil</h2>
          {cvData.profil.map((p, i) => (
            <p key={i} style={{ margin: i === cvData.profil.length - 1 ? 0 : "0 0 0.55rem 0" }}>{p}</p>
          ))}
        </section>

        {/* Expérience professionnelle */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Expérience Professionnelle</h2>
          {cvData.experience.map((exp) => (
            <div key={exp.title} className="exp-block" style={expBlock}>
              <div style={expHeader}>
                <span style={expTitle}>{exp.title}</span>
                <span style={expDate}>{exp.date}</span>
              </div>
              <p style={expCompany}>{exp.company}</p>
              {exp.bullets.length > 0 && (
                <ul style={list}>
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Formation */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Formation</h2>
          {cvData.formation.map((f) => (
            <div key={f.title} className="exp-block" style={expBlock}>
              <div style={expHeader}>
                <span style={expTitle}>{f.title}</span>
                <span style={expDate}>{f.date}</span>
              </div>
              <p style={f.bullets.length ? expCompany : { ...expCompany, marginBottom: 0 }}>{f.company}</p>
              {f.bullets.length > 0 && (
                <ul style={list}>
                  {f.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Compétences techniques */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Compétences Techniques</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10pt" }}>
            <tbody>
              {cvData.competences.map(([cat, techs]) => (
                <tr key={cat} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "0.3rem 0.75rem 0.3rem 0", fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", verticalAlign: "top", width: "34%" }}>{cat}</td>
                  <td style={{ padding: "0.3rem 0", color: "#334155", verticalAlign: "top" }}>{techs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Projets clés */}
        <section style={{ marginBottom: "1.25rem" }}>
          <h2 style={sectionTitle}>Projets Clés</h2>
          <ul style={list}>
            {cvData.projets.map((proj) => (
              <li key={proj.name}><strong>{proj.name}</strong> {proj.desc}</li>
            ))}
          </ul>
        </section>

        {/* Langues */}
        <section style={{ marginBottom: "1rem" }}>
          <h2 style={sectionTitle}>Langues</h2>
          <p style={{ margin: 0 }}>
            {cvData.langues.map((l, i) => (
              <span key={l.lang}>
                <strong>{l.lang}</strong> {l.level}
                {i < cvData.langues.length - 1 && " · "}
              </span>
            ))}
          </p>
        </section>

        {/* Centres d'intérêt */}
        <section style={{ marginBottom: "0.5rem" }}>
          <h2 style={sectionTitle}>Centres d&apos;intérêt</h2>
          <p style={{ margin: 0 }}>
            {cvData.interets.map((interet, i) => (
              <span key={interet}>
                <strong>{interet}</strong>
                {i < cvData.interets.length - 1 && " · "}
              </span>
            ))}
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
