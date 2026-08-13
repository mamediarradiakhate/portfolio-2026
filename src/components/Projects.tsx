"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects, categories, statusConfig, type Category } from "@/data/projects";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

/* ── Project Card ── */
function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: `0 16px 40px ${project.color}20` }}
    >
      <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
        <div style={{
          position: "relative",
          background: "#ffffff",
          border: "1px solid #e8edf3",
          borderTop: `4px solid ${project.color}`,
          borderRadius: "20px",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          height: "100%",
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

          {/* Hint clic */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: `${project.color}80`, fontSize: "0.72rem", fontWeight: 600, borderTop: "1px solid #f1f5f9", paddingTop: "0.75rem" }}>
            <span>Voir l&apos;étude de cas complète →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("Tous");
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
            Cliquez sur une carte pour voir l&apos;étude de cas technique complète.
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

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "1.25rem" }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
