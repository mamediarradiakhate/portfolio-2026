"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const EMAIL = "diakhate.mamediarrabousso99@gmail.com";

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

const contactInfos = [
  { icon: Mail,   label: "Email",        value: EMAIL,                  href: `mailto:${EMAIL}`,    color: "#0ea5e9", bg: "#f0f9ff" },
  { icon: Phone,  label: "Téléphone",    value: "+33 6 61 93 39 65",    href: "tel:+33661933965",   color: "#7c3aed", bg: "#faf5ff" },
  { icon: MapPin, label: "Localisation", value: "Île-de-France, France", href: undefined,            color: "#db2777", bg: "#fdf2f8" },
];

const socials = [
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn", color: "#0077B5", bg: "#eff8ff" },
  { icon: GithubIcon,   href: "https://github.com",   label: "GitHub",   color: "#334155", bg: "#f8fafc" },
  { icon: Mail,         href: `mailto:${EMAIL}`,       label: "Email",    color: "#0284c7", bg: "#f0f9ff" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject || "Contact Portfolio")}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 lg:py-24" style={{ background: "rgba(255,255,255,0.82)" }}>
      <div className="container-main">

        {/* Header — révèle avec un wipe horizontal */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label" style={{ marginBottom: "1rem" }}>Me rejoindre</span>
          <h2 className="font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Travaillons <span style={{ color: "#7c3aed" }}>ensemble</span>
          </h2>
          <p className="text-[#64748b]" style={{ maxWidth: "480px", fontSize: "1rem", lineHeight: 1.75, marginBottom: "3.5rem" }}>
            Je suis à la recherche d&apos;une opportunité en tant qu&apos;ingénieure Fullstack, IA Agentique &amp; Automatisation.
            N&apos;hésitez pas à me contacter pour échanger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "start" }}>

          {/* ── Colonne gauche — elastic pop depuis la gauche ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>

            {contactInfos.map(({ icon: Icon, label, value, href, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 6, boxShadow: `0 6px 20px ${color}15` }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8edf3",
                  borderLeft: `4px solid ${color}`,
                  borderRadius: "16px",
                  padding: "1rem 1.25rem",
                  display: "flex", alignItems: "center", gap: "1rem",
                  transition: "border-color 0.2s",
                }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ width: "42px", height: "42px", borderRadius: "12px", background: bg, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                >
                  <Icon size={18} style={{ color }} />
                </motion.div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: "#94a3b8", fontSize: "0.72rem", fontWeight: 600, marginBottom: "0.2rem" }}>{label}</p>
                  {href ? (
                    <a href={href} style={{ color: "#0f172a", fontSize: "0.87rem", fontWeight: 600, textDecoration: "none", wordBreak: "break-all", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}>
                      {value}
                    </a>
                  ) : (
                    <p style={{ color: "#0f172a", fontSize: "0.87rem", fontWeight: 600, margin: 0 }}>{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.45 }}
              style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "16px", padding: "1.25rem" }}
            >
              <p style={{ color: "#94a3b8", fontSize: "0.72rem", fontWeight: 600, marginBottom: "0.85rem" }}>Réseaux sociaux</p>
              <div style={{ display: "flex", gap: "0.65rem" }}>
                {socials.map(({ icon: Icon, href, label, color, bg }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.5 + i * 0.08 }}
                    whileHover={{ scale: 1.2, rotate: 10, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid #e2e8f0", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color, textDecoration: "none" }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Disponibilité */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}
              style={{ borderRadius: "16px", border: "1px solid #bbf7d0", background: "#f0fdf4", padding: "1.1rem 1.25rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }}
                />
                <span style={{ color: "#15803d", fontSize: "0.78rem", fontWeight: 800 }}>Disponible dès maintenant</span>
              </div>
              <p style={{ color: "#475569", fontSize: "0.83rem", lineHeight: 1.65, margin: 0 }}>
                Ouverte aux opportunités CDI / alternance en développement Fullstack, IA Agentique & Automatisation.
                Diplôme ingénieur prévu septembre 2026.
              </p>
            </motion.div>
          </div>

          {/* ── Colonne droite — formulaire glisse depuis le bas ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 24px rgba(15,23,42,0.06)" }}
          >
            <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "1rem", marginBottom: "1.5rem" }}>Envoyer un message</p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.85rem" }}>
                {[
                  { label: "Nom", key: "name", type: "text", placeholder: "Votre nom" },
                  { label: "Email", key: "email", type: "email", placeholder: "votre@email.com" },
                ].map(({ label, key, type, placeholder }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                  >
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#475569", display: "block", marginBottom: "0.4rem" }}>{label}</label>
                    <input type={type} required placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      style={{ width: "100%", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.75rem 1rem", fontSize: "0.87rem", color: "#0f172a", outline: "none", transition: "all 0.2s", boxSizing: "border-box" }}
                      onFocus={(e) => { e.target.style.borderColor = "#7c3aed60"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 3px #7c3aed10"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }}
                    />
                  </motion.div>
                ))}
              </div>

              {[
                { label: "Sujet", key: "subject", placeholder: "Opportunité, Collaboration, Question…", type: "input" },
              ].map(({ label, key, placeholder }) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#475569", display: "block", marginBottom: "0.4rem" }}>{label}</label>
                  <input type="text" placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={{ width: "100%", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.75rem 1rem", fontSize: "0.87rem", color: "#0f172a", outline: "none", transition: "all 0.2s", boxSizing: "border-box" }}
                    onFocus={(e) => { e.target.style.borderColor = "#7c3aed60"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 3px #7c3aed10"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.57 }}
              >
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#475569", display: "block", marginBottom: "0.4rem" }}>Message</label>
                <textarea required rows={5} placeholder="Décrivez votre projet ou opportunité…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.75rem 1rem", fontSize: "0.87rem", color: "#0f172a", outline: "none", resize: "none", transition: "all 0.2s", boxSizing: "border-box", fontFamily: "inherit" }}
                  onFocus={(e) => { e.target.style.borderColor = "#7c3aed60"; e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 3px #7c3aed10"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: sent ? "0 6px 20px #05966930" : "0 8px 24px #7c3aed35" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%", padding: "0.9rem", borderRadius: "14px",
                  background: sent ? "#059669" : "#7c3aed",
                  color: "#ffffff", fontWeight: 700, fontSize: "0.9rem",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  transition: "background 0.3s",
                }}
              >
                {sent
                  ? <><CheckCircle2 size={18} /> Message envoyé !</>
                  : <><Send size={16} /> Envoyer le message</>
                }
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
