import { useNavigate, useLocation } from "react-router";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  ChevronLeft, ChevronRight,
  Briefcase, Clock, Award, Gamepad2, User, Wrench, Mail, Github, Linkedin, ExternalLink
} from "lucide-react";
import { useData } from "./data";
import { useLang } from "./i18n";
import { Reveal } from "./Reveal";
import { assetPath } from "./AssetPath.ts";

const FONT = "'Montserrat', sans-serif";

const HEADING_STYLE: React.CSSProperties = {
  fontFamily: FONT,
  fontWeight: 700,
  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
  color: "#e2e2e2",
  letterSpacing: "-0.01em",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

import profilePhoto from "../imports/FOTOCV.png";

function ItchioIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <path d="M 16 5 C 12.748 5 8.31211 5.05086 7.41211 5.13086 C 6.40211 5.73686 4.40281 8.03095 4.38281 8.62695 L 4.38281 9.62695 C 4.38281 10.89 5.56572 12 6.63672 12 C 7.91972 12 8.99023 10.93 8.99023 9.66797 C 8.99023 10.93 10.0305 12 11.3125 12 C 12.6055 12 13.6055 10.931 13.6055 9.66797 C 13.6055 10.93 14.6953 12 15.9883 12 L 16.0098 12 C 17.3028 12 18.3926 10.931 18.3926 9.66797 C 18.3926 10.93 19.4025 12 20.6855 12 C 21.9685 12 23.0098 10.931 23.0098 9.66797 C 23.0098 10.93 24.0803 12 25.3633 12 C 26.4343 12 27.6152 10.89 27.6152 9.62695 L 27.6152 8.62695 C 27.5952 8.03095 25.5959 5.73686 24.5859 5.13086 C 21.4439 5.01986 19.252 5 16 5 Z M 13.5508 11.7422 C 12.4978 13.5522 9.85231 13.5739 8.82031 11.7539 C 8.19031 12.8459 6.7643 13.2675 6.1543 13.0605 C 5.9763 14.9595 5.85348 24.7087 7.14648 26.3438 C 10.9435 27.2288 21.1645 27.2097 24.8535 26.3438 C 26.3485 24.8197 26.0137 14.8215 25.8457 13.0605 C 25.2357 13.2675 23.8095 12.8459 23.1895 11.7539 C 22.1465 13.5739 19.5012 13.5522 18.4492 11.7422 C 18.1242 12.3322 17.367 13.1094 16 13.1094 C 14.997 13.1484 14.0518 12.6072 13.5508 11.7422 Z M 11.4199 14 C 12.2199 14 12.9501 14.0005 13.8301 14.9805 C 15.2801 14.8305 16.7199 14.8305 18.1699 14.9805 C 19.0599 14.0105 19.7801 14.0098 20.5801 14.0098 C 23.1601 14.0098 23.7809 17.8196 24.7109 21.0996 C 25.5509 24.1496 24.4291 24.2305 23.0391 24.2305 C 20.9691 24.1505 19.8203 22.6506 19.8203 21.1406 C 17.8903 21.4606 14.8097 21.5806 12.1797 21.1406 C 12.1797 22.6506 11.0309 24.1505 8.96094 24.2305 C 7.57094 24.2305 6.44906 24.1496 7.28906 21.0996 C 8.21906 17.7996 8.83992 14.0098 11.4199 14.0098 L 11.4199 14 Z M 16 16.877 C 16 16.877 14.306 18.4394 14 18.9844 L 15.1074 18.9434 L 15.1074 19.9102 C 15.1074 19.9682 15.926 19.918 16 19.918 C 16.447 19.935 16.8926 19.9512 16.8926 19.9102 L 16.8926 18.9434 L 18 18.9844 C 17.694 18.4384 16 16.877 16 16.877 Z" />
    </svg>
  );
}

export function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLang();
  const { PROJECTS, EXPERIENCE, PROFESSIONAL_PROJECTS, CERTIFICATES } = useData();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal delay={0}>
              <p style={{ color: "#5a6a80", fontSize: "0.81rem", fontFamily: FONT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                {t.hero.label}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 style={{ fontFamily: FONT, fontSize: "clamp(1.65rem, 3.75vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#135090", lineHeight: 1.05, marginBottom: "2rem" }}>
                {t.hero.tagline}
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p style={{ color: "#e2e2e2", maxWidth: "26rem", fontSize: "1.31rem", fontFamily: FONT, lineHeight: 1.75 }}>
                {t.hero.bio}
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center md:justify-end">
            <Reveal delay={180}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
                {/* Circular photo */}
                <div style={{ width: "clamp(180px, 50vw, 280px)", height: "clamp(180px, 50vw, 280px)", borderRadius: "50%", overflow: "hidden", position: "relative", border: "2px solid rgba(19,80,144,0.35)", boxShadow: "0 0 0 6px rgba(19,80,144,0.08)" }}>
                  <img
                    src={profilePhoto}
                    alt="Joaquin Incio"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.88 }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(19,80,144,0.15) 0%, transparent 60%)" }} />
                </div>

                {/* Stat boxes — pill/curved shape */}
                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
                  <StatBox label={t.stats.years} value="4+" />
                  <StatBox label={t.stats.games} value="7" />
                  <StatBox label={t.stats.tech} value={t.stats.techValue} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PROFESSIONAL WORK ── */}
      <section id="professional" style={{ paddingTop: "2.24rem", paddingBottom: "2.24rem" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8" style={{ marginBottom: "1rem" }}>
          <Reveal>
            <h2 style={HEADING_STYLE}>
              <Briefcase size={22} color="#135090" />
              {t.professional.title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <ProfessionalCarousel onNavigate={(slug) => navigate(`/professional/${slug}`)} />
        </Reveal>
      </section>

      <Divider />

      {/* ── EXPERIENCE + CERTIFICATES — 65/35 desktop, stacked mobile ── */}
      <section id="experience" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 style={{ ...HEADING_STYLE, marginBottom: "3rem" }}>
            <Clock size={22} color="#135090" />
            {t.experience.title}
          </h2>
        </Reveal>
        <div className="experience-grid">
          <ExperienceTimeline />
          <div>
            <Reveal>
              <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.95rem", color: "#e2e2e2", letterSpacing: "-0.01em", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Award size={15} color="#135090" />
                {t.certificates.title}
              </h3>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {CERTIFICATES.map((cert, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{ padding: "0.85rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.2rem" }}>
                      <p style={{ color: "#e2e2e2", fontFamily: FONT, fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.4 }}>
                        {cert.title}
                      </p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View certificate"
                          className="hover:opacity-60 transition-opacity"
                          style={{ color: "#135090", flexShrink: 0, marginTop: "2px" }}
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                      <p style={{ color: "#5a6a80", fontFamily: FONT, fontSize: "0.62rem" }}>{cert.issuer}</p>
                      <span style={{ color: "#135090", fontFamily: FONT, fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.06em", flexShrink: 0 }}>
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PERSONAL PROJECTS ── */}
      <section id="work" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 style={{ ...HEADING_STYLE, marginBottom: "2rem" }}>
            <Gamepad2 size={22} color="#135090" />
            {t.work.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} onClick={() => navigate(`/project/${project.slug}`)} />
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── ABOUT + SKILLS ── */}
      <section id="about" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <Reveal>
            <h2 style={{ ...HEADING_STYLE, marginBottom: "2rem" }}>
              <User size={22} color="#135090" />
              {t.about.title}
            </h2>
          </Reveal>
          {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p style={{ color: "#e2e2e2", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: i < 2 ? "1rem" : 0, maxWidth: "28rem", fontFamily: FONT }}>{p}</p>
            </Reveal>
          ))}
        </div>
        <div>
          <Reveal>
            <h2 style={{ ...HEADING_STYLE, marginBottom: "2rem" }}>
              <Wrench size={22} color="#135090" />
              {t.skills.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 0.6rem" }}>
              {[
                  "Unity",
                  "C#",
                  "C++",
                  "Unity XR Interaction Toolkit",
                  "Unity Localization",
                  "Mirror Networking",
                  "DOTween",
                  "ScriptableObjects",
                  "Addressables",
                  "Git",
                  "GitHub",
                  "GitLab",
                  "Raylib",
                ].map((skill) => (
                <span key={skill} style={{
                  color: "#e2e2e2", fontSize: "0.75rem", fontFamily: FONT,
                  background: "rgba(19,80,144,0.12)", border: "1px solid rgba(19,80,144,0.35)",
                  borderRadius: "999px", padding: "4px 14px", letterSpacing: "0.01em",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Reveal>
          <h2 style={{ ...HEADING_STYLE, marginBottom: "0.75rem", justifyContent: "center" }}>
            <Mail size={22} color="#135090" />
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p style={{ color: "#135090", fontSize: "0.65rem", fontFamily: FONT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            {t.contact.label}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ color: "rgba(226,226,226,0.7)", fontSize: "0.9rem", fontFamily: FONT, lineHeight: 1.75, maxWidth: "32rem", marginBottom: "2.5rem" }}>
            {t.contact.message}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={`mailto:${t.contact.email}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "#135090", color: "#fff",
                fontSize: "0.78rem", fontFamily: FONT, fontWeight: 700, letterSpacing: "0.04em",
                padding: "0.65rem 1.4rem", borderRadius: "999px",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-80"
            >
              <Mail size={14} />
              {t.contact.emailBtn}
            </a>

            <div style={{ display: "flex", gap: "0.6rem" }}>
              {[
                { href: "https://github.com/GodArgos/", icon: <Github size={17} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/joaquin-incio/", icon: <Linkedin size={17} />, label: "LinkedIn" },
                { href: "https://godargos.itch.io/", icon: <ItchioIcon size={17} />, label: "itch.io" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: "2.5rem", height: "2.5rem", borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.15)", color: "#e2e2e2",
                    transition: "opacity 0.2s, border-color 0.2s",
                  }}
                  className="hover:opacity-60"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p style={{ color: "#5a6a80", fontSize: "0.9rem", fontFamily: FONT, letterSpacing: "0.04em", marginTop: "1.5rem" }}>
            {t.contact.email}
          </p>
        </Reveal>
      </section>
    </>
  );
}

// ── Stat Box — pill/curved shape ───────────────────────────────────────────────
function StatBox({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(19,80,144,0.3)",
      borderRadius: "1rem",
      padding: "0.75rem 1.1rem",
      display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem",
      minWidth: small ? "5.5rem" : "4.5rem",
    }}>
      <span style={{ color: "#135090", fontFamily: FONT, fontWeight: 700, fontSize: small ? "0.78rem" : "1.875rem", lineHeight: 1.1, textAlign: "center" }}>{value}</span>
      <span style={{ color: "#5a6a80", fontFamily: FONT, fontSize: "0.58rem", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.3 }}>{label}</span>
    </div>
  );
}

function Divider() {
  return <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "0 2rem" }} />;
}

// ── Personal Project Card — Balatro-style 3D tilt ────────────────────────────
function ProjectCard({ project, onClick }: { project: (typeof PROJECTS)[0]; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const { t } = useLang();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      rx: -((y - cy) / cy) * 11,
      ry: ((x - cx) / cx) * 14,
      gx: (x / rect.width) * 100,
      gy: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <div style={{ perspective: "900px", perspectiveOrigin: "50% 50%" }}>
      <button
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="text-left focus:outline-none"
        style={{
          background: "#242424",
          borderRadius: "1.5rem",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
          cursor: "pointer",
          transformStyle: "preserve-3d",
          transform: hovered
            ? `translateY(-10px) scale(1.035) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
            : "translateY(0) scale(1) rotateX(0deg) rotateY(0deg)",
          transition: hovered
            ? "transform 0.08s ease-out, box-shadow 0.2s ease"
            : "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(19,80,144,0.25), 0 8px 24px rgba(19,80,144,0.12)`
            : "0 2px 8px rgba(0,0,0,0.25)",
          willChange: "transform",
        }}
      >
        <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
          <img
            src={assetPath(project.image)}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.55s ease" }}
          />
          {project.video && (
            <video
              ref={videoRef}
              src={assetPath(project.video)}
              loop muted playsInline
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: hovered ? 1 : 0, transition: "opacity 0.5s" }}
            />
          )}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,28,28,0.55) 0%, transparent 60%)" }} />
          <div style={{
            position: "absolute", top: "0.85rem", left: "1rem",
            background: "rgba(19,80,144,0.85)", color: "#fff",
            fontSize: "0.6rem", fontFamily: FONT, fontWeight: 700,
            letterSpacing: "0.08em", textTransform: "uppercase",
            padding: "3px 10px", borderRadius: "999px",
          }}>
            {project.type}
          </div>
        </div>

        <div style={{ padding: "1rem 1.25rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <p style={{ color: "#5a6a80", fontSize: "0.6rem", fontFamily: FONT, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {project.year} · {project.team === 1 ? t.project.solo : `${project.team} ${t.project.members}`}
          </p>
          <h3 style={{ color: "#e2e2e2", fontSize: "0.95rem", fontWeight: 700, fontFamily: FONT, letterSpacing: "-0.01em" }}>
            {project.title}
          </h3>
          <p style={{ color: "rgba(226,226,226,0.55)", fontSize: "0.75rem", fontFamily: FONT, lineHeight: 1.65 }}>
            {project.shortDescription}
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.5rem",
            background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.10) 0%, transparent 58%)`,
            opacity: hovered ? 1 : 0,
            transition: hovered ? "opacity 0.15s" : "opacity 0.4s",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.5rem",
            border: `1px solid rgba(255,255,255,${hovered ? 0.14 : 0.05})`,
            transition: "border-color 0.3s",
            pointerEvents: "none",
          }}
        />
      </button>
    </div>
  );
}

// ── Professional Carousel (infinite, blend-zone nav) ──────────────────────────
function ProfessionalCarousel({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const { PROFESSIONAL_PROJECTS } = useData();
  const count = PROFESSIONAL_PROJECTS.length;
  const EXT = [PROFESSIONAL_PROJECTS[count - 1], ...PROFESSIONAL_PROJECTS, PROFESSIONAL_PROJECTS[0]];
  const [rawIdx, setRawIdx] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [containerW, setContainerW] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const snapPending = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setContainerW(e.contentRect.width));
    ro.observe(el);
    setContainerW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const VISUAL_PEEK = containerW < 640
    ? Math.min(containerW * 0.05, 28)
    : Math.min(containerW * 0.26, 260);
  const GAP = 20;
  const cardW = containerW > 0 ? containerW - VISUAL_PEEK * 2 - GAP * 2 : 0;
  const baseOffset = containerW > 0 ? (containerW - cardW) / 2 : 0;
  const trackX = baseOffset - rawIdx * (cardW + GAP);
  const realIdx = rawIdx === 0 ? count - 1 : rawIdx === count + 1 ? 0 : rawIdx - 1;

  const handleTransitionEnd = useCallback(() => {
    if (!snapPending.current) return;
    snapPending.current = false;
    setAnimated(false);
    if (rawIdx === 0) setRawIdx(count);
    else if (rawIdx === count + 1) setRawIdx(1);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
  }, [rawIdx]);

  const goNext = useCallback(() => {
    setAnimated(true);
    setRawIdx((i) => { const n = i + 1; if (n === count + 1) snapPending.current = true; return n; });
  }, []);

  const goPrev = useCallback(() => {
    setAnimated(true);
    setRawIdx((i) => { const n = i - 1; if (n === 0) snapPending.current = true; return n; });
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: "relative", overflow: "hidden" }}>
      <div className="carousel-zone carousel-zone-left" style={{ width: `${baseOffset}px` }} onClick={goPrev} role="button" aria-label="Previous">
        <div className="carousel-zone-bg" />
        <span className="carousel-zone-icon"><ChevronLeft size={26} strokeWidth={1.5} /></span>
      </div>

      <div className="carousel-zone carousel-zone-right" style={{ width: `${baseOffset}px` }} onClick={goNext} role="button" aria-label="Next">
        <div className="carousel-zone-bg" />
        <span className="carousel-zone-icon"><ChevronRight size={26} strokeWidth={1.5} /></span>
      </div>

      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          gap: `${GAP}px`,
          transform: `translateX(${trackX}px)`,
          transition: animated ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)" : "none",
          willChange: "transform",
        }}
      >
        {EXT.map((proj, i) => {
          const isActive = i === rawIdx;
          return (
            <ProfCard
              key={`${proj.slug}-${i}`}
              proj={proj}
              width={cardW}
              active={isActive}
              isMobile={containerW < 640}
              onClick={() => { if (isActive) onNavigate(proj.slug); }}
            />
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "1rem" }}>
        {PROFESSIONAL_PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimated(true); snapPending.current = false; setRawIdx(i + 1); }}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === realIdx ? "20px" : "6px", height: "6px",
              background: i === realIdx ? "#135090" : "rgba(255,255,255,0.2)",
              border: "none", cursor: "pointer", padding: 0,
              borderRadius: "999px", transition: "width 0.3s, background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Professional Card ─────────────────────────────────────────────────────────
function ProfCard({
  proj, width, active, isMobile, onClick,
}: {
  proj: (typeof PROFESSIONAL_PROJECTS)[0];
  width: number;
  active: boolean;
  isMobile: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-left focus:outline-none"
      style={{
        flexShrink: 0,
        width: width > 0 ? `${width}px` : "80%",
        borderRadius: "1.5rem",
        overflow: "hidden",
        background: "#242424",
        opacity: active ? 1 : 0.38,
        transform: active ? "scale(1)" : "scale(0.97)",
        transition: "opacity 0.45s, transform 0.45s",
        cursor: active ? "pointer" : "default",
      }}
    >
      <div style={{ ...(isMobile ? { height: "160px" } : { aspectRatio: "16/9" }), position: "relative", overflow: "hidden" }}>
        <img
          src={assetPath(proj.image)}
          alt={proj.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hovered && active ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,28,28,0.9) 0%, rgba(28,28,28,0.1) 55%, transparent 100%)" }} />
        <div style={{
          position: "absolute", top: "0.75rem", left: "1rem",
          background: "rgba(19,80,144,0.85)", color: "#fff",
          fontSize: "0.6rem", fontFamily: FONT, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "3px 10px", borderRadius: "999px",
        }}>
          {proj.type}
        </div>
      </div>
      <div style={{ padding: isMobile ? "1rem 1.1rem 1.2rem" : "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.6rem, 1.8vw, 1rem)" }}>
        <p style={{ color: "#5a6a80", fontSize: isMobile ? "0.7rem" : "clamp(0.55rem, 1.4vw, 0.8rem)", fontFamily: FONT, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
          {proj.company} · {proj.year}
        </p>
        <h3 style={{ color: "#e2e2e2", fontSize: isMobile ? "1.05rem" : "clamp(0.8rem, 2.2vw, 1.3rem)", fontWeight: 700, fontFamily: FONT, marginBottom: "0.35rem", letterSpacing: "-0.01em" }}>
          {proj.title}
        </h3>
        <p style={{ color: "rgba(226,226,226,0.65)", fontSize: isMobile ? "0.82rem" : "clamp(0.7rem, 1.8vw, 1.0rem)", fontFamily: FONT, lineHeight: 1.65, marginBottom: "0.65rem" }}>
          {proj.shortDescription}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
          {proj.tags.map((tag) => (
            <span key={tag} style={{ color: "#5a6a80", fontSize: isMobile ? "0.68rem" : "clamp(0.55rem, 1.4vw, 0.99rem)", fontFamily: FONT, letterSpacing: "0.04em", border: "1px solid rgba(255,255,255,0.1)", padding: "2px 8px", borderRadius: "999px" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

// ── Experience Timeline ───────────────────────────────────────────────────────
function ExperienceTimeline() {
  const { EXPERIENCE } = useData();
  return (
    <div style={{ position: "relative", paddingLeft: "2rem" }}>
      <div style={{ position: "absolute", left: "6px", top: "8px", bottom: "8px", width: "1px", background: "rgba(19,80,144,0.35)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={i} delay={i * 120}>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: "-1.75rem", top: "8px",
                width: "13px", height: "13px", borderRadius: "50%",
                background: "#135090", border: "2px solid #1c1c1c",
                boxShadow: "0 0 0 1px rgba(19,80,144,0.6)",
              }} />
              <div style={{ maxWidth: "42rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                  <h3 style={{ color: "#e2e2e2", fontFamily: FONT, fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>{exp.role}</h3>
                  <span style={{ color: "#5a6a80", fontFamily: FONT, fontSize: "0.6rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{exp.period}</span>
                </div>
                <p style={{ color: "#135090", fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em", marginBottom: "0.75rem" }}>{exp.company}</p>
                <p style={{ color: "rgba(226,226,226,0.65)", fontFamily: FONT, fontSize: "0.85rem", lineHeight: 1.75, marginBottom: "0.85rem" }}>{exp.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.skills.map((s) => (
                    <span key={s} style={{ color: "#5a6a80", fontFamily: FONT, fontSize: "0.6rem", letterSpacing: "0.04em", border: "1px solid rgba(255,255,255,0.08)", padding: "2px 8px", borderRadius: "999px" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
