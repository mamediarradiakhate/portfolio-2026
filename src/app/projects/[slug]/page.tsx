import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects, statusConfig, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Mame Diarra Bousso`,
    description: project.shortDesc,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const status = statusConfig[project.status];

  return (
    <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "5rem" }}>
      <div className="container-main">

        <Link href="/#projects" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", marginBottom: "2rem" }}>
          <ArrowLeft size={16} /> Tous les projets
        </Link>

        {/* Hero */}
        <div style={{ borderTop: `4px solid ${project.color}`, background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "20px", padding: "2rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}>{project.category}</span>
            {project.year && <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0" }}>{project.year}</span>}
            <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: status.bg, color: status.color }}>{project.status}</span>
          </div>
          <h1 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.1, marginBottom: "0.5rem" }}>{project.title}</h1>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: 600, marginBottom: "1.25rem" }}>
            {project.role ? `${project.role} · ` : ""}{project.context} · {project.period}
          </p>
          <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.8, maxWidth: "760px" }}>{project.shortDesc}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem", padding: "0.65rem 1.4rem", borderRadius: "12px", background: project.color, color: "#ffffff", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none" }}>
              <ExternalLink size={15} /> Voir le site
            </a>
          )}
        </div>

        {/* Captures d'écran de l'application */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ marginBottom: "1rem" }}>Interface d&apos;une entreprise cliente</span>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1rem", marginTop: "1rem" }}>
              {project.screenshots.map((shot) => (
                <div key={shot.src} style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #e8edf3", background: "#ffffff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt={shot.label} style={{ width: "100%", display: "block" }} />
                  <p style={{ padding: "0.6rem 0.85rem", fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>{shot.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Étude de cas détaillée, ou repli sur contexte / approche / résultats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {project.caseStudy && project.caseStudy.length > 0 ? (
            project.caseStudy.map((section) => (
              <div key={section.title} style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "18px", padding: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "11px", background: `${project.color}12`, border: `1px solid ${project.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <section.icon size={18} style={{ color: project.color }} />
                  </div>
                  <h2 style={{ fontWeight: 800, color: "#0f172a", fontSize: "1.05rem" }}>{section.title}</h2>
                </div>
                {section.diagram && (
                  <div style={{ margin: "0 0 1.1rem 0", padding: "1rem", borderRadius: "12px", background: "#f8fafc", border: "1px solid #f1f5f9" }}>
                    <section.diagram color={project.color} />
                  </div>
                )}
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.85 }}>{section.body}</p>
              </div>
            ))
          ) : (
            <>
              <div style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "18px", padding: "1.75rem" }}>
                <h2 style={{ fontWeight: 800, color: "#0f172a", fontSize: "1.05rem", marginBottom: "0.6rem" }}>Contexte</h2>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.85 }}>{project.challenge}</p>
              </div>
              <div style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "18px", padding: "1.75rem" }}>
                <h2 style={{ fontWeight: 800, color: "#0f172a", fontSize: "1.05rem", marginBottom: "0.6rem" }}>Approche</h2>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.85 }}>{project.solution}</p>
              </div>
              <div style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "18px", padding: "1.75rem" }}>
                <h2 style={{ fontWeight: 800, color: "#0f172a", fontSize: "1.05rem", marginBottom: "0.6rem" }}>Résultats</h2>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.85 }}>{project.impact}</p>
              </div>
            </>
          )}
        </div>

        {/* Fonctionnalités */}
        {project.features && project.features.length > 0 && (
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ marginBottom: "1rem" }}>Fonctionnalités</span>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.6rem", marginTop: "0.75rem" }}>
              {project.features.map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.7rem 0.9rem", borderRadius: "12px", background: "#ffffff", border: "1px solid #e8edf3" }}>
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: `${project.color}15`, border: `1px solid ${project.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                    <CheckCircle2 size={10} style={{ color: project.color }} />
                  </div>
                  <span style={{ color: "#475569", fontSize: "0.83rem", lineHeight: 1.6 }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stack technique */}
        <div>
          <span className="section-label" style={{ marginBottom: "1rem" }}>Stack technique</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.75rem" }}>
            {project.stack.map((tech) => (
              <span key={tech} style={{ padding: "0.35rem 0.9rem", borderRadius: "999px", fontSize: "0.82rem", fontWeight: 600, background: `${project.color}0d`, border: `1px solid ${project.color}28`, color: project.color }}>{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
