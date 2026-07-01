"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Monitor, Server, Brain, Cloud, Database, Zap, Bot } from "lucide-react";

const categories = [
  { label: "Frontend",             icon: Monitor,  color: "#0ea5e9", bg: "#f0f9ff",  techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"] },
  { label: "Backend",              icon: Server,   color: "#7c3aed", bg: "#faf5ff",  techs: ["Node.js", "Express.js", "Python", "REST API", "C#", "Odoo Framework"] },
  { label: "IA & Data",            icon: Brain,    color: "#db2777", bg: "#fdf2f8",  techs: ["Machine Learning", "Deep Learning", "TensorFlow", "Keras", "CNN", "Scikit-learn"] },
  { label: "DevOps & Cloud",       icon: Cloud,    color: "#d97706", bg: "#fffbeb",  techs: ["Docker", "Kubernetes", "Terraform", "Linux", "Git", "GitHub Actions"] },
  { label: "Bases de données",     icon: Database, color: "#059669", bg: "#f0fdf4",  techs: ["PostgreSQL", "MongoDB", "Neo4j", "SQL", "Prisma"] },
  { label: "IA Agentique",         icon: Bot,      color: "#0d9488", bg: "#f0fdfa",  techs: ["N8N", "Anthropic API", "OpenAI API", "Ollama", "MCP", "LangChain"] },
  { label: "Outils IA & Prod",     icon: Zap,      color: "#4f46e5", bg: "#eef2ff",  techs: ["Claude AI", "Cursor", "GitHub Copilot", "Notion AI", "ChatGPT", "Windsurf"] },
];

/* Tag animé individuellement au hover */
function TechTag({ tech, color, bg }: { tech: string; color: string; bg: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={hovered ? { scale: 1.12, y: -2 } : { scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{
        display: "inline-block",
        padding: "0.3rem 0.75rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        fontWeight: 600,
        background: hovered ? color : bg,
        border: `1px solid ${color}30`,
        color: hovered ? "#ffffff" : color,
        letterSpacing: "0.01em",
        cursor: "default",
        transition: "background 0.2s, color 0.2s",
      }}
    >
      {tech}
    </motion.span>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stack" className="py-16 lg:py-24" style={{ background: "rgba(248,250,252,0.82)" }}>
      <div className="container-main">

        {/* Header — zoom in depuis l'opacité */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label" style={{ marginBottom: "1rem" }}>Compétences techniques</span>
          <h2 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Mon <span style={{ color: "#7c3aed" }}>stack</span>
          </h2>
          <p className="text-[#64748b]" style={{ maxWidth: "480px", fontSize: "1rem", lineHeight: 1.75, marginBottom: "3.5rem" }}>
            Technologies que je maîtrise et utilise quotidiennement — du code à la mise en production.
          </p>
        </motion.div>

        {/* Grid — spring bounce en cascade */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 60, rotate: -2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 160, damping: 18, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${cat.color}20` }}
              style={{
                background: "#ffffff",
                border: "1px solid #e8edf3",
                borderRadius: "20px",
                padding: "1.6rem",
                height: "100%",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}40`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#e8edf3"; }}
            >
              {/* Icône qui tourne au hover de la carte */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "40px", height: "40px",
                  borderRadius: "12px",
                  background: cat.bg,
                  border: `1px solid ${cat.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginBottom: "0.8rem",
                }}
              >
                <cat.icon size={18} style={{ color: cat.color }} />
              </motion.div>

              <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.95rem", marginBottom: "0.85rem" }}>{cat.label}</h3>
              <div style={{ height: "1px", background: "#f1f5f9", marginBottom: "1rem" }} />

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.techs.map((tech) => (
                  <TechTag key={tech} tech={tech} color={cat.color} bg={cat.bg} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner IA — slide depuis le bas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            display: "flex", alignItems: "center", gap: "1.25rem",
            background: "#ffffff",
            border: "1px solid #7c3aed25",
            borderRadius: "20px",
            padding: "1.4rem 1.75rem",
            borderLeft: "4px solid #7c3aed",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#faf5ff", border: "1px solid #7c3aed25", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.25rem" }}
          >
            ⚡
          </motion.div>
          <div>
            <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.3rem" }}>Productivité augmentée par l&apos;IA</p>
            <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
              J&apos;intègre les outils IA (Claude, Cursor, Copilot) dans mon workflow pour multiplier ma vitesse d&apos;exécution, améliorer la qualité du code et monter en compétence en continu — tout en gardant la maîtrise des fondamentaux.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
