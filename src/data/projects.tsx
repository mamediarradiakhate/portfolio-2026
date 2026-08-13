import type { LucideIcon } from "lucide-react";
import {
  Target, Network, Server, Monitor, GitBranch, Cloud, Bot, BarChart3, Users, Database, Lightbulb,
} from "lucide-react";
import POSArchitectureDiagram from "@/components/diagrams/POSArchitectureDiagram";
import KilifaArchitectureDiagram from "@/components/diagrams/KilifaArchitectureDiagram";
import PipelineDiagram, { type PipelineStep } from "@/components/diagrams/PipelineDiagram";
import MLvsCNNDiagram from "@/components/diagrams/MLvsCNNDiagram";

export type Category = "Tous" | "ESIEE Paris" | "Kilifa Consulting" | "3S Tech & IA";
export type StatusType = "En production" | "En cours" | "Terminé" | "En lancement" | "Activité continue" | "Stade de cadrage";

export interface CaseStudySection {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Diagramme optionnel affiché au-dessus du texte (architecture, pipeline...). */
  diagram?: React.ComponentType<{ color?: string }>;
}

/* Diagrammes des deux moteurs Kilifa, construits à partir du pipeline générique. */
const moteur1Steps: PipelineStep[] = [
  { title: "Déclenchement quotidien", sub: "9h, jours ouvrés" },
  { title: "Découverte prospects", sub: "Société.com, Manageo" },
  { title: "Agent Qualification", sub: "score IA 0-100" },
  { title: "Agent Génération email", sub: "message personnalisé" },
  { title: "Envoi (Brevo)", sub: "avec lien RGPD" },
  { title: "Relances séquentielles", sub: "J+5 / J+10 / J+15 / J+20" },
  { title: "Agent Analyse sentiment", sub: "sur la réponse reçue" },
  { title: "Routage + alerte dirigeant", sub: "intéressé / à rappeler / désinscrit" },
];
const Moteur1Diagram = ({ color }: { color?: string }) => <PipelineDiagram steps={moteur1Steps} color={color} />;

const moteur2Steps: PipelineStep[] = [
  { title: "Déclenchement 2x/jour", sub: "8h et 14h, jours ouvrés" },
  { title: "Collecte multi-sources", sub: "BOAMP, France Travail, TED" },
  { title: "Fusion & dédoublonnage", sub: "liste unique d'offres" },
  { title: "Agent Parsing", sub: "extraction JSON structurée" },
  { title: "Agent Scoring", sub: "pertinence 0-100" },
  { title: "Agent Matching", sub: "expert le plus adapté" },
  { title: "Agent Génération lettre", sub: "prompt engineering dédié" },
  { title: "Validation humaine", sub: "puis suivi automatisé" },
];
const Moteur2Diagram = ({ color }: { color?: string }) => <PipelineDiagram steps={moteur2Steps} color={color} />;

/* Chaîne de déploiement du projet académique DevOps Cloud-Native. */
const devOpsChainSteps: PipelineStep[] = [
  { title: "API REST Node.js", sub: "développement du service" },
  { title: "Docker", sub: "conteneurisation" },
  { title: "Kubernetes", sub: "orchestration des conteneurs" },
  { title: "Terraform", sub: "infrastructure as code" },
];
const DevOpsChainDiagram = ({ color }: { color?: string }) => <PipelineDiagram steps={devOpsChainSteps} color={color} cols={4} />;

/* Chaîne technique de l'expérience VR : du casque à l'interaction. */
const vrChainSteps: PipelineStep[] = [
  { title: "Casque VR", sub: "tracking / contrôleurs" },
  { title: "VR SDK", sub: "communication avec le matériel" },
  { title: "Unity", sub: "moteur : scène, lumières, physique" },
  { title: "Scripts C#", sub: "comportements & interactions" },
  { title: "Musée virtuel", sub: "Salle Guerre / Salle Naufrage" },
];
const VRChainDiagram = ({ color }: { color?: string }) => <PipelineDiagram steps={vrChainSteps} color={color} cols={3} />;

export interface ProjectDetail {
  slug: string;
  title: string;
  category: Exclude<Category, "Tous">;
  year?: string;
  context: string;
  role?: string;
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
  /** Captures d'écran de l'application, ex: "/projects/3s-pos-system/dashboard.png". */
  screenshots?: { src: string; label: string }[];
  /** Étude de cas détaillée affichée sur la page /projects/[slug]. Optionnelle : si absente, la page retombe sur challenge/solution/impact/features. */
  caseStudy?: CaseStudySection[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "3s-pos-system",
    title: "3S POS System",
    category: "3S Tech & IA",
    context: "3S Tech & IA",
    role: "Fondatrice & Développeuse",
    period: "2024 - En cours",
    status: "En lancement",
    color: "#0ea5e9",
    link: "https://3spossystem.com",
    screenshots: [
      { src: "/projects/3s-pos-system/login.png", label: "Page de connexion" },
      { src: "/projects/3s-pos-system/dashboard.png", label: "Tableau de bord" },
      { src: "/projects/3s-pos-system/dashboard-analytics.png", label: "Analyse de la période et évolution des ventes" },
      { src: "/projects/3s-pos-system/vente.png", label: "Suivi des ventes" },
    ],
    shortDesc: "Plateforme SaaS de gestion commerciale multi-secteurs (commerce, pharmacie, restauration à venir) pour le Sénégal et l'Afrique francophone, développée en solo du code à la mise en production sur VPS, avec l'appui de Claude Code pour certaines fonctionnalités techniques complexes.",
    fullDesc: "3S POS System est une plateforme SaaS de gestion commerciale multi-secteurs, conçue pour digitaliser et professionnaliser la gestion des commerces et des pharmacies au Sénégal et en Afrique francophone. En un seul abonnement, le client gère ses ventes, son stock, ses achats, ses finances, son équipe et sa présence en ligne, avec en option un pack matériel complet (écran de caisse, tiroir-caisse, imprimante, scanner) en location ou à l'achat. Développé de A à Z (architecture, frontend, backend, base de données, déploiement) et actuellement en phase de test final avant lancement officiel.",
    challenge: "La grande majorité des commerçants et pharmaciens sénégalais gèrent encore leur activité avec des cahiers papier, des tableaux Excel ou des logiciels importés inadaptés aux réalités locales, sans traçabilité ni visibilité sur leur performance réelle, avec un matériel de caisse non connecté aux données de vente.",
    solution: "Architecture backend Python/FastAPI (SQLAlchemy 2.0 async) multi-tenant, frontend React/Next.js, déployée sur VPS, fonctionnant en mode hybride (avec ou sans connexion internet), avec paiements locaux Orange Money et Wave, un module pharmacie spécialisé (DCI, alertes péremption, ordonnances), un pack matériel connecté en option, et un dashboard analytics en temps réel.",
    impact: "Marché cible : plus de 300 000 commerces et 1 200 pharmacies au Sénégal, extensible à l'Afrique francophone (Côte d'Ivoire, Mali, Guinée, Cameroun, Togo, Bénin). Projet en phase de test avant lancement officiel, déjà fonctionnel en production sur VPS.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "React", "Next.js", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "Nginx", "Terraform", "Ansible", "Kubernetes", "TypeScript", "JWT Auth"],
    features: ["Caisse POS avec paiements multiples (espèces, Orange Money, Wave, carte)", "Gestion des stocks et catalogue en temps réel avec alertes", "Module pharmacie : médicaments par DCI, ordonnances, alertes péremption", "Boutique en ligne et commandes via WhatsApp", "Facturation, finances et gestion des crédits clients", "Multi-sites avec tableau de bord consolidé", "Mode hybride : fonctionne avec ou sans connexion internet", "Pack matériel connecté (caisse, tiroir, imprimante, scanner) en location ou achat", "Dashboard analytics (ventes, stocks, tendances)", "Gestion multi-utilisateurs avec rôles et permissions"],
    caseStudy: [
      {
        icon: Target,
        title: "Le projet",
        body: "La grande majorité des commerçants et pharmaciens sénégalais gèrent encore leur activité avec des cahiers papier, des tableaux Excel ou des logiciels importés inadaptés aux réalités locales, sans traçabilité ni visibilité sur leur performance réelle, avec un matériel de caisse non connecté aux données de vente. Objectif : une plateforme SaaS multi-secteurs pensée pour le Sénégal et l'Afrique francophone, qui centralise ventes, stock, facturation et présence en ligne en un seul abonnement.",
      },
      {
        icon: Network,
        title: "Architecture multi-tenant",
        diagram: POSArchitectureDiagram,
        body: "Architecture multi-tenant en trois niveaux (Company → Store → User), avec isolation applicative des données par company_id : chaque entreprise cliente ne voit que ses propres données, garanties au niveau du code plutôt que de la base. Trois flux d'authentification JWT indépendants (utilisateurs internes, clients de la boutique en ligne, partenaires revendeurs), avec rotation de tokens.",
      },
      {
        icon: Server,
        title: "Backend",
        body: "API REST versionnée développée avec FastAPI et SQLAlchemy 2.0 en mode async, sur base de données PostgreSQL. Système générique de variantes produit (couleur, taille, tout attribut personnalisé) avec stock et prix propres à chaque combinaison. Modules métier : gestion des livraisons avec suivi public par jeton, facturation avec génération PDF, rappels de paiement automatisés, notifications temps réel.",
      },
      {
        icon: Monitor,
        title: "Interface",
        body: "6 applications frontend développées en React et Next.js : dashboard d'administration (produits, stock, caisse, ventes, facturation), boutique e-commerce publique en rendu serveur, écran kiosque client synchronisé en temps réel avec la caisse, portail partenaires revendeurs et site marketing.",
      },
      {
        icon: GitBranch,
        title: "CI/CD & DevOps",
        body: "Pipeline CI sur GitHub Actions : tests automatisés, couverture, lint, analyse de sécurité statique, build des images Docker, le tout bloquant en cas d'échec. Pipeline CD : déploiement automatique après succès du CI, healthcheck actif post-déploiement avec rollback automatique en cas d'échec, rechargement à chaud du reverse proxy pour zéro coupure de service.",
      },
      {
        icon: Cloud,
        title: "Infrastructure",
        body: "Conteneurisation complète avec Docker et Docker Compose, reverse proxy Nginx multi-domaines avec certificats TLS automatisés (Certbot / Let's Encrypt), migrations de base de données versionnées (Alembic), sauvegardes PostgreSQL planifiées, observabilité via Sentry et UptimeRobot. Provisioning et gestion DNS via Terraform, configuration système automatisée via Ansible. Un cluster Kubernetes local (Minikube) sert d'environnement d'apprentissage séparé de la production, pour expérimenter la scalabilité et l'auto-guérison — la production reste sur Docker Compose, dimensionné à l'échelle actuelle du projet.",
      },
      {
        icon: Bot,
        title: "IA en cours de développement",
        body: "Un agent vocal en wolof est en cours de conception pour permettre au commerçant d'exécuter par la voix des actions métier (générer une facture, enregistrer un produit, passer une commande). Architecture prévue autour d'un système RAG pour ancrer les réponses dans les données réelles de la boutique, orchestré via LangChain/LangGraph. Fonctionnalité actuellement en développement, pas encore en production.",
      },
      {
        icon: BarChart3,
        title: "Résultats",
        body: "Plateforme fonctionnelle en production sur VPS, en phase de test final avant lancement commercial officiel. Marché cible : plus de 300 000 commerces et 1 200 pharmacies au Sénégal, extensible à l'Afrique francophone.",
      },
    ],
  },
  {
    slug: "kilifa-multi-agents-ia",
    title: "Plateforme Multi-Agents IA Commerciale",
    category: "Kilifa Consulting",
    year: "Année 3",
    context: "Kilifa Consulting",
    role: "Ingénieure IA",
    period: "2025 - 2026",
    status: "En cours",
    color: "#7c3aed",
    shortDesc: "Plateforme intelligente pour automatiser le développement commercial de Kilifa Consulting, jusque-là entièrement porté par le dirigeant.",
    fullDesc: "En troisième année, la direction m'a confié la responsabilité de concevoir et développer une plateforme multi-agents IA destinée à automatiser la prospection commerciale et la veille des appels d'offres. J'ai piloté l'ensemble du cycle : analyse du besoin, architecture, développement, tests et documentation. Ce projet constitue l'objet de mon mémoire de fin d'études.",
    challenge: "La recherche d'opportunités, la préparation des candidatures et la prospection reposaient entièrement sur le dirigeant, au prix d'un temps considérable sur des tâches répétitives.",
    solution: "Deux moteurs indépendants orchestrés par N8N. Le moteur de veille détecte automatiquement les appels d'offres pertinents, sélectionne l'expert le plus adapté et prépare la candidature pour validation du dirigeant. Le moteur de prospection identifie de nouveaux prospects B2B, les qualifie et gère les relances jusqu'au traitement des réponses. Un CRM web (Next.js) centralise le pilotage des deux moteurs.",
    impact: "Moteur de veille opérationnel : score de matching expert-offre de 95/100. Moteur de prospection développé et validé fonctionnellement ; sa mise en production dépend encore du choix définitif de la stratégie d'acquisition des contacts prospects.",
    stack: ["N8N", "Express.js TypeScript", "Next.js", "PostgreSQL", "Prisma", "API Claude (Anthropic)", "Brevo", "Docker", "JWT", "Socket.IO"],
    features: ["Moteur de veille : détection automatique des appels d'offres pertinents (BOAMP, France Travail, TED)", "Sélection automatique de l'expert le plus adapté à chaque offre (score de matching)", "Génération automatique de la lettre de motivation et préparation de la candidature", "Moteur de prospection : identification et qualification quotidienne de nouveaux prospects B2B", "Relances automatiques selon un calendrier progressif (J+5/J+10/J+15)", "CRM web avec tableau de bord temps réel pour le dirigeant", "Rapport hebdomadaire automatique et supervision des erreurs des agents IA", "Documentation technique complète (mémoire ingénieur)"],
    caseStudy: [
      {
        icon: Target,
        title: "Le projet",
        body: "Chez Kilifa Consulting (ESN), la recherche d'opportunités, la préparation des candidatures et la prospection reposaient entièrement sur le dirigeant, au prix d'un temps considérable sur des tâches répétitives. Objectif : concevoir un système multi-agents capable d'automatiser la prospection B2B et la veille des appels d'offres, tout en gardant une validation humaine sur chaque action commerciale.",
      },
      {
        icon: Network,
        title: "Architecture globale",
        diagram: KilifaArchitectureDiagram,
        body: "Le dirigeant interagit avec la plateforme via une interface web (CRM Next.js) qui centralise prospects, appels d'offres, candidatures et notifications. Toutes les actions passent par une API REST (Node.js / Express / TypeScript) qui centralise la logique métier et la sécurité. Les données sont stockées dans PostgreSQL via Prisma, tandis que l'ensemble des automatisations est orchestré par N8N, où s'exécutent les 2 moteurs métier ainsi que des workflows transverses (rapport hebdomadaire au dirigeant, supervision des erreurs des agents, renouvellement automatique des accès techniques). La plateforme communique avec plusieurs services externes : BOAMP et France Travail pour la veille, Brevo pour l'envoi d'emails, et l'API Claude d'Anthropic pour le raisonnement des 14 agents IA. L'ensemble est conteneurisé avec Docker Compose.",
      },
      {
        icon: Bot,
        title: "Moteur 1, Prospection B2B",
        diagram: Moteur1Diagram,
        body: "Automatise l'intégralité du cycle de prospection B2B, du premier contact jusqu'au traitement des réponses, via 3 workflows N8N indépendants. Le premier se déclenche chaque matin à 9h : il recherche de nouvelles entreprises sur des annuaires professionnels français (Société.com, Manageo), enrichit les données avec un contact email, dédoublonne, puis un agent IA attribue un score de pertinence à chaque prospect ; les prospects qualifiés reçoivent un email de prospection personnalisé généré par un second agent IA, envoyé via Brevo avec un lien de désinscription RGPD. Le deuxième workflow gère les relances : chaque matin, il identifie les prospects sans réponse et déclenche automatiquement une relance à J+5, J+10 ou J+15 (archivage à J+20 sans réponse), avec un message généré par IA adapté à l'étape de la séquence. Le troisième workflow se déclenche en temps réel dès qu'un prospect répond : un agent IA analyse le contenu et route automatiquement vers 3 issues (intéressé, avec notification au dirigeant ; négatif, avec archivage ; ambigu, avec email de clarification généré automatiquement).",
      },
      {
        icon: Bot,
        title: "Moteur 2, Veille des appels d'offres",
        diagram: Moteur2Diagram,
        body: "Automatise la détection et le traitement des appels d'offres publics, via 3 workflows N8N. Le premier se déclenche 2 fois par jour (8h et 14h) et interroge simultanément 3 sources de marchés publics (BOAMP, France Travail, TED Europe) ; les résultats sont fusionnés et dédoublonnés, puis deux agents IA prennent le relais : le premier extrait les informations clés de chaque offre (compétences recherchées, durée, budget, localisation), le second compare ces informations aux expertises de Kilifa Consulting et attribue un score de pertinence — seules les offres au-dessus du seuil sont conservées et déclenchent une alerte. Le deuxième workflow sélectionne automatiquement, parmi les experts disponibles, celui dont le profil correspond le mieux à l'offre, génère une lettre de motivation personnalisée, enregistre la candidature dans le CRM et envoie un email au dirigeant avec un lien de validation : aucune candidature n'est envoyée sans validation humaine explicite. Le troisième workflow assure le suivi, de façon réactive (mise à jour et notification dès que le dirigeant renseigne une réponse client) et proactive (chaque jour à 10h, alerte automatique sur les candidatures sans réponse depuis plus de 7 jours).",
      },
      {
        icon: Users,
        title: "Supervision & contrôle humain",
        body: "Fonctionnement human-in-the-loop : aucune action commerciale (envoi d'email, candidature) n'est déclenchée sans validation explicite du dirigeant depuis le CRM. Observabilité complète des appels aux modèles de langage : tokens consommés, coût, latence et statut de chaque exécution, pour permettre le débogage et le suivi du budget IA. Détection automatique des échecs consécutifs d'un agent, avec alerte au dirigeant en cas de problème récurrent.",
      },
      {
        icon: Server,
        title: "Backend & CRM",
        body: "API REST développée en Node.js / Express / TypeScript, avec authentification JWT, validation Zod et rate limiting. Modélisation PostgreSQL / Prisma. Canal d'entrée sécurisé pour les agents N8N via webhooks authentifiés par token dédié. CRM web de supervision développé en Next.js, centralisant le pipeline commercial et les notifications temps réel (Socket.IO).",
      },
      {
        icon: Cloud,
        title: "DevOps",
        body: "Conteneurisation de l'API, du frontend, de PostgreSQL et de l'orchestrateur N8N avec Docker Compose, dans un réseau isolé. Séparation des secrets par service selon le principe du moindre privilège. Intégration d'APIs externes (BOAMP, France Travail).",
      },
      {
        icon: BarChart3,
        title: "Résultats",
        body: "Moteur de veille opérationnel : score de matching expert-offre de 95/100. Moteur de prospection développé et validé fonctionnellement ; sa mise en production dépend encore du choix de la stratégie d'acquisition des contacts prospects. Ce projet constitue l'objet de mon mémoire de fin d'études.",
      },
    ],
  },
  {
    slug: "3s-agentic-ia",
    title: "3S AGENTIC IA",
    category: "3S Tech & IA",
    context: "3S Tech & IA",
    role: "Fondatrice",
    period: "2026",
    status: "Stade de cadrage",
    color: "#0d9488",
    shortDesc: "Plateforme d'agents IA aux prénoms sénégalais pour automatiser les tâches des entreprises africaines et mondiales : 12 agents prévus, support wolof, téléphonie africaine. Cahier des charges et maquettes réalisés.",
    fullDesc: "3S Agentic IA est un projet de plateforme multi-agents IA avec une identité culturelle forte : chaque agent porterait un prénom sénégalais. Pensée pour automatiser les tâches quotidiennes des entreprises africaines et mondiales. Vision : créer la version africaine des grandes plateformes d'agents IA, avec le support du wolof et une architecture pensée pour les réalités africaines. Cahier des charges technique et fonctionnel finalisé, maquettes et design réalisés ; développement non démarré.",
    challenge: "Les plateformes d'agents IA existantes (Limova.ai, Agentova) sont pensées pour le marché occidental : noms occidentaux, pas de support wolof, pas de téléphonie africaine, pas d'agent vidéo. Le marché africain est inexploité malgré un besoin réel d'automatisation.",
    solution: "Architecture cible : 12 agents spécialisés (Fatou-Marketing, Koumba-CM, Sokhna-Vidéo, Ousmane-Téléphonie…), orchestrés via n8n, avec support wolof via Kàllaama (open-source), téléphonie africaine via Infobip (+221 Sénégal), génération vidéo, et clonage de voix. Le tout encore au stade de conception, pas encore implémenté.",
    impact: "Cahier des charges et maquettes finalisés. Différenciation prévue vs concurrents : agent vidéo IA, support wolof natif, téléphonie africaine et ancrage culturel sénégalais. Développement pas encore démarré.",
    stack: ["N8N", "FastAPI", "PostgreSQL", "Docker", "LLM API (Claude/GPT/Gemini)", "LangGraph", "RAG"],
    features: [
      "Fatou (Marketing) : campagnes pub, logos, identité visuelle",
      "Koumba (Community Manager) : réseaux sociaux, planning éditorial",
      "Sokhna (Vidéo & Création) : génération vidéo IA, voix off, montage",
      "Ousmane (Téléphonie) : appels entrants/sortants, RDV, SAV vocal",
      "Aminata (Prospection) : leads, LinkedIn, cold calling",
      "Babacar (Service Client) : emails, WhatsApp, chatbot multicanal",
      "Moussa (Rédacteur SEO) : articles, newsletters, optimisation SEO",
      "Adja (Comptable) : devis, factures, relances paiement",
      "Support wolof natif prévu via Kàllaama (open-source sénégalais)",
      "Téléphonie africaine prévue via Infobip (numéros +221 Sénégal)",
      "Architecture modulaire prévue : 1 agent = 1 conteneur Docker indépendant",
    ],
  },
  {
    slug: "jang-anglais",
    title: "Jang Anglais",
    category: "3S Tech & IA",
    context: "3S Tech & IA",
    role: "Fondatrice",
    period: "2026",
    status: "Stade de cadrage",
    color: "#d97706",
    shortDesc: "Application éducative trilingue (Wolof, Français, Anglais) pour enfants de 5 à 13 ans : apprendre l'anglais en jouant, inspirée de l'intégration de l'anglais dans le primaire au Sénégal. Cahier des charges et maquettes réalisés.",
    fullDesc: "Jang Anglais (\"apprendre\" en wolof) est une application mobile éducative née d'une opportunité concrète : l'État du Sénégal a intégré l'enseignement de l'anglais dès le primaire. L'idée : créer une app trilingue wolof/français/anglais permettant aux enfants de 5 à 13 ans d'apprendre l'anglais de façon interactive et ludique, dans leur langue maternelle.",
    challenge: "Les enfants sénégalais ont besoin d'apprendre l'anglais mais les applications existantes (Duolingo, etc.) sont pensées pour des adultes ou des enfants occidentaux, sans support wolof, sans ancrage culturel africain, pas adapté aux tranches d'âge du primaire sénégalais.",
    solution: "Application mobile gamifiée trilingue : l'enfant choisit son interface en wolof ou français, puis apprend l'anglais via des mini-jeux, des histoires interactives, des exercices audio et des niveaux progressifs adaptés à chaque tranche d'âge (5-7, 8-10, 11-13 ans).",
    impact: "Cahier des charges et maquettes réalisés ; développement non démarré. Cible prioritaire : les élèves du primaire sénégalais concernés par la nouvelle réforme éducative. Potentiel d'extension à toute l'Afrique de l'Ouest francophone.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Python", "NLP", "Speech-to-Text", "Kàllaama", "Expo", "Firebase"],
    features: [
      "Interface trilingue : Wolof, Français, Anglais",
      "Adapté par tranche d'âge : 5-7 ans, 8-10 ans, 11-13 ans",
      "Mini-jeux interactifs pour apprendre le vocabulaire",
      "Exercices audio : prononciation et écoute",
      "Histoires animées en anglais avec traduction",
      "Système de récompenses et progression gamifiée",
      "Mode hors-ligne pour zones à faible connectivité",
      "Support wolof natif, langue maternelle de l'enfant",
    ],
  },
  {
    slug: "3s-design",
    title: "3S Design, Digitalisation PME",
    category: "3S Tech & IA",
    context: "3S Design",
    role: "Fondatrice",
    period: "2022 - Présent",
    status: "Activité continue",
    color: "#db2777",
    shortDesc: "Agence digitale : identités visuelles, sites vitrine, vidéos publicitaires pour TPE/PME.",
    fullDesc: "3S Design est une agence digitale fondée en 2022, spécialisée dans l'accompagnement des mini-entreprises et TPE/PME dans leur transformation numérique. En 3 ans d'activité, j'ai aidé des dizaines d'entrepreneurs à construire leur image de marque et digitaliser leurs services.",
    challenge: "Les petites entreprises africaines n'ont souvent pas accès à des agences de communication professionnelles, faute de budget ou de proximité.",
    solution: "Offre complète et accessible : identité visuelle, supports print et digitaux, vidéos publicitaires, sites vitrine, et outils de gestion (factures numériques, catalogues).",
    impact: "3 ans d'activité continue. Dizaines de clients accompagnés. Clientèle fidèle développée par le bouche-à-oreille.",
    stack: ["Figma", "Canva Pro"],
    features: ["Logos et identités visuelles complètes", "Affiches, flyers, cartes de visite", "Vidéos publicitaires et motion design", "Sites vitrine clé en main", "Factures numériques et catalogues produits", "Accompagnement stratégie digitale"],
  },
  {
    slug: "odoo-rh-paie",
    title: "Intégration & Développement Odoo, RH et Paie",
    category: "Kilifa Consulting",
    year: "Années 1-2",
    context: "Kilifa Consulting",
    role: "Intégratrice & Développeuse",
    period: "2023 - 2025",
    status: "Terminé",
    color: "#7c3aed",
    shortDesc: "Déploiement et personnalisation des modules RH d'Odoo 17, puis participation au développement d'un module complet de gestion de la paie.",
    fullDesc: "Sur les deux premières années d'alternance au sein du pôle IT de Kilifa Consulting, j'ai d'abord intégré et personnalisé les premiers modules RH de l'ERP Odoo 17 Community, puis participé au développement d'un module de gestion de la paie complet, avec une autonomie croissante au fil du temps.",
    challenge: "L'entreprise démarrait sa transformation numérique sans outil centralisé, et externalisait par ailleurs la gestion de la paie, ce qui engendrait des coûts et des délais. Il fallait déployer un ERP adapté aux processus internes, puis développer un module de paie sur mesure intégré à cet ERP, avec des règles de calcul personnalisées et une gestion fine des données RH sensibles.",
    solution: "Déploiement d'Odoo 17 Community via Docker et Nginx, personnalisation des modules Employé (centralisation des données collaborateurs), Congé (demandes & validations) et Contrat, configuration fine des droits d'accès par profil utilisateur. Puis participation au développement d'un module Payroll en Python/Odoo Framework : règles de calcul salarial, gestion des cotisations, génération des bulletins de paie en PDF, et contrôle d'accès strict sur les données salariales.",
    impact: "Mise en place réussie de la base RH de l'ERP, modules opérationnels et utilisés quotidiennement. Le module Payroll est en production et gère toutes les fiches de paie de l'entreprise, avec internalisation complète de la gestion de la paie et réduction significative du temps de traitement RH.",
    stack: ["Python", "Odoo Framework", "Docker", "Nginx", "PostgreSQL", "Linux", "XML", "GitHub"],
    features: ["Module Employé : centralisation des données collaborateurs", "Module Congé : gestion des demandes et validations", "Module Contrat et configuration des droits d'accès par profil", "Calcul automatique des salaires avec règles personnalisées", "Génération des bulletins de paie en PDF", "Contrôle d'accès strict sur les données salariales"],
  },
  {
    slug: "devsecops-cloud-native",
    title: "Projet DevOps Cloud-Native",
    category: "ESIEE Paris",
    context: "ESIEE Paris",
    role: "Étudiante ingénieure",
    period: "Fév. 2026",
    status: "Terminé",
    color: "#d97706",
    shortDesc: "Web service REST en Node.js avec Docker, Kubernetes et Infrastructure as Code via Terraform.",
    fullDesc: "Projet académique de mise en pratique des concepts DevOps et Cloud-Native. Développement d'un web service REST complet en Node.js, avec une chaîne DevOps complète : containerisation Docker, orchestration Kubernetes, et Infrastructure as Code via Terraform.",
    challenge: "Concevoir une architecture Cloud-Native robuste intégrant les bonnes pratiques DevOps : automatisation, scalabilité et résilience.",
    solution: "Web service REST en Node.js, dockerisé et déployé sur Kubernetes. Terraform pour provisionner l'infrastructure as code. Pipeline CI/CD avec GitHub Actions.",
    impact: "Maîtrise complète de la chaîne DevOps moderne. Compétences validées en orchestration de conteneurs et IaC.",
    stack: ["Node.js", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "REST API", "Linux"],
    features: ["Web service REST avec authentification", "Dockerfile optimisé multi-stage", "Déploiement Kubernetes avec scaling", "Infrastructure provisionnée via Terraform", "Pipeline CI/CD automatisé", "Tests automatisés intégrés"],
    caseStudy: [
      {
        icon: Target,
        title: "Le projet",
        body: "Projet académique réalisé à l'ESIEE Paris, dont l'objectif n'était pas seulement de développer un service REST en Node.js, mais de construire toute sa chaîne de déploiement dans une logique cloud-native : conteneurisation, orchestration et automatisation de l'infrastructure.",
      },
      {
        icon: GitBranch,
        title: "Chaîne de déploiement",
        diagram: DevOpsChainDiagram,
        body: "Le service REST Node.js expose des endpoints HTTP (GET/POST/PUT/DELETE sur une ressource). Il est ensuite conteneurisé avec Docker pour obtenir un environnement reproductible, indépendant de la machine sur laquelle il tourne : Docker conteneurise l'application. Kubernetes orchestre ensuite ces conteneurs : plusieurs instances de l'application, redémarrage automatique en cas de problème, exposition et scaling. Enfin, Terraform déclare et automatise la mise en place de l'infrastructure elle-même (cluster, ressources, configuration) en Infrastructure as Code, plutôt que de la créer manuellement.",
      },
      {
        icon: Cloud,
        title: "Pourquoi \"Cloud-Native\"",
        body: "Être cloud-native ne se résume pas à héberger une application chez un fournisseur cloud : c'est une manière de concevoir et déployer des applications en tirant parti de la conteneurisation, de l'orchestration, de l'automatisation, de l'infrastructure as code, de la scalabilité, de la reproductibilité et de la résilience. Ce projet réunit ces principes en un seul pipeline, de l'application Node.js jusqu'à l'infrastructure automatisée.",
      },
      {
        icon: BarChart3,
        title: "Résultats",
        body: "Maîtrise complète de la chaîne DevOps moderne, de la conteneurisation à l'infrastructure as code. Compétences validées en orchestration de conteneurs (Kubernetes) et en automatisation d'infrastructure (Terraform).",
      },
    ],
  },
  {
    slug: "ml-deep-learning",
    title: "IA : Machine Learning & Deep Learning",
    category: "ESIEE Paris",
    context: "ESIEE Paris",
    role: "Étudiante ingénieure",
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
    caseStudy: [
      {
        icon: Target,
        title: "Le projet",
        body: "Projet académique réalisé à l'ESIEE Paris avec un objectif simple à énoncer mais riche à démontrer : un modèle de Machine Learning classique peut-il rivaliser avec un CNN (Convolutional Neural Network) pour la classification d'images ? Plutôt que de comparer les deux approches sur un seul jeu de données, la comparaison a été menée sur trois datasets de complexité visuelle croissante, afin d'observer à partir de quel niveau de complexité le Deep Learning prend réellement l'avantage.",
      },
      {
        icon: Network,
        title: "Machine Learning classique vs Deep Learning",
        diagram: MLvsCNNDiagram,
        body: "En Machine Learning classique (SVM, KNN), le modèle ne travaille jamais directement sur les pixels bruts de l'image : il faut d'abord extraire ou construire manuellement des caractéristiques (contours, textures, histogrammes de couleurs...) avant de les fournir au modèle. Avec un CNN, cette étape d'ingénierie manuelle disparaît : le réseau apprend lui-même, couche après couche, les caractéristiques pertinentes directement à partir des images. Les premières couches détectent des contours et des lignes simples, les couches suivantes des textures et des formes, jusqu'à des caractéristiques de plus haut niveau permettant la classification finale.",
      },
      {
        icon: Database,
        title: "Trois jeux de données",
        body: "MNIST (chiffres manuscrits de 0 à 9) : images simples, homogènes, en niveaux de gris, un bon terrain pour vérifier si le ML classique reste compétitif sur des formes peu variables. Dogs vs Cats : classification chien/chat avec des images en couleur où les tailles, arrière-plans, angles de prise de vue et conditions de lumière varient fortement, ce qui complique l'extraction manuelle de caractéristiques. Intel Image Classification (scènes naturelles/urbaines) : la tâche la plus complexe des trois, avec une grande diversité visuelle intra-classe. Cette progression permet d'observer concrètement comment chaque approche se comporte face à une complexité croissante.",
      },
      {
        icon: BarChart3,
        title: "Métriques d'évaluation",
        body: "Les modèles sont comparés selon plusieurs métriques complémentaires, aucune n'étant suffisante seule : l'accuracy (proportion globale de prédictions correctes), la précision (parmi les prédictions positives, combien sont réellement correctes) et le recall (parmi les cas réellement positifs, combien sont retrouvés par le modèle), le F1-score (moyenne harmonique entre précision et recall, utile quand les classes sont déséquilibrées), et la matrice de confusion pour visualiser précisément quelles classes sont le plus souvent confondues entre elles.",
      },
      {
        icon: Lightbulb,
        title: "Résultats & enseignements",
        body: "Sur des données simples et homogènes comme MNIST, les méthodes de Machine Learning classique (SVM, KNN) obtiennent déjà de très bonnes performances, proches de celles du CNN. Mais dès que la complexité visuelle augmente (Dogs vs Cats, Intel Image Classification), le CNN prend nettement l'avantage grâce à sa capacité à apprendre automatiquement des représentations visuelles hiérarchiques, là où le ML classique reste limité par la qualité des caractéristiques extraites manuellement. Conclusion : le choix entre ML classique et Deep Learning dépend avant tout de la complexité et de la variabilité des données à traiter.",
      },
    ],
  },
  {
    slug: "vr-musee-empathie",
    title: "Réalité Virtuelle : Musée d'Empathie",
    category: "ESIEE Paris",
    context: "ESIEE Paris",
    role: "Étudiante ingénieure",
    period: "Juin 2025",
    status: "Terminé",
    color: "#059669",
    shortDesc: "Expérience VR immersive simulant des récits historiques : salle Guerre & salle Naufrage.",
    fullDesc: "Conception et développement d'une expérience de réalité virtuelle immersive baptisée 'Musée d'Empathie'. Le projet vise à faire vivre des récits historiques de l'intérieur, en plaçant le visiteur au cœur de deux environnements distincts.",
    challenge: "Créer une expérience émotionnelle et éducative en VR qui transcende le simple jeu vidéo pour devenir un outil de sensibilisation historique.",
    solution: "Développement sous Unity/C# de deux environnements VR complets avec navigation interactive à la première personne. Déclencheurs narratifs positionnels, design sonore immersif et modélisation 3D.",
    impact: "Expérience immersive complète fonctionnelle. Démonstration de la capacité à livrer un projet créatif et technique avec des contraintes fortes (délai, VR, narration).",
    stack: ["Unity", "C#", "VR SDK", "3D Modeling", "Blender", "Audio Design", "Git"],
    features: ["Salle Guerre : tranchées, sons de bataille, témoignages", "Salle Naufrage : environnement aquatique immersif", "Navigation libre à la première personne", "Déclencheurs narratifs interactifs", "Design sonore spatial 3D"],
    caseStudy: [
      {
        icon: Target,
        title: "Le projet",
        body: "Projet académique réalisé à l'ESIEE Paris consistant à créer une expérience immersive en réalité virtuelle sous la forme d'un musée. L'objectif n'était pas de construire une simple scène 3D, mais de faire vivre à l'utilisateur des récits historiques à travers une expérience de mise en situation : une Salle Guerre (tranchées, sons de bataille, témoignages) et une Salle Naufrage (environnement aquatique immersif), toutes deux explorables librement à la première personne avec un casque VR.",
      },
      {
        icon: Users,
        title: "Pourquoi \"Musée d'Empathie\"",
        body: "Dans un musée classique, on regarde une photographie ou on lit un texte sur un événement historique. En VR, l'utilisateur est placé dans un environnement reconstitué, peut regarder autour de lui et interagir avec ce qui l'entoure. La réalité virtuelle devient alors un outil de mise en situation plutôt qu'un simple support d'information — c'est cette dimension qui justifie le terme \"empathie\" : faire ressentir une situation plutôt que la décrire.",
      },
      {
        icon: Network,
        title: "Chaîne technique : du casque à l'interaction",
        diagram: VRChainDiagram,
        body: "Unity sert de moteur central, assemblant environnements 3D, objets, lumières, animations, physique et caméra. Le VR SDK fait le lien entre l'application Unity et le matériel de réalité virtuelle (position de la tête, orientation, contrôleurs, déplacement). C# est utilisé pour programmer les comportements et interactions : un script détecte par exemple qu'un utilisateur entre dans une zone, déclenche un son, anime un objet ou affiche une information. Cette logique événementielle (regarder / sélectionner un objet → interaction → son / animation / changement de scène) est ce qui rend l'expérience réellement immersive, au-delà d'une simple vidéo à 360°.",
      },
      {
        icon: Server,
        title: "Modélisation et intégration 3D",
        body: "Une partie du travail a consisté à créer et intégrer les éléments 3D nécessaires à la construction des deux salles : architecture, murs, sols, décors, éléments historiques et éléments interactifs. Le flux de travail suit une chaîne classique de production 3D temps réel : modélisation (Blender), export des assets, import dans Unity, application des matériaux et textures, placement dans la scène, puis ajout des interactions via les scripts C#.",
      },
      {
        icon: Lightbulb,
        title: "Ce que ce projet apporte",
        body: "Ce projet est volontairement différent des projets backend/IA du parcours : il a permis de travailler la programmation interactive en C#, la modélisation et l'intégration 3D, ainsi que l'intégration de technologies de réalité virtuelle. Il a aussi demandé de réfléchir à l'expérience utilisateur dans un environnement où l'interaction ne passe plus par une interface classique, mais par le regard, le déplacement et le geste — une compétence de conception d'expérience qui complète le profil fullstack / IA.",
      },
    ],
  },
];

export const categories: Category[] = ["Tous", "3S Tech & IA", "Kilifa Consulting", "ESIEE Paris"];

export const statusConfig: Record<StatusType, { color: string; bg: string }> = {
  "En production": { color: "#059669", bg: "#dcfce7" },
  "En cours":      { color: "#d97706", bg: "#fef3c7" },
  "En lancement":  { color: "#0ea5e9", bg: "#e0f2fe" },
  "Terminé":       { color: "#64748b", bg: "#f1f5f9" },
  "Activité continue": { color: "#db2777", bg: "#fdf2f8" },
  "Stade de cadrage": { color: "#64748b", bg: "#f1f5f9" },
};

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
