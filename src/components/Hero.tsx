"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Mail, Download, Sparkles, GraduationCap } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const tags = [
  "Ingénieure Fullstack",
  "Agents IA & Automatisation",
  "DevOps & Cloud",
  "Intégratrice ERP Odoo",
  "Fondatrice 3S Tech & IA",
  "Fondatrice 3S Design",
  "Docker & Kubernetes",
  "Machine Learning",
  "React & Next.js",
  "Python & Node.js",
];

const tagColors = [
  { bg: "#f5f3ff", border: "#ddd6fe", text: "#6d28d9" },
  { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
  { bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d" },
  { bg: "#fff7ed", border: "#fed7aa", text: "#c2410c" },
  { bg: "#fdf2f8", border: "#fbcfe8", text: "#9d174d" },
  { bg: "#f0f9ff", border: "#bae6fd", text: "#0369a1" },
];

export default function Hero() {
  const doubled = [...tags, ...tags];

  return (
    <section className="min-h-screen flex flex-col" style={{ background: "rgba(248,250,252,0.82)" }}>

      <div className="flex-1 flex items-center">
        <div className="container-main w-full" style={{ paddingTop: "6rem", paddingBottom: "3rem" }}>

          {/* ── MOBILE : photo circulaire centrée + texte centré ── */}
          <div className="flex flex-col items-center text-center lg:hidden" style={{ gap: "1.5rem" }}>

            {/* Photo mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ position: "relative", marginTop: "1rem" }}
            >
              <div style={{
                width: "150px", height: "150px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #ddd6fe",
                boxShadow: "0 8px 32px #7c3aed20",
              }}>
                <img src="/photo.png" alt="Mame Diarra Bousso Diakhate"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{
                position: "absolute", bottom: "-4px", right: "-4px",
                background: "#7c3aed", borderRadius: "50%",
                width: "32px", height: "32px",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "2px solid white"
              }}><Sparkles size={14} color="#ffffff" /></div>
            </motion.div>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 14px", borderRadius: "999px",
              border: "1px solid #bbf7d0", background: "#f0fdf4",
              color: "#15803d", fontSize: "0.8rem", fontWeight: 600,
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
              Disponible · Île-de-France & Remote
            </div>

            {/* Nom */}
            <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.05, color: "#0f172a", letterSpacing: "-0.02em" }}>
              Mame Diarra<br />
              <span style={{ color: "#7c3aed" }}>Bousso Diakhate</span>
            </h1>

            {/* Titre animé */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
              <div style={{ width: "3px", height: "24px", borderRadius: "99px", background: "#7c3aed", flexShrink: 0 }} />
              <p style={{ fontSize: "1rem", fontWeight: 600, color: "#475569" }}>
                <TypeAnimation
                  sequence={["Ingénieure Fullstack", 2200, "Développeuse AI & Agents IA", 2200, "Experte DevOps & Cloud", 2200, "Fondatrice 3S Tech & IA", 2200]}
                  wrapper="span" speed={60} repeat={Infinity}
                />
              </p>
            </div>

            {/* Description */}
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#64748b", maxWidth: "340px" }}>
              À la recherche d&apos;un poste d&apos;ingénieure Fullstack / IA Agentique en CDI.
              Apprentie ingénieure informatique en dernière année à l&apos;ESIEE Paris.
              Fondatrice de{" "}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>3S Tech & IA</span>
              {" "}et{" "}
              <span style={{ color: "#0284c7", fontWeight: 600 }}>3S Design</span>.
            </p>

            {/* Boutons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", maxWidth: "280px" }}>
              <a href="#projects" style={{
                display: "block", textAlign: "center",
                padding: "12px", borderRadius: "12px",
                background: "#7c3aed", color: "white",
                fontWeight: 700, fontSize: "0.9rem",
                boxShadow: "0 4px 14px #7c3aed30",
              }}>Voir mes projets →</a>
              <div style={{ display: "flex", gap: "8px" }}>
                <a href="/cv" style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  padding: "10px", borderRadius: "12px",
                  border: "2px solid #7c3aed", color: "#7c3aed",
                  fontWeight: 700, fontSize: "0.85rem",
                }}>
                  <Download size={14} /> CV
                </a>
                <a href="#contact" style={{
                  flex: 1, textAlign: "center",
                  padding: "10px", borderRadius: "12px",
                  border: "1px solid #e2e8f0", color: "#475569",
                  fontWeight: 500, fontSize: "0.85rem",
                }}>Contact</a>
              </div>
            </div>

            {/* Réseaux */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {[
                { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:diakhate.mamediarrabouss@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    border: "1px solid #e2e8f0", background: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#64748b",
                  }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── DESKTOP : deux colonnes ── */}
          <div className="hidden lg:grid lg:grid-cols-2" style={{ gap: "5rem", alignItems: "center" }}>

            {/* LEFT — chaque élément animé individuellement */}
            <div>
              {/* Badge disponible */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                style={{ marginBottom: "2rem" }}
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d] text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  Disponible · Île-de-France & Remote
                </div>
              </motion.div>

              {/* Titre ligne 1 */}
              <div style={{ overflow: "hidden", marginBottom: "0.1rem" }}>
                <motion.div
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", lineHeight: "1.08", margin: 0 }}>
                    Mame Diarra
                  </h1>
                </motion.div>
              </div>

              {/* Titre ligne 2 */}
              <div style={{ overflow: "hidden", marginBottom: "1.8rem" }}>
                <motion.div
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="font-black tracking-tight" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", lineHeight: "1.08", margin: 0 }}>
                    <span style={{ color: "#7c3aed" }}>Bousso Diakhate</span>
                    <span style={{ color: "#e2e8f0" }}>.</span>
                  </h1>
                </motion.div>
              </div>

              {/* TypeAnimation */}
              <motion.div
                className="flex items-center gap-3"
                style={{ marginBottom: "1.8rem" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              >
                <div className="w-1 h-7 rounded-full flex-shrink-0" style={{ background: "#7c3aed" }} />
                <p className="text-lg font-semibold text-[#475569]">
                  <TypeAnimation
                    sequence={[
                      "Ingénieure Fullstack", 2200,
                      "Développeuse AI & Agents IA", 2200,
                      "Experte DevOps & Cloud", 2200,
                      "Fondatrice 3S Tech & IA", 2200,
                      "Intégratrice ERP Odoo", 2200,
                    ]}
                    wrapper="span" speed={60} repeat={Infinity}
                  />
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-[#64748b] text-base leading-[1.85] max-w-lg"
                style={{ marginBottom: "2.5rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.58, ease: "easeOut" }}
              >
                À la recherche d&apos;un poste d&apos;ingénieure Fullstack / IA Agentique en CDI.
                Apprentie ingénieure informatique en dernière année à l&apos;ESIEE Paris.
                Spécialisée en développement Fullstack, IA Agentique et Automatisation.
                Fondatrice de{" "}
                <span style={{ color: "#7c3aed" }} className="font-semibold">3S Tech & IA</span>
                {" "}et{" "}
                <span className="text-[#0284c7] font-semibold">3S Design</span>.
              </motion.p>

              {/* Boutons — stagger */}
              <motion.div
                className="flex flex-wrap gap-3"
                style={{ marginBottom: "2.5rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 24px #7c3aed35" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl bg-[#7c3aed] text-white font-bold text-sm"
                  style={{ boxShadow: "0 4px 14px #7c3aed25" }}
                >
                  Voir mes projets →
                </motion.a>
                <motion.a
                  href="/cv"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm"
                  style={{ border: "2px solid #7c3aed", color: "#7c3aed" }}
                >
                  <Download size={15} /> Télécharger CV
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl border border-[#e2e8f0] bg-white text-[#475569] font-medium text-sm"
                >
                  Me contacter
                </motion.a>
              </motion.div>

              {/* Réseaux sociaux */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <span className="text-[11px] text-[#94a3b8] font-bold uppercase tracking-widest">Retrouvez-moi</span>
                <div className="w-8 h-px bg-[#e2e8f0]" />
                {[
                  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:diakhate.mamediarrabousso99@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.9 + i * 0.07 }}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="w-10 h-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#7c3aed] hover:border-[#c4b5fd] transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Photo avec badges animés séparément */}
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, scale: 0.88, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="absolute -inset-5 rounded-3xl rotate-2" style={{ background: "#7c3aed10" }} />
                <div className="relative rounded-2xl border-2 border-[#e2e8f0] shadow-xl overflow-hidden"
                  style={{ width: "340px", height: "420px" }}>
                  <img src="/photo.png" alt="Mame Diarra Bousso Diakhate"
                    className="w-full h-full object-cover object-top" />
                </div>

                {/* Badge ESIEE — pop depuis le bas-gauche */}
                <motion.div
                  className="absolute -bottom-5 -left-6 bg-white rounded-2xl border border-[#e2e8f0] px-4 py-3 shadow-lg flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.75 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#f5f3ff] flex items-center justify-center"><GraduationCap size={18} color="#7c3aed" /></div>
                  <div>
                    <p className="text-[#0f172a] text-xs font-bold">ESIEE Paris</p>
                    <p className="text-[#94a3b8] text-xs">Ingénieure en Informatique</p>
                  </div>
                </motion.div>

                {/* Badge Open to work — pop depuis le haut-droit */}
                <motion.div
                  className="absolute -top-4 -right-4 rounded-xl px-4 py-2 shadow-lg"
                  style={{ background: "#7c3aed" }}
                  initial={{ opacity: 0, scale: 0.5, y: -15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.88 }}
                >
                  <p className="text-white text-xs font-bold flex items-center gap-1">Open to work <Sparkles size={12} /></p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* BARRE DÉFILANTE */}
      <div className="overflow-hidden" style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}>
        <motion.div
          className="flex w-max"
          style={{ gap: "1rem" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((tag, i) => {
            const c = tagColors[i % tagColors.length];
            return (
              <span
                key={i}
                className="flex-shrink-0 rounded-full font-bold border whitespace-nowrap"
                style={{
                  padding: "clamp(0.6rem, 1.5vw, 1.1rem) clamp(1.2rem, 2.5vw, 2.5rem)",
                  fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)",
                  background: c.bg,
                  borderColor: c.border,
                  color: c.text,
                }}
              >
                {tag}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col items-center gap-2 py-6 text-[#94a3b8] hover:text-[#64748b] transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Découvrir</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
