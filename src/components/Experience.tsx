"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
import { Briefcase, GraduationCap, Rocket, Bot } from "lucide-react";

const workExperiences = [
  {
    icon: Briefcase,
    color: "#7c3aed",
    bg: "#faf5ff",
    title: "Ingénieure Développement & Intégration ERP Odoo",
    company: "Kilifa Consulting",
    period: "Sept. 2023 - Présent",
    tag: "Alternance",
    bullets: [
      "Participation à la digitalisation de l'entreprise via Odoo 17 Community (équipe)",
      "Containerisation de l'environnement Odoo avec Docker et déploiement cloud",
      "Intégration et personnalisation des modules RH, Finance & Comptabilité",
      "Développement intégral du module Payroll : gestion complète des fiches de paie (Python)",
    ],
    solo: {
      label: "Projet solo · Mémoire de fin d'études (2025–2026)",
      icon: Bot,
      bullets: [
        "Conception et développement d'une plateforme multi-agents IA commerciale",
        "Moteur de prospection automatisée de nouveaux clients",
        "Moteur de veille automatique des appels d'offres depuis les plateformes publiques (BOAMP, France Travail, TED)",
        "Matching IA entre les experts de l'entreprise et les marchés détectés par les agents",
      ],
    },
  },
  {
    icon: Rocket,
    color: "#0ea5e9",
    bg: "#f0f9ff",
    title: "Fondatrice, 3S Tech & IA",
    company: "3S Tech & IA (3S POS System, 3S AGENTIC IA)",
    period: "2024 - Présent",
    tag: "Startup",
    bullets: [
      "Développement solo de 3S POS System, plateforme SaaS de gestion commerciale multi-secteurs (commerce, pharmacie, restauration à venir) pour le Sénégal et l'Afrique francophone, du code à la mise en production VPS",
      "Architecture fullstack : React / Node.js / PostgreSQL, déploiement VPS",
      "Développement de 3S AGENTIC IA, plateforme multi-agents IA actuellement en développement",
      "Accompagnement à la digitalisation (sites web, automatisation, outils numériques)",
    ],
  },
  {
    icon: Rocket,
    color: "#db2777",
    bg: "#fdf2f8",
    title: "Fondatrice, 3S Design",
    company: "3S Design",
    period: "2022 - Présent",
    tag: "Agence digitale",
    bullets: [
      "Création de logos, affiches, flyers, cartes de visite pour TPE/PME",
      "Réalisation de vidéos publicitaires et contenus visuels",
      "Développement de sites vitrine et factures numériques",
    ],
  },
];

const educations = [
  {
    title: "Cycle Ingénieur Informatique & Applications",
    school: "ESIEE Paris",
    period: "2023 - 2026",
    location: "Marne-la-Vallée",
    color: "#7c3aed",
    bullets: [
      "DevSecOps Cloud-Native (Node.js, Docker, K8s, Terraform)",
      "IA : Machine Learning & Deep Learning (Python, TensorFlow/Keras, CNN)",
      "Réalité Virtuelle : Musée d'Empathie (Unity, C#)",
    ],
  },
  {
    title: "Licence Sciences de l'Ingénieur",
    school: "Université Paris Nord",
    period: "2021 - 2022",
    location: "Paris",
    color: "#d97706",
    bullets: [],
  },
  {
    title: "DST Télécommunications & Réseaux",
    school: "École Polytechnique de Dakar",
    period: "2019 - 2021",
    location: "Dakar, Sénégal",
    color: "#d97706",
    bullets: [],
  },
  {
    title: "Baccalauréat Scientifique S1",
    school: "Sénégal",
    period: "2018",
    location: "Sénégal",
    color: "#d97706",
    bullets: [],
  },
];

/* Bullet animé avec délai */
function AnimatedBullet({ text, color, delay }: { text: string; color: string; delay: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", color: "#475569", fontSize: "0.85rem", lineHeight: 1.65 }}
    >
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, marginTop: "0.55rem", flexShrink: 0 }} />
      {text}
    </motion.li>
  );
}

export default function Experience() {
  const isMobile = useIsMobile();
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section id="experience" className="py-16 lg:py-24" style={{ background: "rgba(255,255,255,0.82)" }}>
      <div className="container-main">

        {/* Header — rotation légère depuis le bas */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ transformOrigin: "bottom center" }}
        >
          <span className="section-label" style={{ marginBottom: "1rem" }}>Parcours</span>
          <h2 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Expériences &amp; <span style={{ color: "#7c3aed" }}>Formations</span>
          </h2>
          <p className="text-[#64748b]" style={{ maxWidth: "520px", fontSize: "1rem", lineHeight: 1.75, marginBottom: "3.5rem" }}>
            3 ans d&apos;alternance, 2 startups, des projets académiques ambitieux. Voici mon parcours.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 380px", gap: "2.5rem", alignItems: "start" }}>

          {/* ── Colonne gauche — glisse depuis la gauche ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {workExperiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ x: 4 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8edf3",
                  borderLeft: `4px solid ${exp.color}`,
                  borderRadius: "20px",
                  padding: "1.75rem",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${exp.color}15`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                {/* Card header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.2rem" }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ width: "46px", height: "46px", borderRadius: "14px", background: exp.bg, border: `1px solid ${exp.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                  >
                    <exp.icon size={20} style={{ color: exp.color }} />
                  </motion.div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.3rem" }}>
                      <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.95rem", lineHeight: 1.35 }}>{exp.title}</h3>
                      <span style={{ flexShrink: 0, padding: "0.2rem 0.65rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}25`, whiteSpace: "nowrap" }}>{exp.period}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontWeight: 700, color: exp.color, fontSize: "0.85rem" }}>{exp.company}</span>
                      <span style={{ color: "#e2e8f0" }}>·</span>
                      <span style={{ padding: "0.15rem 0.55rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600, background: `${exp.color}0d`, color: exp.color }}>{exp.tag}</span>
                    </div>
                  </div>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "0.25rem" }}>
                  {exp.bullets.map((b, j) => (
                    <AnimatedBullet key={j} text={b} color={exp.color} delay={i * 0.1 + j * 0.06} />
                  ))}
                </ul>

                {"solo" in exp && exp.solo && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    style={{ marginTop: "1.25rem", borderRadius: "14px", background: `${exp.color}08`, border: `1px dashed ${exp.color}40`, padding: "1rem 1.1rem" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                      <exp.solo.icon size={14} style={{ color: exp.color }} />
                      <span style={{ color: exp.color, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>{exp.solo.label}</span>
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      {exp.solo.bullets.map((b, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", color: "#475569", fontSize: "0.83rem", lineHeight: 1.65 }}>
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: exp.color, marginTop: "0.55rem", flexShrink: 0, opacity: 0.7 }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── Colonne droite — glisse depuis la droite ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div style={{ background: "#f8fafc", border: "1px solid #e8edf3", borderRadius: "20px", padding: "1.75rem", position: isMobile ? "relative" : "sticky", top: isMobile ? undefined : "88px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#fef3c7", border: "1px solid #d9770625", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <GraduationCap size={16} style={{ color: "#d97706" }} />
                </motion.div>
                <span style={{ fontWeight: 800, color: "#0f172a", fontSize: "0.9rem" }}>Formations</span>
              </div>

              {/* Timeline avec ligne qui se dessine */}
              <div ref={lineRef} style={{ position: "relative", paddingLeft: "1.25rem" }}>
                {/* Ligne verticale animée */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={lineInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                  style={{
                    position: "absolute", left: "5px", top: "8px", bottom: "8px",
                    width: "2px", background: "#e2e8f0", borderRadius: "2px",
                    transformOrigin: "top",
                  }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {educations.map((edu, i) => (
                    <motion.div
                      key={edu.school}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                      style={{ position: "relative" }}
                    >
                      {/* Dot pulsant */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                        style={{
                          position: "absolute", left: "-1.35rem", top: "4px",
                          width: "12px", height: "12px", borderRadius: "50%",
                          background: edu.color, border: "2px solid white",
                          boxShadow: `0 0 0 2px ${edu.color}40`,
                        }}
                      />
                      <div>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.2rem" }}>
                          <h4 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.82rem", lineHeight: 1.35 }}>{edu.title}</h4>
                          <span style={{ fontSize: "0.68rem", color: "#94a3b8", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>{edu.period}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: edu.bullets.length ? "0.65rem" : "0" }}>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: edu.color }}>{edu.school}</span>
                          <span style={{ color: "#e2e8f0", fontSize: "0.7rem" }}>·</span>
                          <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>{edu.location}</span>
                        </div>
                        {edu.bullets.length > 0 && (
                          <ul style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                            {edu.bullets.map((b, j) => (
                              <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#64748b", fontSize: "0.77rem", lineHeight: 1.6 }}>
                                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: edu.color, marginTop: "0.55rem", flexShrink: 0, opacity: 0.7 }} />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
