"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Pill, Server, BarChart3, Globe, Cloud, CheckCircle2, ExternalLink, Store, Stethoscope, UtensilsCrossed } from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Caisse POS", desc: "Scan produit, modes de paiement multiples (espèces, Orange Money, Wave), rendu monnaie, tickets PDF.", color: "#0ea5e9", bg: "#f0f9ff" },
  { icon: Pill, title: "Module Pharmacie", desc: "Médicaments par DCI, alertes péremption, gestion ordonnances, facturation mutuelles.", color: "#db2777", bg: "#fdf2f8" },
  { icon: Server, title: "Stock & Catalogue", desc: "Inventaire temps réel, alertes rupture, historique mouvements, import CSV en masse.", color: "#7c3aed", bg: "#faf5ff" },
  { icon: BarChart3, title: "Analytics & Rapports", desc: "Chiffre d'affaires, marges, meilleurs produits, performances par site et par caissier.", color: "#d97706", bg: "#fffbeb" },
  { icon: Globe, title: "Boutique en ligne", desc: "Vitrine e-commerce activable, commandes WhatsApp, dropshipping et réseau revendeurs.", color: "#059669", bg: "#f0fdf4" },
  { icon: Cloud, title: "Mode hybride", desc: "Fonctionne avec ou sans connexion. Synchronisation automatique au retour de la connexion.", color: "#4f46e5", bg: "#eef2ff" },
];

const sectors = [
  { icon: Store, label: "Commerce", desc: "Épicerie, prêt-à-porter, quincaillerie, téléphonie, bijouterie…", color: "#0ea5e9", bg: "#f0f9ff", available: true },
  { icon: Stethoscope, label: "Pharmacie", desc: "Officines et parapharmacies — contraintes réglementaires incluses.", color: "#db2777", bg: "#fdf2f8", available: true },
  { icon: UtensilsCrossed, label: "Restauration", desc: "Tables, tickets cuisine, menus QR code — en développement.", color: "#94a3b8", bg: "#f8fafc", available: false },
];

const plans = [
  { name: "Basic", price: "5 000", desc: "Caisse POS, stock, crédits clients, export PDF", color: "#0ea5e9" },
  { name: "Standard", price: "10 000", desc: "Tout Basic + boutique en ligne, commandes WhatsApp", color: "#7c3aed", highlight: true },
  { name: "Pro", price: "15 000", desc: "Tout Standard + multi-boutiques, reporting global", color: "#059669" },
];

const steps = [
  { label: "Conception & Architecture", done: true },
  { label: "Développement Frontend", done: true },
  { label: "Développement Backend & API", done: true },
  { label: "Base de données & migrations", done: true },
  { label: "Déploiement VPS", done: true },
  { label: "Tests & QA (1 mois)", done: false, active: true },
  { label: "Lancement officiel", done: false },
];

const techStack = ["React", "Node.js", "PostgreSQL", "Docker", "VPS", "TypeScript", "REST API", "JWT Auth"];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}

export default function POSSystem() {
  return (
    <section id="pos" style={{ background: "#f8fafc", padding: "6rem 0" }}>
      <div className="container-main">

        {/* ── Header ── */}
        <FadeIn>
          <span className="section-label" style={{ marginBottom: "1rem" }}>Projet Flagship</span>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <h2 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05 }}>
              3S <span style={{ color: "#7c3aed" }}>POS System</span>
            </h2>
            <span style={{ padding: "0.3rem 0.85rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, background: "#fef3c7", color: "#d97706", border: "1px solid #fde68a" }}>
              🚀 En phase de lancement
            </span>
          </div>

          {/* Slogan */}
          <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#7c3aed", marginBottom: "0.6rem", fontStyle: "italic" }}>
            "Gérez tout. Ne perdez rien."
          </p>
          <p className="text-[#64748b]" style={{ maxWidth: "620px", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "0.75rem" }}>
            Plateforme SaaS multi-secteurs conçue pour digitaliser les commerces et pharmacies au Sénégal et en Afrique francophone. Développée <strong className="text-[#0f172a]">entièrement en solo</strong> — de l&apos;architecture à la mise en production sur VPS.
          </p>
          <a href="https://3spossystem.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", fontWeight: 700, color: "#7c3aed", textDecoration: "none", marginBottom: "3rem" }}>
            <ExternalLink size={13} /> 3spossystem.com
          </a>
        </FadeIn>

        {/* ── Secteurs ── */}
        <FadeIn delay={0.07}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
            {sectors.map((s) => (
              <div key={s.label} style={{
                background: s.available ? "#ffffff" : "#f8fafc",
                border: `1px solid ${s.available ? s.color + "30" : "#e2e8f0"}`,
                borderRadius: "16px",
                padding: "1.1rem 1.25rem",
                display: "flex", alignItems: "center", gap: "0.85rem",
                opacity: s.available ? 1 : 0.65,
              }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: s.bg, border: `1px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <s.icon size={18} style={{ color: s.color }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span style={{ fontWeight: 700, color: s.available ? "#0f172a" : "#94a3b8", fontSize: "0.85rem" }}>{s.label}</span>
                    {!s.available && <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#94a3b8", background: "#f1f5f9", padding: "0.1rem 0.45rem", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Bientôt</span>}
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "#64748b", lineHeight: 1.4, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Grille principale ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "2rem", alignItems: "start" }}>

          {/* Colonne gauche */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Features */}
            <FadeIn delay={0.1}>
              <div style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "20px", padding: "1.75rem" }}>
                <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "1.25rem" }}>Fonctionnalités clés</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
                  {features.map((feat, i) => (
                    <FadeIn key={feat.title} delay={0.12 + i * 0.06}>
                      <div style={{ background: feat.bg, border: `1px solid ${feat.color}20`, borderRadius: "14px", padding: "1rem", transition: "all 0.25s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${feat.color}18`; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ffffff", border: `1px solid ${feat.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.65rem" }}>
                          <feat.icon size={17} style={{ color: feat.color }} />
                        </div>
                        <h4 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.82rem", marginBottom: "0.3rem" }}>{feat.title}</h4>
                        <p style={{ color: "#64748b", fontSize: "0.74rem", lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Plans tarifaires */}
            <FadeIn delay={0.25}>
              <div style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "20px", padding: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.1rem" }}>
                  <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", margin: 0 }}>Plans Commerce (FCFA/mois)</p>
                  <span style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600 }}>Sans engagement</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                  {plans.map((plan) => (
                    <div key={plan.name} style={{
                      borderRadius: "14px",
                      padding: "1rem",
                      border: plan.highlight ? `2px solid ${plan.color}50` : "1px solid #e8edf3",
                      background: plan.highlight ? `${plan.color}06` : "#f8fafc",
                      position: "relative",
                    }}>
                      {plan.highlight && (
                        <span style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: plan.color, color: "#fff", fontSize: "0.62rem", fontWeight: 800, padding: "0.15rem 0.55rem", borderRadius: "999px", whiteSpace: "nowrap" }}>
                          Populaire
                        </span>
                      )}
                      <p style={{ fontWeight: 800, color: plan.color, fontSize: "0.82rem", marginBottom: "0.2rem" }}>{plan.name}</p>
                      <p style={{ fontWeight: 900, color: "#0f172a", fontSize: "1.1rem", lineHeight: 1, marginBottom: "0.4rem" }}>
                        {plan.price} <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#94a3b8" }}>FCFA</span>
                      </p>
                      <p style={{ color: "#64748b", fontSize: "0.72rem", lineHeight: 1.5, margin: 0 }}>{plan.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Colonne droite — Statut + Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "sticky", top: "88px" }}>

            {/* Statut */}
            <FadeIn delay={0.15}>
              <div style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "20px", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0ea5e9" }} />
                  <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", margin: 0 }}>Statut du projet</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                      <div style={{ flexShrink: 0 }}>
                        {step.done ? (
                          <CheckCircle2 size={16} style={{ color: "#059669" }} />
                        ) : step.active ? (
                          <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "2px solid #0ea5e9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ea5e9" }} />
                          </div>
                        ) : (
                          <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "2px solid #e2e8f0" }} />
                        )}
                      </div>
                      <span style={{
                        fontSize: "0.82rem",
                        color: step.done ? "#94a3b8" : step.active ? "#0284c7" : "#64748b",
                        fontWeight: step.active ? 700 : 500,
                        textDecoration: step.done ? "line-through" : "none",
                      }}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Stack */}
            <FadeIn delay={0.22}>
              <div style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "20px", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7c3aed" }} />
                  <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", margin: 0 }}>Stack technique</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {techStack.map((tech) => (
                    <span key={tech} style={{ padding: "0.25rem 0.7rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, background: "#faf5ff", border: "1px solid #7c3aed25", color: "#7c3aed" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Note solo */}
            <FadeIn delay={0.3}>
              <div style={{ borderRadius: "16px", border: "1px solid #7c3aed20", background: "#7c3aed08", padding: "1.1rem 1.25rem", borderLeft: "4px solid #7c3aed" }}>
                <p style={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.75, margin: 0 }}>
                  <span style={{ color: "#0f172a", fontWeight: 800 }}>Développé en solo</span> — de l&apos;architecture à la mise en ligne sur VPS, en passant par le frontend, le backend, la base de données et le déploiement.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
