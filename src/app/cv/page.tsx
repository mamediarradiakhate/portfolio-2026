"use client";

import { useState } from "react";

/* ── Types de contenu (source unique : affichage écran + génération PDF) ── */
interface Section {
  heading: string;
  bullets: string[];
}

interface ProjectContent {
  synthese?: string;
  sections?: Section[];
  bullets?: string[];
  stack?: string;
}

interface ExpItem extends ProjectContent {
  title: string;
  date: string;
  company: string;
}

/* ── Données du CV ── */
const cvData: {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profil: string[];
  experience: ExpItem[];
  produits: ExpItem[];
  formation: ExpItem[];
  certifications: { name: string; issuer: string; date: string }[];
  projetsAcademiques: { title: string; company: string; synthese: string; stack: string }[];
  competences: [string, string][];
  langues: { lang: string; level: string }[];
} = {
  name: "Mame Diarra Bousso Diakhate",
  title: "Ingénieure IA Générative & Agentique | Backend · DevOps",
  email: "diakhate.mamediarrabousso99@gmail.com",
  phone: "+33 6 61 93 39 65",
  location: "Île-de-France, France",

  profil: [
    "Élève-ingénieure en dernière année à l'ESIEE Paris, avec 3 ans d'alternance en développement logiciel et une spécialisation en IA générative et agentique. Expérience en conception de systèmes multi-agents, backend, automatisation et déploiement, avec une orientation DevOps/LLMOps.",
    "Conception et développement d'une plateforme multi-agents IA chez Kilifa Consulting : 14 agents spécialisés orchestrés par 9 pipelines N8N pour automatiser la prospection B2B et la veille d'appels d'offres.",
    "En parallèle, fondatrice et développeuse de 3S POS System, un SaaS multi-tenant développé de l'architecture au déploiement, combinant backend Python, applications React/Next.js et infrastructure DevOps.",
    "Diplôme d'ingénieure prévu en septembre 2026.",
  ],

  experience: [
    {
      title: "Ingénieure IA, Conception d'une plateforme multi-agents",
      date: "2025 – 2026",
      company: "Kilifa Consulting · Île-de-France · Alternance",
      synthese: "Conception et développement d'une plateforme IA destinée à automatiser la prospection commerciale et la veille d'appels d'offres.",
      sections: [
        {
          heading: "IA & orchestration",
          bullets: [
            "Conception de 2 moteurs autonomes : prospection B2B et veille d'appels d'offres",
            "Orchestration de 14 agents IA spécialisés via 9 pipelines N8N, avec échanges de données structurées en JSON",
            "Fonctionnement human-in-the-loop : validation humaine avant toute action commerciale",
            "Agents dédiés à la qualification, au scoring, au matching, à la génération de contenu, à l'analyse de sentiment et au parsing d'appels d'offres",
            "Observabilité des appels LLM : tokens, coûts, latence, statut, détection d'échecs consécutifs",
          ],
        },
        {
          heading: "Backend & frontend",
          bullets: [
            "API REST en Node.js / Express / TypeScript avec JWT, validation Zod et rate limiting",
            "Modélisation PostgreSQL / Prisma et sécurisation des flux entrants des agents via webhooks authentifiés",
            "CRM de supervision avec Next.js 14, TypeScript et Tailwind CSS, notifications temps réel via Socket.IO",
          ],
        },
        {
          heading: "DevOps & intégrations",
          bullets: [
            "Conteneurisation de l'API, du frontend, de PostgreSQL et de N8N avec Docker Compose",
            "Intégration d'APIs externes : BOAMP et France Travail",
            "Gestion des contraintes RGPD : désinscription, blocage technique des relances, traçabilité",
            "Suivi des coûts d'inférence pour maintenir l'usage des modèles dans une enveloppe budgétaire définie",
          ],
        },
      ],
      stack: "N8N, Claude API (Anthropic), Node.js, Express.js, TypeScript, Next.js, PostgreSQL, Prisma, Docker, Socket.IO, JWT, Zod",
    },
    {
      title: "Développeuse & Intégratrice Odoo, RH, Congés, Paie",
      date: "2023 – 2025",
      company: "Kilifa Consulting · Île-de-France · Alternance",
      bullets: [
        "Déploiement et configuration d'Odoo 17 Community via Docker et Nginx",
        "Intégration et personnalisation des modules Employé, Congé et Contrat, avec gestion des droits d'accès sur les données RH sensibles",
        "Développement d'un module de gestion de la paie en Python/Odoo : règles de calcul salarial, récupération des données RH, génération automatisée des bulletins PDF",
        "Automatisation de processus métier sur les modules Congé et Contrat, développement de modules répondant à des besoins spécifiques",
      ],
      stack: "Python, Odoo Framework, Docker, Nginx, PostgreSQL, Linux, XML",
    },
  ],

  produits: [
    {
      title: "3S POS System, SaaS de gestion commerciale multi-tenant",
      date: "2024 – Présent",
      company: "3S Tech & IA · Fondatrice & Développeuse",
      synthese: "Plateforme SaaS destinée aux commerçants et pharmacies africains francophones pour la gestion des ventes, caisse, stocks, commandes, facturation et e-commerce. Développée en solo, de l'architecture au déploiement.",
      sections: [
        {
          heading: "Backend & Frontend",
          bullets: [
            "Architecture multi-tenant avec isolation applicative des données par company_id",
            "API REST versionnée avec FastAPI et SQLAlchemy 2.0 async",
            "Plusieurs flux d'authentification JWT et système générique de variantes produit",
            "6 applications frontend (React / Next.js) : administration, POS, e-commerce, kiosque client, portail partenaires, site marketing",
          ],
        },
        {
          heading: "DevOps",
          bullets: [
            "Conteneurisation complète (Docker / Docker Compose)",
            "Pipeline CI/CD GitHub Actions : tests, couverture, lint, analyse de sécurité, build, déploiement avec healthcheck et rollback automatique",
            "Nginx, TLS/Certbot, Alembic, sauvegardes PostgreSQL, observabilité Sentry/UptimeRobot",
            "Provisioning et DNS via Terraform, automatisation système via Ansible",
            "Environnement Kubernetes/Minikube séparé de la production pour expérimenter scalabilité et auto-guérison",
          ],
        },
        {
          heading: "IA en cours",
          bullets: [
            "Agent vocal en wolof pour exécuter des actions métier dans la plateforme, architecture RAG et orchestration LangChain/LangGraph",
          ],
        },
      ],
      stack: "Python, FastAPI, SQLAlchemy, PostgreSQL, Redis, React, Next.js, TypeScript, Docker, GitHub Actions, Nginx, Terraform, Ansible, Kubernetes",
    },
    {
      title: "3S Agentic IA, Plateforme multi-agents IA (En cadrage)",
      date: "En cadrage",
      company: "3S Tech & IA · Projet personnel",
      synthese: "Plateforme multi-agents destinée à automatiser différentes fonctions métier : marketing, prospection, service client, création de contenu, reporting, recrutement. Cahier des charges fonctionnel et technique finalisé, maquettes et design réalisés.",
      stack: "Architecture cible : N8N, FastAPI, PostgreSQL, Docker, LangGraph, RAG, APIs LLM",
    },
    {
      title: "Jang Anglais, Application éducative trilingue (En cadrage)",
      date: "En cadrage",
      company: "3S Tech & IA · Projet personnel",
      synthese: "Application mobile destinée aux enfants de 5 à 13 ans pour l'apprentissage de l'anglais à partir du wolof et du français, combinant reconnaissance vocale et NLP. Cahier des charges et maquettes réalisés.",
      stack: "Architecture envisagée : React Native, Speech-to-Text, NLP",
    },
    {
      title: "3S Design, Agence digitale",
      date: "2022 – Présent",
      company: "Fondatrice",
      bullets: [
        "Identités visuelles, sites vitrine, contenus vidéo et digitalisation pour TPE/PME",
      ],
    },
  ],

  formation: [
    {
      title: "Cycle Ingénieur Informatique & Applications",
      date: "2023 – Sept. 2026",
      company: "ESIEE Paris · Marne-la-Vallée · Apprentissage",
      bullets: [],
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

  certifications: [
    { name: "Neo4j Certified Professional", issuer: "Neo4j GraphAcademy", date: "2026" },
    { name: "Neo4j GraphAcademy, Fundamentals", issuer: "Neo4j GraphAcademy", date: "2026" },
    { name: "Claude Code in Action", issuer: "Anthropic Academy", date: "2026" },
  ],

  projetsAcademiques: [
    {
      title: "DevOps / Cloud-Native, CI/CD & Kubernetes",
      company: "ESIEE Paris · Projet d'équipe",
      synthese: "Chaîne CI/CD complète sur une application Node.js : conteneurisation Docker, GitHub Actions, Terraform et préparation de l'orchestration Kubernetes.",
      stack: "Node.js, Docker, Kubernetes, Terraform, GitHub Actions",
    },
    {
      title: "Machine Learning & Deep Learning",
      company: "ESIEE Paris · Projet individuel/équipe",
      synthese: "Construction et entraînement de CNN pour la classification d'images sur MNIST, Dogs vs Cats et Intel Image Classification, avec évaluation par accuracy, precision, recall et F1-score.",
      stack: "Python, TensorFlow, Keras, Scikit-learn",
    },
    {
      title: "Réalité Virtuelle, Musée d'Empathie",
      company: "ESIEE Paris · Projet d'équipe",
      synthese: "Conception d'une expérience VR immersive avec Unity et C#, incluant scène 3D et interactions déclenchées par événements.",
      stack: "Unity, C#",
    },
  ],

  competences: [
    ["IA Générative & Agentique", "N8N, LangChain, LangGraph, RAG, Prompt Engineering, Agents IA, Orchestration multi-agents, Claude API, OpenAI API, MCP, Ollama"],
    ["Backend", "Python, FastAPI, SQLAlchemy, Node.js, Express.js, REST API, Odoo Framework"],
    ["Frontend", "React, Next.js, TypeScript, Tailwind CSS"],
    ["DevOps & Cloud", "Docker, Docker Compose, Git, GitHub Actions, Terraform, Ansible, Kubernetes, Nginx, Certbot, Linux, VPS/OVH"],
    ["Bases de données", "PostgreSQL, Redis, MongoDB, Neo4j"],
    ["Machine Learning", "TensorFlow, Keras, Scikit-learn, CNN"],
    ["Observabilité", "Sentry, UptimeRobot"],
    ["Développement assisté par IA", "Claude Code, Cursor, GitHub Copilot, Windsurf, ChatGPT"],
  ],

  langues: [
    { lang: "Français :", level: "courant, langue de travail" },
    { lang: "Anglais :", level: "intermédiaire (B1/B2)" },
    { lang: "Wolof :", level: "langue maternelle" },
  ],
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
      const marginX = 16;
      const marginBottom = 13;
      const contentWidth = pageWidth - marginX * 2;
      const purple = [124, 58, 237] as const;
      const dark = [15, 23, 42] as const;
      const gray = [51, 65, 85] as const;
      const grayLight = [100, 116, 139] as const;

      let y = 14;

      const ensureSpace = (needed: number) => {
        if (y + needed > pageHeight - marginBottom) {
          doc.addPage();
          y = 14;
        }
      };

      const addWrapped = (text: string, opts: { size: number; color: readonly [number, number, number]; bold?: boolean; gap?: number; indent?: number; lineHeight?: number; width?: number; x?: number }) => {
        doc.setFont("helvetica", opts.bold ? "bold" : "normal");
        doc.setFontSize(opts.size);
        doc.setTextColor(opts.color[0], opts.color[1], opts.color[2]);
        const indent = opts.indent ?? 0;
        const width = opts.width ?? contentWidth;
        const x = opts.x ?? marginX;
        const lines: string[] = doc.splitTextToSize(text, width - indent);
        const lh = opts.lineHeight ?? opts.size * 0.42;
        ensureSpace(lines.length * lh);
        for (const line of lines) {
          doc.text(line, x + indent, y);
          y += lh;
        }
        y += opts.gap ?? 0;
      };

      /* Paragraphe avec libellé coloré en tête de ligne (ex: "Synthèse : ...") */
      const addLabeledParagraph = (label: string, text: string, size = 8.3, lh = 3.7, gap = 1.8) => {
        const prefix = `${label} : `;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(size);
        const lines: string[] = doc.splitTextToSize(prefix + text, contentWidth);
        ensureSpace(lines.length * lh);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(purple[0], purple[1], purple[2]);
        doc.text(prefix, marginX, y);
        const prefixWidth = doc.getTextWidth(prefix);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(gray[0], gray[1], gray[2]);
        doc.text(lines[0].slice(prefix.length), marginX + prefixWidth, y);
        y += lh;
        for (let i = 1; i < lines.length; i++) {
          doc.text(lines[i], marginX, y);
          y += lh;
        }
        y += gap;
      };

      const addBullets = (items: string[]) => {
        for (const item of items) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(gray[0], gray[1], gray[2]);
          const lines: string[] = doc.splitTextToSize(item, contentWidth - 4.5);
          const lh = 3.4;
          ensureSpace(lines.length * lh);
          doc.text("-", marginX, y);
          for (let i = 0; i < lines.length; i++) {
            doc.text(lines[i], marginX + 3.5, y);
            y += lh;
          }
        }
        y += 1;
      };

      const addSectionTitle = (title: string) => {
        ensureSpace(7);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(purple[0], purple[1], purple[2]);
        doc.text(title.toUpperCase(), marginX, y);
        y += 1.6;
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.25);
        doc.line(marginX, y, marginX + contentWidth, y);
        y += 3.6;
      };

      const addSubheading = (text: string) => {
        ensureSpace(4.5);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.6);
        doc.setTextColor(dark[0], dark[1], dark[2]);
        doc.text(text, marginX, y);
        y += 3.7;
      };

      const addProjectContent = (item: ProjectContent) => {
        if (item.synthese) addLabeledParagraph("Synthèse", item.synthese);
        if (item.bullets && item.bullets.length) addBullets(item.bullets);
        if (item.sections && item.sections.length) {
          ensureSpace(4);
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8.3);
          doc.setTextColor(purple[0], purple[1], purple[2]);
          doc.text("Réalisations :", marginX, y);
          y += 3.6;
          for (const sec of item.sections) {
            addSubheading(sec.heading);
            addBullets(sec.bullets);
          }
        }
        if (item.stack) addLabeledParagraph("Environnement technique", item.stack, 8, 3.4, 1);
      };

      const addExpHeader = (title: string, date: string, company: string) => {
        ensureSpace(8);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.3);
        doc.setTextColor(dark[0], dark[1], dark[2]);
        doc.text(title, marginX, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(grayLight[0], grayLight[1], grayLight[2]);
        doc.text(date, marginX + contentWidth, y, { align: "right" });
        y += 3.9;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.2);
        doc.setTextColor(purple[0], purple[1], purple[2]);
        doc.text(company, marginX, y);
        y += 4;
      };

      const addExpBlock = (item: ExpItem) => {
        addExpHeader(item.title, item.date, item.company);
        addProjectContent(item);
        y += 1.8;
      };

      // ── En-tête ──
      doc.setFont("helvetica", "bold");
      doc.setFontSize(17);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.text(cvData.name, marginX, y);
      y += 6;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(purple[0], purple[1], purple[2]);
      doc.text(cvData.title, marginX, y);
      y += 5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.3);
      doc.setTextColor(gray[0], gray[1], gray[2]);
      doc.textWithLink(cvData.email, marginX, y, { url: `mailto:${cvData.email}` });
      const emailWidth = doc.getTextWidth(cvData.email);
      doc.text("   ·   ", marginX + emailWidth, y);
      const sepWidth = doc.getTextWidth("   ·   ");
      doc.textWithLink(cvData.phone, marginX + emailWidth + sepWidth, y, { url: `tel:${cvData.phone.replace(/\s/g, "")}` });
      const phoneWidth = doc.getTextWidth(cvData.phone);
      doc.text(`   ·   ${cvData.location}`, marginX + emailWidth + sepWidth + phoneWidth, y);
      y += 3.2;

      doc.setDrawColor(purple[0], purple[1], purple[2]);
      doc.setLineWidth(0.6);
      doc.line(marginX, y, marginX + contentWidth, y);
      y += 5;

      // ── Profil ──
      addSectionTitle("Profil");
      for (const p of cvData.profil) {
        addWrapped(p, { size: 8.3, color: gray, gap: 1.4, lineHeight: 3.6 });
      }
      y += 1;

      // ── Expérience ──
      addSectionTitle("Expérience Professionnelle");
      for (const exp of cvData.experience) addExpBlock(exp);

      // ── Projets personnels & produits ──
      addSectionTitle("Projets Personnels & Produits");
      for (const proj of cvData.produits) addExpBlock(proj);

      // ── Formation (une ligne par diplôme) ──
      addSectionTitle("Formation");
      for (const f of cvData.formation) {
        ensureSpace(4.2);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.6);
        doc.setTextColor(dark[0], dark[1], dark[2]);
        doc.text(f.title, marginX, y);
        const titleWidth = doc.getTextWidth(f.title);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(gray[0], gray[1], gray[2]);
        const rest = ` · ${f.company} (${f.date})`;
        const lines: string[] = doc.splitTextToSize(rest, contentWidth - titleWidth);
        doc.text(lines[0], marginX + titleWidth, y);
        y += 3.6;
        for (let i = 1; i < lines.length; i++) {
          doc.text(lines[i], marginX, y);
          y += 3.6;
        }
        y += 0.6;
      }
      y += 1;

      // ── Certifications ──
      addSectionTitle("Certifications");
      for (const cert of cvData.certifications) {
        ensureSpace(4);
        addWrapped(`${cert.name}, ${cert.issuer} (${cert.date})`, { size: 8.3, color: gray, gap: 0.7, lineHeight: 3.5 });
      }
      y += 0.8;

      // ── Projets académiques ──
      addSectionTitle("Projets Académiques");
      for (const proj of cvData.projetsAcademiques) {
        ensureSpace(6);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.7);
        doc.setTextColor(dark[0], dark[1], dark[2]);
        doc.text(proj.title, marginX, y);
        y += 3.7;
        doc.setFont("helvetica", "italic");
        doc.setFontSize(7.8);
        doc.setTextColor(purple[0], purple[1], purple[2]);
        doc.text(proj.company, marginX, y);
        y += 3.8;
        addWrapped(proj.synthese, { size: 8, color: gray, gap: 1, lineHeight: 3.4 });
        addWrapped(`Stack : ${proj.stack}`, { size: 7.6, color: grayLight, gap: 1.4, lineHeight: 3.2 });
      }

      // ── Compétences (2 colonnes) ──
      addSectionTitle("Compétences Techniques");
      const colGap = 6;
      const colWidth = (contentWidth - colGap) / 2;
      const measureCompetenceHeight = (cat: string, techs: string) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.2);
        const catWidth = doc.getTextWidth(`${cat} :`) + 1.3;
        doc.setFont("helvetica", "normal");
        const lines: string[] = doc.splitTextToSize(techs, colWidth - catWidth);
        return lines.length * 3.3 + 0.8;
      };
      const renderCompetenceCell = (cat: string, techs: string, x: number, startY: number) => {
        let cy = startY;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.2);
        doc.setTextColor(dark[0], dark[1], dark[2]);
        doc.text(`${cat} :`, x, cy);
        const catWidth = doc.getTextWidth(`${cat} :`) + 1.3;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(gray[0], gray[1], gray[2]);
        const lines: string[] = doc.splitTextToSize(techs, colWidth - catWidth);
        doc.text(lines[0] ?? "", x + catWidth, cy);
        cy += 3.3;
        for (let i = 1; i < lines.length; i++) {
          doc.text(lines[i], x + catWidth, cy);
          cy += 3.3;
        }
        return cy + 0.8;
      };
      // Répartition équilibrée en 2 colonnes indépendantes (comme un CSS column-count: 2),
      // chaque colonne se remplit à son propre rythme plutôt que d'être appariée ligne à ligne.
      const leftCol: [string, string][] = [];
      const rightCol: [string, string][] = [];
      let leftH = 0, rightH = 0;
      for (const entry of cvData.competences) {
        const h = measureCompetenceHeight(entry[0], entry[1]);
        if (leftH <= rightH) { leftCol.push(entry); leftH += h; }
        else { rightCol.push(entry); rightH += h; }
      }
      ensureSpace(Math.max(leftH, rightH));
      const startY = y;
      let leftY = startY;
      for (const [cat, techs] of leftCol) leftY = renderCompetenceCell(cat, techs, marginX, leftY);
      let rightY = startY;
      for (const [cat, techs] of rightCol) rightY = renderCompetenceCell(cat, techs, marginX + colWidth + colGap, rightY);
      y = Math.max(leftY, rightY);
      y += 1.6;

      // ── Langues ──
      addSectionTitle("Langues");
      addWrapped(cvData.langues.map((l) => `${l.lang} ${l.level}`).join("   ·   "), { size: 8.3, color: gray, gap: 0, lineHeight: 3.6 });

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
          @page { size: A4; margin: 1.5cm; }
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
        padding: "0.5cm 1.8cm 2cm",
        background: "#ffffff",
        boxShadow: "0 4px 40px rgba(0,0,0,0.12)",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "9pt",
        lineHeight: 1.4,
        color: "#1a1a1a",
      }}>

        {/* En-tête */}
        <header style={{ borderBottom: "2px solid #7c3aed", paddingBottom: "0.6rem", marginBottom: "0.9rem" }}>
          <h1 style={{ fontSize: "17pt", fontWeight: 900, margin: "0 0 0.15rem 0", color: "#0f172a", letterSpacing: "-0.5px" }}>
            {cvData.name}
          </h1>
          <p style={{ fontSize: "10.5pt", fontWeight: 700, color: "#7c3aed", margin: "0 0 0.5rem 0" }}>
            {cvData.title}
          </p>
          <p style={{ margin: 0, fontSize: "8.3pt", color: "#334155", lineHeight: 1.5 }}>
            <a href={`mailto:${cvData.email}`} style={{ color: "#334155", textDecoration: "none" }}>{cvData.email}</a>
            {" · "}<a href={`tel:${cvData.phone.replace(/\s/g, "")}`} style={{ color: "#334155", textDecoration: "none" }}>{cvData.phone}</a>
            {" · "}{cvData.location}
          </p>
        </header>

        {/* Profil */}
        <section style={{ marginBottom: "1.15rem" }}>
          <h2 style={sectionTitle}>Profil</h2>
          {cvData.profil.map((p, i) => (
            <p key={i} style={{ margin: i === cvData.profil.length - 1 ? 0 : "0 0 0.4rem 0" }}>{p}</p>
          ))}
        </section>

        {/* Expérience professionnelle */}
        <section style={{ marginBottom: "1.15rem" }}>
          <h2 style={sectionTitle}>Expérience Professionnelle</h2>
          {cvData.experience.map((exp) => (
            <div key={exp.title} className="exp-block" style={expBlock}>
              <div style={expHeader}>
                <span style={expTitle}>{exp.title}</span>
                <span style={expDate}>{exp.date}</span>
              </div>
              <p style={expCompany}>{exp.company}</p>
              <ProjectContentView item={exp} />
            </div>
          ))}
        </section>

        {/* Projets personnels & produits */}
        <section style={{ marginBottom: "1.15rem" }}>
          <h2 style={sectionTitle}>Projets Personnels & Produits</h2>
          {cvData.produits.map((proj) => (
            <div key={proj.title} className="exp-block" style={expBlock}>
              <div style={expHeader}>
                <span style={expTitle}>{proj.title}</span>
                <span style={expDate}>{proj.date}</span>
              </div>
              <p style={expCompany}>{proj.company}</p>
              <ProjectContentView item={proj} />
            </div>
          ))}
        </section>

        {/* Formation */}
        <section style={{ marginBottom: "1.15rem" }}>
          <h2 style={sectionTitle}>Formation</h2>
          {cvData.formation.map((f) => (
            <p key={f.title} style={{ margin: "0 0 0.3rem 0" }}>
              <strong style={{ color: "#0f172a", fontSize: "8.8pt" }}>{f.title}</strong>
              <span style={{ color: "#334155" }}> · {f.company} ({f.date})</span>
            </p>
          ))}
        </section>

        {/* Certifications */}
        <section style={{ marginBottom: "1.15rem" }}>
          <h2 style={sectionTitle}>Certifications</h2>
          <ul style={{ ...list, listStyleType: "'- '" }}>
            {cvData.certifications.map((cert) => (
              <li key={cert.name}>{cert.name}, {cert.issuer} ({cert.date})</li>
            ))}
          </ul>
        </section>

        {/* Projets académiques */}
        <section style={{ marginBottom: "1.15rem" }}>
          <h2 style={sectionTitle}>Projets Académiques</h2>
          {cvData.projetsAcademiques.map((proj) => (
            <div key={proj.title} className="exp-block" style={expBlock}>
              <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "9pt", margin: "0 0 0.1rem 0" }}>{proj.title}</p>
              <p style={{ ...expCompany, fontStyle: "italic" }}>{proj.company}</p>
              <p style={{ margin: "0 0 0.2rem 0" }}>{proj.synthese}</p>
              <p style={{ margin: 0, fontSize: "7.8pt", color: "#64748b" }}>Stack : {proj.stack}</p>
            </div>
          ))}
        </section>

        {/* Compétences techniques (2 colonnes) */}
        <section style={{ marginBottom: "0.9rem" }}>
          <h2 style={sectionTitle}>Compétences Techniques</h2>
          <div style={{ columnCount: 2, columnGap: "1.2rem" }}>
            {cvData.competences.map(([cat, techs]) => (
              <p key={cat} style={{ margin: "0 0 0.35rem 0", fontSize: "8.3pt", breakInside: "avoid" }}>
                <strong style={{ color: "#0f172a" }}>{cat} :</strong> <span style={{ color: "#334155" }}>{techs}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Langues */}
        <section style={{ marginBottom: "0.3rem" }}>
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

      </div>
    </>
  );
}

/* ── Rendu du contenu d'un projet (Synthèse / Réalisations / Environnement technique) ── */
function ProjectContentView({ item }: { item: ProjectContent }) {
  return (
    <>
      {item.synthese && (
        <p style={{ margin: "0 0 0.3rem 0" }}>
          <strong style={inlineLabel}>Synthèse : </strong>{item.synthese}
        </p>
      )}
      {item.bullets && item.bullets.length > 0 && (
        <ul style={list}>
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {item.sections && item.sections.length > 0 && (
        <>
          <span style={blockLabel}>Réalisations :</span>
          {item.sections.map((sec) => (
            <div key={sec.heading} style={{ marginBottom: "0.3rem" }}>
              <p style={subHeading}>{sec.heading}</p>
              <ul style={list}>
                {sec.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </>
      )}
      {item.stack && (
        <p style={{ margin: 0, color: "#475569" }}>
          <strong style={inlineLabel}>Environnement technique : </strong>{item.stack}
        </p>
      )}
    </>
  );
}

/* ── Styles réutilisables ── */
const sectionTitle: React.CSSProperties = {
  fontSize: "9.5pt",
  fontWeight: 800,
  color: "#7c3aed",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  borderBottom: "1px solid #e2e8f0",
  paddingBottom: "0.15rem",
  marginBottom: "0.45rem",
  marginTop: 0,
};

const expBlock: React.CSSProperties = {
  marginBottom: "0.85rem",
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
  fontSize: "8.8pt",
};

const expDate: React.CSSProperties = {
  fontSize: "7.8pt",
  color: "#64748b",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const expCompany: React.CSSProperties = {
  color: "#7c3aed",
  fontSize: "8pt",
  fontWeight: 600,
  margin: "0.05rem 0 0.25rem 0",
};

const list: React.CSSProperties = {
  margin: "0.1rem 0 0.3rem 0",
  paddingLeft: "1.2rem",
  color: "#334155",
  listStyleType: "disc",
};

const blockLabel: React.CSSProperties = {
  display: "block",
  fontSize: "8pt",
  fontWeight: 800,
  color: "#7c3aed",
  margin: "0.3rem 0 0.15rem 0",
};

const inlineLabel: React.CSSProperties = {
  color: "#7c3aed",
};

const subHeading: React.CSSProperties = {
  fontWeight: 700,
  color: "#0f172a",
  fontSize: "8.4pt",
  margin: "0.2rem 0 0.05rem 0",
};
