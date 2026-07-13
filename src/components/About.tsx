"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Brain, Code2, Layers, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Développement Fullstack", desc: "React, Next.js, Node.js, Python : architecture complète du frontend au backend.", color: "#0ea5e9" },
  { icon: Brain, title: "Intelligence Artificielle", desc: "ML, Deep Learning (CNN), IA agentique (N8N, LangChain, LangGraph, MCP), API Claude/OpenAI, automatisation de processus métier.", color: "#7c3aed" },
  { icon: Layers, title: "DevOps & Cloud", desc: "Docker, Kubernetes, Terraform, CI/CD, déploiement VPS et cloud.", color: "#db2777" },
  { icon: Rocket, title: "Entrepreneuse", desc: "Fondatrice de 3S Tech & IA, 3S AGENTIC IA et 3S Design, de l'idée à la production.", color: "#d97706" },
];

const stats = [
  { value: 3, suffix: "+", label: "Ans d'alternance", color: "#7c3aed" },
  { value: 6, suffix: "+", label: "Projets livrés", color: "#0ea5e9" },
  { value: 2, suffix: "",  label: "Startups fondées", color: "#db2777" },
  { value: 15, suffix: "+", label: "Technologies", color: "#d97706" },
];

const paragraphs = [
  <>Je suis <strong className="text-[#0f172a]">Mame Diarra Bousso Diakhate</strong>, apprentie ingénieure en dernière année à <span style={{ color: "#7c3aed" }} className="font-medium">l&apos;ESIEE Paris</span> (Cycle Ingénieur Informatique & Applications, 2023–2026). Mon parcours m&apos;a amenée de Dakar jusqu&apos;en Île-de-France, où j&apos;ai bâti une expertise solide à la croisée du développement logiciel, du DevOps et de l&apos;intelligence artificielle.</>,
  <>En alternance chez <span style={{ color: "#7c3aed" }} className="font-medium">Kilifa Consulting</span>, j&apos;ai participé à la digitalisation de l&apos;entreprise via Odoo 17, avec containerisation Docker, personnalisation des modules RH & Finance, et développement d&apos;un module Payroll complet.</>,
  <>En 3ème année, j&apos;ai conçu et développé <span className="font-semibold text-[#0f172a]">en solo</span> une <span style={{ color: "#7c3aed" }} className="font-medium">plateforme multi-agents IA commerciale</span> pour Kilifa, avec un moteur assurant la prospection automatisée de nouveaux clients et un autre moteur pour la veille automatique des appels d&apos;offres depuis les plateformes publiques (BOAMP, France Travail, TED), en assurant aussi le matching entre les experts de l&apos;entreprise et les marchés détectés.</>,
  <>En parallèle, j&apos;ai fondé <span style={{ color: "#7c3aed" }} className="font-medium">3S Tech & IA</span> pour développer <span className="text-[#0f172a] font-medium">3S POS System</span>, une plateforme SaaS de gestion commerciale multi-secteurs (commerce, pharmacie, restauration à venir) pensée pour le Sénégal et l&apos;Afrique francophone, développée <span className="font-semibold text-[#0f172a]">en solo</span> du début à la mise en production sur VPS. J&apos;y développe aussi <span className="text-[#0f172a] font-medium">3S AGENTIC IA</span>, une plateforme multi-agents IA actuellement en développement, ainsi que <span className="text-[#0284c7] font-medium">3S Design</span> pour aider les PME à digitaliser leur image et leur communication (logos, flyers, vidéos).</>,
];

/* Count-up animé */
function CountUp({ target, suffix, color, inView }: { target: number; suffix: string; color: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * target));
      if (frame >= total) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span style={{ fontSize: "2.6rem", fontWeight: 900, color, lineHeight: 1 }}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-16 lg:py-24" style={{ background: "rgba(255,255,255,0.82)" }}>
      <div className="container-main">

        {/* ── En-tête — glisse depuis le haut ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label" style={{ marginBottom: "1rem" }}>Qui suis-je ?</span>
          <h2 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            À <span style={{ color: "#7c3aed" }}>propos</span>
          </h2>
          <p className="text-[#64748b]" style={{ fontSize: "1rem", maxWidth: "520px", lineHeight: 1.75, marginBottom: "3.5rem" }}>
            Ingénieure informatique, entrepreneuse et passionnée par l&apos;IA. Voici mon parcours en quelques lignes.
          </p>
        </motion.div>

        {/* ── Contenu principal ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "4rem", alignItems: "start", marginBottom: "4rem" }}>

          {/* Texte — glisse depuis la gauche */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-[#475569]"
                style={{ fontSize: "0.95rem", lineHeight: 1.9 }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Cartes highlights — glissent depuis la droite en cascade */}
          <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 180, damping: 20, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4, boxShadow: `0 12px 32px ${item.color}20` }}
                style={{
                  borderRadius: "16px",
                  border: `1px solid ${item.color}22`,
                  background: `${item.color}07`,
                  padding: "1.4rem",
                  cursor: "default",
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  style={{
                    width: "44px", height: "44px",
                    borderRadius: "12px",
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "0.9rem",
                  }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </motion.div>
                <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.85rem", marginBottom: "0.4rem", lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ height: "1px", background: "#f1f5f9", marginBottom: "3rem" }} />

        {/* ── Stats — count-up au scroll ── */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "1rem" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -3 }}
              style={{
                borderRadius: "16px",
                border: "1px solid #f1f5f9",
                background: `${s.color}07`,
                padding: "1.5rem",
                textAlign: "center",
                cursor: "default",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${s.color}18`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <CountUp target={s.value} suffix={s.suffix} color={s.color} inView={statsInView} />
              <div style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "0.4rem", fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
