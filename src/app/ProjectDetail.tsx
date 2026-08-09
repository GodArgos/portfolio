import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ArrowUp, ArrowDown, Home, Github, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useData } from "./data";
import { useLang } from "./i18n";

const FONT = "'Montserrat', sans-serif";

function ItchioIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 245.371 220.736" fill="currentColor">
      <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.902-24.957 0 13.699 10.378 24.957 23.962 24.957 13.584 0 23.518-11.258 23.518-24.957 0 13.699 11.762 24.957 25.346 24.957h.446c13.584 0 25.346-11.258 25.346-24.957 0 13.699 9.934 24.957 23.518 24.957 13.584 0 23.962-11.258 23.962-24.957 0 13.699 11.318 24.957 24.902 24.957 11.313 0 23.773-11.716 23.773-25.046V38.298c-.2-6.353-21.287-30.578-31.99-36.933C180.118.196 65.322.047 31.99 1.365zm80.925 63.497c-1.19 6.963-6.758 12.909-13.617 15.547-4.68 1.768-9.725 1.62-15.023 2.75v2.37c2.15 1.36 4.28 2.73 6.5 4l.015.012h-.015c13.243 7.45 24.42 16.926 33.805 28.23 9.382-11.304 20.56-20.78 33.804-28.23h-.015l.015-.013c2.22-1.27 4.35-2.64 6.5-4v-2.37c-5.298-1.13-10.342-.982-15.022-2.75-6.86-2.638-12.428-8.584-13.617-15.547-.09-.528-.154-1.06-.194-1.596-.04.536-.105 1.068-.194 1.596h-.942zm-56.977 47.23c-7.67.04-14.41 1.4-19.49 4.92-12.07 8.37-10.58 27.38-10.37 43.8.12 9.5.98 19.61 3.9 26.14 5.15 11.55 16.56 18.4 27.99 20.98 12.9 2.93 27.23 2.28 38.55-4.41 11.32 6.69 25.65 7.34 38.55 4.41 11.43-2.58 22.84-9.43 27.99-20.98 2.92-6.53 3.78-16.64 3.9-26.14.21-16.42 1.7-35.43-10.37-43.8-5.08-3.52-11.82-4.88-19.49-4.92-4.55.02-9.46.7-14.61 2.45-5.73 1.94-10.44 4.67-14.47 7.73-4.03-3.06-8.74-5.79-14.47-7.73-5.15-1.75-10.06-2.43-14.61-2.45zm.23 17.05c3.12.04 5.97.52 8.54 1.38 4.38 1.45 7.5 3.72 9.5 5.82.78.83 1.5 1.7 2.15 2.55l4.16 5.65 4.16-5.65c.65-.85 1.37-1.72 2.15-2.55 2-2.1 5.12-4.37 9.5-5.82 2.57-.86 5.42-1.34 8.54-1.38 4.36.02 9.14.84 13.73 3.24 6.12 3.2 8.78 9.06 9.22 17.75.1 2.07.13 4.28.12 6.6-.05 10.5-.74 22.55-2.14 28.3-1.71 6.98-7.03 11.52-13.55 14.05-8.72 3.37-20.35 3.94-30.33 1.49l-1.5-.4v-38.05h-7.97v38.05l-1.5.4c-9.98 2.45-21.61 1.88-30.33-1.49-6.52-2.53-11.84-7.07-13.55-14.05-1.4-5.75-2.09-17.8-2.14-28.3-.01-2.32.02-4.53.12-6.6.44-8.69 3.1-14.55 9.22-17.75 4.59-2.4 9.37-3.22 13.73-3.24z" />
    </svg>
  );
}

function LinkIcon({ label }: { label: string }) {
  if (label === "itch.io") return <ItchioIcon size={17} />;
  if (label === "GitHub") return <Github size={17} />;
  return null;
}

const pillBox: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "0.875rem",
  padding: "0.45rem 0.85rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.15rem",
};

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLang();
  const { PROJECTS } = useData();
  const project = PROJECTS.find((p) => p.slug === slug);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-8 pt-40 pb-24" style={{ fontFamily: FONT }}>
        <p style={{ color: "#5a6a80", fontSize: "0.875rem" }}>{t.project.notFound}</p>
        <button onClick={() => navigate("/", { state: { scrollTo: "work" } })} className="mt-4 underline" style={{ color: "#135090", fontSize: "0.875rem" }}>
          {t.project.backHome}
        </button>
      </div>
    );
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Hero banner */}
      <div style={{ position: "relative", width: "100%", height: "65vh", background: "#1c1c1c" }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(28,28,28,0.1) 0%, rgba(28,28,28,1) 100%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 pb-24" style={{ marginTop: "-8rem", position: "relative" }}>
        <button
          onClick={() => navigate("/", { state: { scrollTo: "work" } })}
          className="flex items-center gap-2 mb-10 hover:opacity-70 transition-opacity"
          style={{ color: "#135090", fontSize: "1rem", fontFamily: FONT, fontWeight: 700, cursor: "pointer" }}
        >
          <ArrowLeft size={16} />
          {t.project.back}
        </button>

        {/* Top grid: title + meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Title + short desc */}
          <div className="md:col-span-2">
            <span style={{
              display: "inline-block", color: "#fff", fontSize: "0.72rem", fontFamily: FONT, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              background: "rgba(19,80,144,0.85)", border: "1px solid rgba(19,80,144,0.5)",
              borderRadius: "999px", padding: "4px 14px", marginBottom: "0.75rem",
            }}>
              {project.type}
            </span>
            <h1 style={{ fontFamily: FONT, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#135090", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              {project.title}
            </h1>
            <p style={{ color: "#e2e2e2", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: "38rem", fontFamily: FONT }}>
              {project.shortDescription}
            </p>
          </div>

          {/* Meta sidebar */}
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                { label: t.project.year,     value: project.year },
                { label: t.project.duration, value: project.duration },
                { label: t.project.team,     value: project.team === 1 ? t.project.solo : `${project.team} ${t.project.members}` },
                { label: t.project.engine,   value: project.engine },
                { label: t.project.role,     value: project.role },
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
              {project.tools.map((tool) => (
                <span key={tool} style={{
                  color: "#e2e2e2", fontSize: "0.7rem", fontFamily: FONT,
                  background: "rgba(19,80,144,0.12)", border: "1px solid rgba(19,80,144,0.3)",
                  borderRadius: "999px", padding: "3px 11px",
                }}>
                  {tool}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
                    style={{ color: "#135090", border: "1px solid #135090", width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem" }}
                  >
                    <LinkIcon label={link.label} />
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
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {project.description.map((para, i) => (
              <p key={i} style={{ color: "#e2e2e2", fontSize: "0.875rem", lineHeight: 1.85, fontFamily: FONT }}>{para}</p>
            ))}
          </div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ color: "#e2e2e2", fontSize: "1rem", fontFamily: FONT, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {t.project.screenshots}
              </p>
              {project.screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(src)}
                  className="group text-left focus:outline-none"
                  style={{ display: "block", overflow: "hidden", background: "#242424", borderRadius: "0.75rem", cursor: "zoom-in" }}
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
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
            src={lightbox}
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

      <FloatingNav onTop={scrollToTop} onBottom={scrollToBottom} onHome={() => navigate("/")} />
    </>
  );
}

function FloatingNav({ onTop, onBottom, onHome }: { onTop: () => void; onBottom: () => void; onHome: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-1 transition-all duration-300" style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}>
      {[
        { icon: <ArrowUp size={14} />,   label: "Top",    action: onTop    },
        { icon: <ArrowDown size={14} />, label: "Bottom", action: onBottom },
        { icon: <Home size={14} />,      label: "Home",   action: onHome   },
      ].map(({ icon, label, action }) => (
        <button
          key={label}
          onClick={action}
          title={label}
          className="flex items-center justify-center border transition-all duration-200 hover:opacity-70"
          style={{ width: "2.25rem", height: "2.25rem", background: "rgba(28,28,28,0.92)", borderColor: "rgba(255,255,255,0.1)", color: "#e2e2e2", backdropFilter: "blur(8px)", borderRadius: "0.5rem" }}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
