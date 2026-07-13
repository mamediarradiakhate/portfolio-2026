"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "3S POS", href: "#pos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#e2e8f0] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div
          className="container-main flex items-center justify-between"
          style={{ height: "64px" }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0" style={{ gap: "0.6rem" }}>
            <div
              className="flex items-center justify-center rounded-full overflow-hidden"
              style={{ width: "32px", height: "32px", border: "2px solid #7c3aed", flexShrink: 0 }}
            >
              <img src="/photo.png" alt="Mame Diarra Bousso Diakhate" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            </div>
            <span className="font-bold text-[#0f172a] text-sm hidden lg:block">
              MDB<span style={{ color: "#7c3aed" }}>.</span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center" style={{ gap: "0.25rem" }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-lg transition-all duration-200 whitespace-nowrap"
                  style={{
                    padding: "0.45rem 1rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive ? "#7c3aed" : "#475569",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "#7c3aed0d", border: "1px solid #7c3aed22" }}
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span style={{ position: "relative" }}>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center" style={{ gap: "0.75rem" }}>
            <a
              href="#contact"
              className="hidden md:flex items-center text-white font-bold rounded-xl transition-colors"
              style={{
                padding: "0.55rem 1.25rem",
                fontSize: "0.875rem",
                background: "#7c3aed",
                boxShadow: "0 4px 14px #7c3aed28",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#6d28d9")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#7c3aed")}
            >
              Me contacter
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#64748b] hover:text-[#0f172a] transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#e2e8f0] md:hidden"
            style={{ padding: "1rem 1.5rem", boxShadow: "0 8px 24px #0f172a10" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#475569] hover:text-[#7c3aed] border-b border-[#f1f5f9] transition-colors"
                style={{ padding: "0.85rem 0", fontSize: "0.9rem", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-white font-bold rounded-xl"
              style={{
                marginTop: "1rem",
                padding: "0.75rem",
                background: "#7c3aed",
                fontSize: "0.9rem",
              }}
            >
              Me contacter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
