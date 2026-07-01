"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, CheckCircle2 } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

type Category = "Tous" | "ESIEE Paris" | "Kilifa Consulting" | "3S Tech & IA";
type StatusType = "En production" | "En cours" | "Terminé" | "En lancement";

interface ProjectDetail {
  title: string;
  category: Exclude<Category, "Tous">;
  year?: string;
  context: string;
  period: string;
  status: StatusType;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  color: string;
  features?: string[];
  link?: string;
  github?: string;
}

const projects: ProjectDetail[] = [
  {
    title: "3S POS System",
    category: "3S Tech & IA",
    context: "3S Tech & IA",
    period: "2024 — En cours",
    status: "En lancement",
    color: "#0ea5e9",
    shortDesc: "SaaS de gestion de point de vente développé en solo, du code à la mise en production sur VPS.",
    fullDesc: "3S POS System est une solution SaaS complète de gestion des ventes, conçue pour s'adapter à tous les types de commerces : épiceries, boutiques, restaurants, et pharmacies (avec terminaux dédiés). Développé de A à Z en solo — architecture, frontend, backend, base de données, déploiement — et actuellement en phase de test final avant lancement officiel.",
    challenge: "Créer une solution POS accessible, polyvalente et robuste pour le marché africain (Sénégal en priorité), là où les solutions existantes sont soit trop chères, soit inadaptées aux réalités locales.",
    solution: "Architecture fullstack React/Node.js/PostgreSQL déployée sur VPS, avec une interface simple et rapide, un module pharmacie spécialisé avec gestion des médicaments et ordonnances, et un dashboard analytics en temps réel.",
    impact: "Projet en phase de test (1 mois) avant lancement. Déjà fonctionnel en production sur VPS. Cible : commerces sénégalais et africains cherchant à digitaliser leur gestion des ventes.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "VPS", "TypeScript", "REST API", "JWT Auth"],
    features: ["Caisse enregistreuse avec reçus imprimables", "Gestion des stocks en temps réel avec alertes", "Module pharmacie avec gestion des médicaments et ordonnances", "Terminaux POS physiques connectés", "Dashboard analytics (ventes, stocks, tendances)", "Gestion multi-utilisateurs avec rôles", "Exports CSV/PDF des rapports", "Interface responsive mobile/tablette"],
  },
  {
    title: "3S AGENTIC IA",
    category: "3S Tech & IA",
    context: "3S Tech & IA",
    period: "2026 — En cours",
    status: "En cours",
    color: "#0d9488",
    shortDesc: "Plateforme d'agents IA aux prénoms sénégalais pour automatiser les tâches des entreprises africaines et mondiales — 12 agents spécialisés, support wolof, téléphonie africaine.",
    fullDesc: "3S Agentic IA est une plateforme multi-agents IA avec une identité culturelle forte : chaque agent porte un prénom sénégalais. Conçue pour automatiser les tâches quotidiennes des entreprises africaines et mondiales 24h/24, 7j/7. Vision : créer la version africaine des grandes plateformes d'agents IA, avec le support du wolof et une architecture pensée pour les réalités africaines.",
    challenge: "Les plateformes d'agents IA existantes (Limova.ai, Agentova) sont pensées pour le marché occidental : noms occidentaux, pas de support wolof, pas de téléphonie africaine, pas d'agent vidéo. Le marché africain est inexploité malgré un besoin réel d'automatisation.",
    solution: "12 agents spécialisés (Fatou-Marketing, Koumba-CM, Sokhna-Vidéo, Ousmane-Téléphonie…), orchestrés via n8n, avec support wolof via Kàllaama (open-source), téléphonie africaine via Infobip (+221 Sénégal), génération vidéo via Veo 3 + Gemini, et clonage de voix via Fish Audio.",
    impact: "Projet en cours de développement (Phase 1). Différenciation forte vs concurrents : seule plateforme avec agent vidéo IA, support wolof natif, téléphonie africaine et ancrage culturel sénégalais.",
    stack: ["Python", "FastAPI", "n8n", "Next.js", "PostgreSQL", "Docker", "OpenAI API", "Gemini API", "VAPI", "Twilio", "Infobip", "ElevenLabs", "Veo 3", "LangChain"],
    features: [
      "Fatou (Marketing) — campagnes pub, logos, identité visuelle",
      "Koumba (Community Manager) — réseaux sociaux, planning éditorial",
      "Sokhna (Vidéo & Création) — génération vidéo IA, voix off, montage",
      "Ousmane (Téléphonie) — appels entrants/sortants, RDV, SAV vocal",
      "Aminata (Prospection) — leads, LinkedIn, cold calling",
      "Babacar (Service Client) — emails, WhatsApp, chatbot multicanal",
      "Moussa (Rédacteur SEO) — articles, newsletters, optimisation SEO",
      "Adja (Comptable) — devis, factures, relances paiement",
      "Support wolof natif via Kàllaama (open-source sénégalais)",
      "Téléphonie africaine via Infobip (numéros +221 Sénégal)",
      "Clonage de voix via Fish Audio — multilingue FR/EN/Wolof",
      "Architecture modulaire : 1 agent = 1 conteneur Docker indépendant",
    ],
  },
  {
    title: "Jang Anglais",
    category: "3S Tech & IA",
    context: "3S Tech & IA",
    period: "2026 — En cours",
    status: "En cours",
    color: "#d97706",
    shortDesc: "Application éducative trilingue (Wolof, Français, Anglais) pour enfants de 5 à 13 ans — apprendre l'anglais en jouant, inspirée de l'intégration de l'anglais dans le primaire au Sénégal.",
    fullDesc: "Jang Anglais (\"apprendre\" en wolof) est une application mobile éducative née d'une opportunité concrète : l'État du Sénégal a intégré l'enseignement de l'anglais dès le primaire. L'idée : créer une app trilingue wolof/français/anglais permettant aux enfants de 5 à 13 ans d'apprendre l'anglais de façon interactive et ludique, dans leur langue maternelle.",
    challenge: "Les enfants sénégalais ont besoin d'apprendre l'anglais mais les applications existantes (Duolingo, etc.) sont pensées pour des adultes ou des enfants occidentaux — pas de support wolof, pas d'ancrage culturel africain, pas adapté aux tranches d'âge du primaire sénégalais.",
    solution: "Application mobile gamifiée trilingue : l'enfant choisit son interface en wolof ou français, puis apprend l'anglais via des mini-jeux, des histoires interactives, des exercices audio et des niveaux progressifs adaptés à chaque tranche d'âge (5-7, 8-10, 11-13 ans).",
    impact: "Projet en cours de développement. Cible prioritaire : les élèves du primaire sénégalais concernés par la nouvelle réforme éducative. Potentiel d'extension à toute l'Afrique de l'Ouest francophone.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Python", "NLP", "Speech-to-Text", "Kàllaama", "Expo", "Firebase"],
    features: [
      "Interface trilingue — Wolof, Français, Anglais",
      "Adapté par tranche d'âge : 5-7 ans, 8-10 ans, 11-13 ans",
      "Mini-jeux interactifs pour apprendre le vocabulaire",
      "Exercices audio — prononciation et écoute",
      "Histoires animées en anglais avec traduction",
      "Système de récompenses et progression gamifiée",
      "Mode hors-ligne pour zones à faible connectivité",
      "Support wolof natif — langue maternelle de l'enfant",
    ],
  },
  {
    title: "Services IA Vocaux",
    category: "3S Tech & IA",
    context: "3S Tech & IA",
    period: "2025 — En cours",
    status: "En cours",
    color: "#7c3aed",
    shortDesc: "Agents IA vocaux adaptés aux langues et réalités du marché sénégalais et africain.",
    fullDesc: "Développement de services d'intelligence artificielle vocale adaptés aux langues et réalités du marché sénégalais et africain. Ce projet vise à démocratiser l'accès aux outils numériques via la voix, en intégrant des langues locales (wolof, français) dans des agents conversationnels.",
    challenge: "La majorité des solutions IA vocales ne supportent pas les langues africaines et sont conçues pour des contextes occidentaux, laissant une grande partie de la population sans accès à ces technologies.",
    solution: "Développement d'agents IA vocaux intégrant le NLP en français et wolof, avec une architecture légère compatible avec les appareils bas de gamme et les connexions limitées.",
    impact: "Projet en cours de développement. Objectif : permettre aux commerçants africains d'interagir avec leurs outils numériques via la voix dans leur langue maternelle.",
    stack: ["Python", "FastAPI", "NLP", "Speech-to-Text", "TensorFlow", "REST API", "Docker"],
    features: ["Reconnaissance vocale en français et wolof", "Agent conversationnel pour gestion de commerce", "Interface vocale pour 3S POS System", "Compatible appareils Android bas de gamme"],
  },
  {
    title: "3S Design — Digitalisation PME",
    category: "3S Tech & IA",
    context: "3S Design",
    period: "2022 — Présent",
    status: "En cours",
    color: "#db2777",
    shortDesc: "Agence digitale : identités visuelles, sites vitrine, vidéos publicitaires pour TPE/PME.",
    fullDesc: "3S Design est une agence digitale fondée en 2022, spécialisée dans l'accompagnement des mini-entreprises et TPE/PME dans leur transformation numérique. En 3 ans d'activité, j'ai aidé des dizaines d'entrepreneurs à construire leur image de marque et digitaliser leurs services.",
    challenge: "Les petites entreprises africaines n'ont souvent pas accès à des agences de communication professionnelles, faute de budget ou de proximité.",
    solution: "Offre complète et accessible : identité visuelle, supports print et digitaux, vidéos publicitaires, sites vitrine, et outils de gestion (factures numériques, catalogues).",
    impact: "3 ans d'activité continue. Dizaines de clients accompagnés. Clientèle fidèle développée par le bouche-à-oreille.",
    stack: ["Figma", "Adobe Illustrator", "Premiere Pro", "After Effects", "WordPress", "HTML/CSS", "Canva Pro"],
    features: ["Logos et identités visuelles complètes", "Affiches, flyers, cartes de visite", "Vidéos publicitaires et motion design", "Sites vitrine clé en main", "Factures numériques et catalogues produits", "Accompagnement stratégie digitale"],
  },
  {
    title: "Intégration Odoo — Modules RH & Accès",
    category: "Kilifa Consulting",
    year: "Année 1",
    context: "Kilifa Consulting",
    period: "2023 — 2024",
    status: "Terminé",
    color: "#7c3aed",
    shortDesc: "Paramétrage et personnalisation des modules Employé, Congé et droits d'accès dans l'ERP Odoo 17 déployé via Docker.",
    fullDesc: "En première année d'alternance au sein du pôle IT de Kilifa Consulting, j'ai participé à l'intégration des premiers modules de l'ERP Odoo 17 Community déployé via Docker sur l'infrastructure de l'entreprise. Mon rôle était principalement d'intégratrice et développeuse, encadrée par mon maître d'apprentissage.",
    challenge: "L'entreprise démarrait sa transformation numérique sans outil centralisé. L'enjeu était de déployer un ERP adapté aux processus internes sans perturber l'activité quotidienne.",
    solution: "Déploiement d'Odoo 17 Community via Docker, personnalisation du module Employé (centralisation des données collaborateurs), du module Congé (demandes & validations), et configuration fine des droits d'accès par profil utilisateur.",
    impact: "Mise en place réussie de la base RH de l'ERP. Les modules sont opérationnels et utilisés quotidiennement par les équipes. Fondation posée pour les développements des années suivantes.",
    stack: ["Python", "Odoo Framework", "Docker", "PostgreSQL", "Linux", "XML", "GitHub"],
    features: ["Module Employé — centralisation des données collaborateurs", "Module Congé — gestion des demandes et validations", "Configuration des droits d'accès par profil utilisateur", "Containerisation Odoo avec Docker", "Déploiement sur infrastructure cloud de l'entreprise"],
  },
  {
    title: "Module Payroll — Gestion des Fiches de Paie",
    category: "Kilifa Consulting",
    year: "Année 2",
    context: "Kilifa Consulting",
    period: "2024 — 2025",
    status: "Terminé",
    color: "#7c3aed",
    shortDesc: "Développement from scratch d'un module complet de gestion de la paie pour internaliser le calcul des bulletins de salaire.",
    fullDesc: "En deuxième année, ma fonction a évolué vers un rôle davantage orienté développement avec une autonomie plus importante. J'ai développé un module de fiche de paie complet permettant à Kilifa Consulting d'internaliser le calcul et la génération des bulletins de salaire, jusque-là externalisés.",
    challenge: "L'entreprise externalisait la gestion de la paie, ce qui engendrait des coûts et des délais. Il fallait développer un module sur mesure intégré à l'ERP existant, avec des règles de calcul personnalisées et une gestion fine des données RH sensibles.",
    solution: "Développement from scratch d'un module Payroll en Python/Odoo Framework avec personnalisation des règles de calcul, gestion des cotisations, génération des bulletins de paie en PDF, et contrôle d'accès strict sur les données salariales.",
    impact: "Le module est en production et gère toutes les fiches de paie de l'entreprise. Réduction significative du temps de traitement RH et internalisation complète de la gestion de la paie.",
    stack: ["Python", "Odoo Framework", "PostgreSQL", "XML", "Docker", "GitHub", "Linux"],
    features: ["Calcul automatique des salaires avec règles personnalisées", "Génération des bulletins de paie en PDF", "Gestion des cotisations et retenues", "Contrôle d'accès strict sur les données salariales", "Intégration native avec les modules RH existants", "Historique et archivage des fiches de paie"],
  },
  {
    title: "Plateforme Multi-Agents IA Commerciale",
    category: "Kilifa Consulting",
    year: "Année 3",
    context: "Kilifa Consulting",
    period: "2025 — 2026",
    status: "En production",
    color: "#7c3aed",
    shortDesc: "Plateforme intelligente développée en solo pour automatiser la prospection commerciale, la veille des appels d'offres et le matching d'experts.",
    fullDesc: "En troisième année, la direction m'a confié la responsabilité de concevoir et développer une plateforme multi-agents IA destinée à automatiser la prospection commerciale et la veille des appels d'offres. J'ai piloté l'ensemble du cycle : analyse du besoin, architecture, développement, tests et documentation. Ce projet constitue l'objet de mon mémoire de fin d'études.",
    challenge: "Kilifa Consulting perdait des opportunités commerciales faute d'un système de veille structuré. La prospection et la surveillance des marchés (BOAMP, France Travail, TED) étaient chronophages et manuelles.",
    solution: "Architecture multi-agents IA : 9 workflows N8N, 14 agents spécialisés, moteur de prospection B2B et moteur de veille des appels d'offres publics, CRM web Next.js, scoring IA 0-100, génération de lettres via Claude API.",
    impact: "20 offres qualifiées détectées, 13 candidatures générées, score matching 95/100. Rapport hebdomadaire automatique par email, monitoring temps réel des agents via Socket.IO.",
    stack: ["N8N", "Express.js TypeScript", "Next.js", "PostgreSQL", "Prisma", "API Claude (Anthropic)", "Brevo", "Docker", "JWT", "Socket.IO"],
    features: ["Agent prospection — détection automatique de nouveaux clients potentiels", "Agent veille — monitoring BOAMP, France Travail, TED Europe", "Moteur de matching IA experts ↔ marchés (score 95/100)", "CRM web avec tableau de bord temps réel", "Génération automatique de lettres de motivation (Claude API)", "Notifications automatiques aux équipes commerciales", "Monitoring erreurs agents en temps réel (Socket.IO)", "Documentation technique complète (mémoire ingénieur)"],
  },
  {
    title: "Projet DevSecOps Cloud-Native",
    category: "ESIEE Paris",
    context: "ESIEE Paris",
    period: "Fév. 2026",
    status: "Terminé",
    color: "#d97706",
    shortDesc: "Web service REST en Node.js avec Docker, Kubernetes et Infrastructure as Code via Terraform.",
    fullDesc: "Projet académique de mise en pratique des concepts DevSecOps et Cloud-Native. Développement d'un web service REST complet en Node.js, avec une chaîne DevOps complète : containerisation Docker, orchestration Kubernetes, et Infrastructure as Code via Terraform.",
    challenge: "Concevoir une architecture Cloud-Native robuste intégrant les bonnes pratiques DevSecOps : automatisation, sécurité dès la conception, scalabilité et résilience.",
    solution: "Web service REST en Node.js, dockerisé et déployé sur Kubernetes. Terraform pour provisionner l'infrastructure as code. Pipeline CI/CD avec GitHub Actions.",
    impact: "Maîtrise complète de la chaîne DevOps moderne. Compétences validées en orchestration de conteneurs et IaC.",
    stack: ["Node.js", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "REST API", "Linux"],
    features: ["Web service REST avec authentification", "Dockerfile optimisé multi-stage", "Déploiement Kubernetes avec scaling", "Infrastructure provisionnée via Terraform", "Pipeline CI/CD automatisé", "Tests automatisés intégrés"],
  },
  {
    title: "IA — Machine Learning & Deep Learning",
    category: "ESIEE Paris",
    context: "ESIEE Paris",
    period: "Fév. 2026",
    status: "Terminé",
    color: "#db2777",
    shortDesc: "Comparaison ML vs CNN sur Dogs vs Cats, MNIST et Intel Image Classification.",
    fullDesc: "Implémentation et comparaison rigoureuse de modèles de Machine Learning classique versus CNN sur trois datasets de référence. Évaluation complète des performances selon les métriques standards.",
    challenge: "Comprendre quand le Deep Learning surpasse le ML classique et dans quelles conditions. Optimiser les modèles pour chaque type de données.",
    solution: "Implémentation de modèles ML (SVM, Random Forest, KNN) et de CNN avec TensorFlow/Keras sur les datasets Dogs vs Cats, MNIST et Intel Image Classification. Comparaison selon accuracy, précision, recall et F1-score.",
    impact: "Le CNN surpasse le ML classique sur les images complexes (Dogs vs Cats) mais la différence s'atténue sur des patterns simples (MNIST).",
    stack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "CNN", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    features: ["Modèles ML : SVM, Random Forest, KNN", "CNN custom avec TensorFlow/Keras", "3 datasets : Dogs vs Cats, MNIST, Intel", "Métriques : accuracy, précision, recall, F1", "Visualisations et rapport d'analyse"],
  },
  {
    title: "Réalité Virtuelle — Musée d'Empathie",
    category: "ESIEE Paris",
    context: "ESIEE Paris",
    period: "Juin 2025",
    status: "Terminé",
    color: "#059669",
    shortDesc: "Expérience VR immersive simulant des récits historiques — salle Guerre & salle Naufrage.",
    fullDesc: "Conception et développement d'une expérience de réalité virtuelle immersive baptisée 'Musée d'Empathie'. Le projet vise à faire vivre des récits historiques de l'intérieur, en plaçant le visiteur au cœur de deux environnements distincts.",
    challenge: "Créer une expérience émotionnelle et éducative en VR qui transcende le simple jeu vidéo pour devenir un outil de sensibilisation historique.",
    solution: "Développement sous Unity/C# de deux environnements VR complets avec navigation interactive à la première personne. Déclencheurs narratifs positionnels, design sonore immersif et modélisation 3D.",
    impact: "Expérience immersive complète fonctionnelle. Démonstration de la capacité à livrer un projet créatif et technique avec des contraintes fortes (délai, VR, narration).",
    stack: ["Unity", "C#", "VR SDK", "3D Modeling", "Blender", "Audio Design", "Git"],
    features: ["Salle Guerre : tranchées, sons de bataille, témoignages", "Salle Naufrage : environnement aquatique immersif", "Navigation libre à la première personne", "Déclencheurs narratifs interactifs", "Design sonore spatial 3D"],
  },
];

const categories: Category[] = ["Tous", "3S Tech & IA", "Kilifa Consulting", "ESIEE Paris"];

const statusConfig: Record<StatusType, { color: string; bg: string }> = {
  "En production": { color: "#059669", bg: "#dcfce7" },
  "En cours":      { color: "#d97706", bg: "#fef3c7" },
  "En lancement":  { color: "#0ea5e9", bg: "#e0f2fe" },
  "Terminé":       { color: "#64748b", bg: "#f1f5f9" },
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectDetail; onClose: () => void }) {
  const blocks = [
    { icon: "🎯", label: "Problématique", content: project.challenge, color: "#db2777", bg: "#fdf2f8" },
    { icon: "💡", label: "Solution", content: project.solution, color: "#0ea5e9", bg: "#f0f9ff" },
    { icon: "📈", label: "Impact", content: project.impact, color: "#059669", bg: "#f0fdf4" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "flex-start", justifyContent: "center", overflowY: "auto", background: "rgba(15,23,42,0.6)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ background: "#ffffff", borderRadius: "24px", width: "100%", maxWidth: "680px", margin: "3rem 1rem", boxShadow: "0 32px 80px rgba(15,23,42,0.25)", overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ background: `${project.color}08`, borderBottom: `1px solid ${project.color}18`, padding: "2rem 2rem 1.5rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.9rem" }}>
                <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30` }}>{project.category}</span>
                {project.year && <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0" }}>{project.year}</span>}
                <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: statusConfig[project.status].bg, color: statusConfig[project.status].color }}>{project.status}</span>
              </div>
              <h2 style={{ fontWeight: 900, color: "#0f172a", fontSize: "clamp(1.4rem, 3vw, 1.85rem)", lineHeight: 1.2, marginBottom: "0.4rem" }}>{project.title}</h2>
              <p style={{ fontSize: "0.82rem", color: "#94a3b8", fontWeight: 600 }}>{project.context} · {project.period}</p>
            </div>
            <button onClick={onClose} style={{ width: "38px", height: "38px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", cursor: "pointer", flexShrink: 0, transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#f8fafc"; (e.currentTarget as HTMLElement).style.color = "#0f172a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}>
              <X size={16} />
            </button>
          </div>
        </div>

        <div style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <div>
            <span className="section-label" style={{ marginBottom: "0.6rem" }}>Description</span>
            <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.8 }}>{project.fullDesc}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {blocks.map((b) => (
              <div key={b.label} style={{ display: "flex", gap: "1rem", padding: "1rem 1.1rem", borderRadius: "14px", background: b.bg, border: `1px solid ${b.color}20` }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{b.icon}</div>
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: b.color, marginBottom: "0.3rem" }}>{b.label}</p>
                  <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.75 }}>{b.content}</p>
                </div>
              </div>
            ))}
          </div>
          {project.features && (
            <div>
              <span className="section-label" style={{ marginBottom: "0.75rem" }}>Fonctionnalités</span>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.55rem" }}>
                {project.features.map((feat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.6rem 0.75rem", borderRadius: "10px", background: "#f8fafc", border: "1px solid #f1f5f9" }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: `${project.color}15`, border: `1px solid ${project.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <CheckCircle2 size={10} style={{ color: project.color }} />
                    </div>
                    <span style={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>Stack technique</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.stack.map((tech) => (
                <span key={tech} style={{ padding: "0.3rem 0.85rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600, background: `${project.color}0d`, border: `1px solid ${project.color}28`, color: project.color }}>{tech}</span>
              ))}
            </div>
          </div>
          {(project.link || project.github) && (
            <div style={{ display: "flex", gap: "0.75rem", paddingTop: "1rem", borderTop: "1px solid #f1f5f9" }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0", color: "#475569", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", background: "#ffffff" }}>
                  <GithubIcon /> GitHub
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", borderRadius: "12px", background: "#7c3aed", color: "#ffffff", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none" }}>
                  <ExternalLink size={14} /> Voir le projet
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 1024);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return mobile;
}

/* ── Flip Card ── */
function FlipCard({ project, index, onClick }: { project: ProjectDetail; index: number; onClick: () => void }) {
  const [flipped, setFlipped] = useState(false);
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      style={{ perspective: "1200px", height: isMobile ? "auto" : "360px", cursor: "pointer" }}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      onClick={isMobile ? onClick : undefined}
    >
      <div style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "auto" : "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: !isMobile && flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>

        {/* ── FACE AVANT ── */}
        <div style={{
          position: isMobile ? "relative" : "absolute", inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          background: "#ffffff",
          border: "1px solid #e8edf3",
          borderTop: `4px solid ${project.color}`,
          borderRadius: "20px",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Numéro déco */}
          <span style={{ position: "absolute", top: "0.75rem", right: "1.1rem", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, color: `${project.color}08`, userSelect: "none", pointerEvents: "none" }}>
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
            <span style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}>{project.category}</span>
            {project.year && <span style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0" }}>{project.year}</span>}
            <span style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, background: statusConfig[project.status].bg, color: statusConfig[project.status].color }}>{project.status}</span>
          </div>

          {/* Titre */}
          <h3 style={{ fontWeight: 800, color: "#0f172a", fontSize: "1rem", lineHeight: 1.3, marginBottom: "0.2rem" }}>{project.title}</h3>
          <p style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600, marginBottom: "0.75rem" }}>{project.context} · {project.period}</p>

          {/* Description */}
          <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.7, flex: 1, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
            {project.shortDesc}
          </p>

          {/* Stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", margin: "0.85rem 0 0.75rem" }}>
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600, background: `${project.color}0d`, border: `1px solid ${project.color}28`, color: project.color }}>{tech}</span>
            ))}
            {project.stack.length > 4 && <span style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600, background: "#f1f5f9", color: "#94a3b8", border: "1px solid #e2e8f0" }}>+{project.stack.length - 4}</span>}
          </div>

          {/* Hint survol */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: `${project.color}80`, fontSize: "0.72rem", fontWeight: 600, borderTop: "1px solid #f1f5f9", paddingTop: "0.75rem" }}>
            <span>🔄</span>
            <span>Survolez pour retourner la carte</span>
          </div>
        </div>

        {/* ── FACE ARRIÈRE (desktop uniquement) ── */}
        <div style={{
          position: isMobile ? "static" : "absolute", inset: 0,
          display: isMobile ? "none" : undefined,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: project.color,
          borderRadius: "20px",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Déco cercles */}
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

          {/* Titre */}
          <h3 style={{ fontWeight: 900, color: "#ffffff", fontSize: "1.05rem", lineHeight: 1.25, marginBottom: "0.35rem" }}>{project.title}</h3>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.65)", fontWeight: 600, marginBottom: "1rem" }}>{project.context} · {project.period}</p>

          {/* Problématique */}
          <div style={{ flex: 1, marginBottom: "0.9rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem" }}>🎯 Problématique</p>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", lineHeight: 1.7, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}>
              {project.challenge}
            </p>
          </div>

          {/* Stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.9rem" }}>
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 600, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#ffffff" }}>{tech}</span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.65rem", borderRadius: "12px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", fontSize: "0.8rem", fontWeight: 700 }}>
            Cliquer pour voir les détails →
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("Tous");
  const [selected, setSelected] = useState<ProjectDetail | null>(null);
  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-16 lg:py-24" style={{ background: "rgba(248,250,252,0.82)" }}>
      <div className="container-main">

        {/* Header */}
        <FadeIn>
          <span className="section-label" style={{ marginBottom: "1rem" }}>Réalisations</span>
          <h2 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Mes <span style={{ color: "#7c3aed" }}>projets</span>
          </h2>
          <p className="text-[#64748b]" style={{ maxWidth: "480px", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Survolez une carte pour la retourner · Cliquez pour voir tous les détails.
          </p>
        </FadeIn>

        {/* Filtres */}
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "3rem" }}>
            {categories.map((cat) => {
              const count = cat === "Tous" ? projects.length : projects.filter((p) => p.category === cat).length;
              const isActive = active === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.5rem 1.1rem", borderRadius: "999px", fontSize: "0.82rem", fontWeight: 700,
                    border: isActive ? "1px solid #7c3aed" : "1px solid #e2e8f0",
                    background: isActive ? "#7c3aed" : "#ffffff",
                    color: isActive ? "#ffffff" : "#64748b",
                    cursor: "pointer", transition: "all 0.2s",
                    boxShadow: isActive ? "0 4px 14px #7c3aed30" : "none",
                  }}
                >
                  {cat}
                  <span style={{ padding: "0.05rem 0.45rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 800, background: isActive ? "rgba(255,255,255,0.25)" : "#f1f5f9", color: isActive ? "#ffffff" : "#94a3b8" }}>{count}</span>
                </motion.button>
              );
            })}
          </div>
        </FadeIn>

        {/* Grille flip cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "1.25rem" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <FlipCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
