export default function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] py-10" style={{ background: "rgba(255,255,255,0.82)" }}>
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#64748b] text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-[#0f172a]">Mame Diarra Bousso Diakhate</span>
          <span className="text-[#7c3aed]"> · </span>
          Ingénieure Fullstack, IA Agentique & Automatisation
        </p>
        <p className="text-xs text-[#94a3b8]">
          Développé avec Next.js · Framer Motion · Tailwind CSS v4
        </p>
      </div>
    </footer>
  );
}
