import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ArrowUp, ArrowDown, Home, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useData } from "./data";
import { useLang } from "./i18n";
import { assetPath } from "./AssetPath.ts";

const FONT = "'Montserrat', sans-serif";

const pillBox: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "0.875rem",
  padding: "0.45rem 0.85rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.15rem",
};

export function ProfessionalProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLang();
  const { PROFESSIONAL_PROJECTS } = useData();
  const proj = PROFESSIONAL_PROJECTS.find((p) => p.slug === slug);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (!proj) {
    return (
      <div className="max-w-6xl mx-auto px-8 pt-40 pb-20">
        <p style={{ color: "#5a6a80", fontFamily: FONT }}>{t.project.notFound}</p>
        <button
          onClick={() => navigate("/", { state: { scrollTo: "professional" } })}
          style={{ color: "#135090", fontFamily: FONT, marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <ArrowLeft size={14} /> {t.project.backHome}
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Hero banner */}
      <div style={{ position: "relative", height: "65vh", overflow: "hidden" }}>
        <img src={assetPath(proj.image)} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, #1c1c1c 100%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 pb-32" style={{ marginTop: "-8rem", position: "relative" }}>
        <button
          onClick={() => navigate("/", { state: { scrollTo: "professional" } })}
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-70 mb-10"
          style={{ color: "#135090", fontSize: "1rem", fontFamily: FONT, fontWeight: 700, letterSpacing: "0.02em", cursor: "pointer" }}
        >
          <ArrowLeft size={16} />
          {t.project.back}
        </button>

        {/* Top grid: title + meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Title */}
          <div className="md:col-span-2">
            <span style={{
              display: "inline-block",
              color: "#fff", fontSize: "0.72rem", fontFamily: FONT, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              background: "rgba(19,80,144,0.85)", border: "1px solid rgba(19,80,144,0.5)",
              borderRadius: "999px", padding: "4px 14px", marginBottom: "0.5rem",
            }}>
              {proj.type}
            </span>
            <h1 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e2e2e2", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {proj.title}
            </h1>
          </div>

          {/* Meta sidebar */}
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                { label: t.project.year,    value: proj.year    },
                { label: t.project.role,    value: proj.role    },
                { label: t.project.company, value: proj.company },
              ].map(({ label, value }) => (
                <div key={label} style={pillBox}>
                  <span style={{ color: "#5a6a80", fontSize: "0.52rem", fontFamily: FONT, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ color: "#e2e2e2", fontSize: "0.8rem", fontFamily: FONT, fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "1.25rem" }} />

            <p style={{ color: "#5a6a80", fontSize: "0.58rem", fontFamily: FONT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {t.project.tools}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {proj.tags.map((tag) => (
                <span key={tag} style={{
                  color: "#e2e2e2", fontSize: "0.7rem", fontFamily: FONT,
                  background: "rgba(19,80,144,0.12)", border: "1px solid rgba(19,80,144,0.3)",
                  borderRadius: "999px", padding: "3px 11px",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {proj.links && proj.links.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem" }}>
                {proj.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
                    style={{ color: "#135090", border: "1px solid #135090", padding: "6px 16px", borderRadius: "0.75rem", fontSize: "0.75rem", fontFamily: FONT }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "3rem" }} />

        {/* Description + screenshots side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {proj.description.map((para, i) => (
              <p key={i} style={{ color: "rgba(226,226,226,0.7)", fontSize: "0.9rem", fontFamily: FONT, lineHeight: 1.85 }}>{para}</p>
            ))}
          </div>

          {/* Screenshots */}
          {proj.screenshots.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ color: "#e2e2e2", fontSize: "1rem", fontFamily: FONT, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {t.project.screenshots}
              </p>
              {proj.screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(src)}
                  className="group text-left focus:outline-none"
                  style={{ display: "block", overflow: "hidden", background: "#242424", borderRadius: "0.75rem", cursor: "zoom-in" }}
                >
                  <img
                    src={assetPath(src)}
                    alt={`${proj.title} screenshot ${i + 1}`}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ height: "12rem", opacity: 0.85 }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div ref={bottomRef} style={{ height: "1px", marginTop: "4rem" }} />
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: "absolute", top: "1.25rem", right: "1.25rem",
              color: "#e2e2e2", background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: "0.5rem",
              width: "2.25rem", height: "2.25rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={16} />
          </button>
          <img
            src={assetPath(lightbox)}
            alt="Screenshot"
            onClick={e => e.stopPropagation()}
            style={{
              width: "90vw", maxHeight: "90vh",
              objectFit: "contain", borderRadius: "0.75rem",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              cursor: "default",
            }}
          />
        </div>
      )}

      {/* Floating nav */}
      <div style={{ position: "fixed", bottom: "2rem", right: "2rem", display: "flex", flexDirection: "column", gap: "0.4rem", opacity: showNav ? 1 : 0, transition: "opacity 0.3s", pointerEvents: showNav ? "auto" : "none", zIndex: 50 }}>
        {[
          { icon: <ArrowUp size={14} />,   label: "Top",    fn: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
          { icon: <ArrowDown size={14} />, label: "Bottom", fn: () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }) },
          { icon: <Home size={14} />,      label: "Home",   fn: () => navigate("/") },
        ].map(({ icon, label, fn }) => (
          <button key={label} onClick={fn} aria-label={label} style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(28,28,28,0.9)", border: "1px solid rgba(255,255,255,0.1)", color: "#e2e2e2", cursor: "pointer", borderRadius: "0.5rem" }}>
            {icon}
          </button>
        ))}
      </div>
    </>
  );
}
