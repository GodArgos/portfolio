import { Outlet, NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Github, Linkedin, FileDown, Globe, Menu, X } from "lucide-react";
import { useLang } from "./i18n";
import { TopoBackground } from "./TopoBackground";
import { assetPath } from "./AssetPath.ts";

function ItchioIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <path d="M 16 5 C 12.748 5 8.31211 5.05086 7.41211 5.13086 C 6.40211 5.73686 4.40281 8.03095 4.38281 8.62695 L 4.38281 9.62695 C 4.38281 10.89 5.56572 12 6.63672 12 C 7.91972 12 8.99023 10.93 8.99023 9.66797 C 8.99023 10.93 10.0305 12 11.3125 12 C 12.6055 12 13.6055 10.931 13.6055 9.66797 C 13.6055 10.93 14.6953 12 15.9883 12 L 16.0098 12 C 17.3028 12 18.3926 10.931 18.3926 9.66797 C 18.3926 10.93 19.4025 12 20.6855 12 C 21.9685 12 23.0098 10.931 23.0098 9.66797 C 23.0098 10.93 24.0803 12 25.3633 12 C 26.4343 12 27.6152 10.89 27.6152 9.62695 L 27.6152 8.62695 C 27.5952 8.03095 25.5959 5.73686 24.5859 5.13086 C 21.4439 5.01986 19.252 5 16 5 Z M 13.5508 11.7422 C 12.4978 13.5522 9.85231 13.5739 8.82031 11.7539 C 8.19031 12.8459 6.7643 13.2675 6.1543 13.0605 C 5.9763 14.9595 5.85348 24.7087 7.14648 26.3438 C 10.9435 27.2288 21.1645 27.2097 24.8535 26.3438 C 26.3485 24.8197 26.0137 14.8215 25.8457 13.0605 C 25.2357 13.2675 23.8095 12.8459 23.1895 11.7539 C 22.1465 13.5739 19.5012 13.5522 18.4492 11.7422 C 18.1242 12.3322 17.367 13.1094 16 13.1094 C 14.997 13.1484 14.0518 12.6072 13.5508 11.7422 Z M 11.4199 14 C 12.2199 14 12.9501 14.0005 13.8301 14.9805 C 15.2801 14.8305 16.7199 14.8305 18.1699 14.9805 C 19.0599 14.0105 19.7801 14.0098 20.5801 14.0098 C 23.1601 14.0098 23.7809 17.8196 24.7109 21.0996 C 25.5509 24.1496 24.4291 24.2305 23.0391 24.2305 C 20.9691 24.1505 19.8203 22.6506 19.8203 21.1406 C 17.8903 21.4606 14.8097 21.5806 12.1797 21.1406 C 12.1797 22.6506 11.0309 24.1505 8.96094 24.2305 C 7.57094 24.2305 6.44906 24.1496 7.28906 21.0996 C 8.21906 17.7996 8.83992 14.0098 11.4199 14.0098 L 11.4199 14 Z M 16 16.877 C 16 16.877 14.306 18.4394 14 18.9844 L 15.1074 18.9434 L 15.1074 19.9102 C 15.1074 19.9682 15.926 19.918 16 19.918 C 16.447 19.935 16.8926 19.9512 16.8926 19.9102 L 16.8926 18.9434 L 18 18.9844 C 17.694 18.4384 16 16.877 16 16.877 Z" />
    </svg>
  );
}

const FONT = "'Montserrat', sans-serif";

export function Root() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = [
    { href: "https://github.com/GodArgos/",   icon: <Github size={18} />,    label: "GitHub"   },
    { href: "https://www.linkedin.com/in/joaquin-incio/", icon: <Linkedin size={18} />,  label: "LinkedIn" },
    { href: "https://godargos.itch.io/",      icon: <ItchioIcon size={18} />, label: "itch.io" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: FONT }}>
      <TopoBackground />
      <div style={{ position: "relative", zIndex: 1 }}>

        <header
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
          style={{
            background: scrolled ? "rgba(28,28,28,0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 md:py-6 flex items-center justify-between">
            <NavLink to="/" className="flex flex-col leading-tight group">
              <span className="font-bold transition-opacity group-hover:opacity-70"
                style={{ color: "#135090", fontSize: "clamp(1.5rem, 5vw, 2.16rem)", letterSpacing: "-0.01em", fontFamily: FONT }}>
                Joaquin Incio
              </span>
              <span style={{ color: "#5a6a80", fontSize: "clamp(0.6rem, 1.5vw, 0.82rem)", letterSpacing: "0.08em", fontFamily: FONT }}>
                Game Developer
              </span>
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="transition-opacity hover:opacity-60" style={{ color: "#e2e2e2" }}>
                  {icon}
                </a>
              ))}
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
                style={{ color: "#e2e2e2", fontSize: "0.85rem", fontFamily: FONT, fontWeight: 700,
                  letterSpacing: "0.08em", border: "1px solid rgba(255,255,255,0.18)",
                  padding: "6px 15px", borderRadius: "999px", cursor: "pointer"}}
                aria-label="Toggle language"
              >
                <Globe size={14} />
                {lang === "en" ? "ES" : "EN"}
              </button>
              <a 
                href={assetPath(lang === "en" ? "/resume-en.pdf" : "/resume-es.pdf")}
                download={lang === "en" ? "Joaquin_Incio_Resume.pdf" : "Joaquin_Incio_CV.pdf"}
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                style={{ color: "#ffffff", background: "#135090", fontSize: "0.9rem", fontFamily: FONT,
                  fontWeight: 700, letterSpacing: "0.04em", padding: "6px 20px", borderRadius: "999px" }}>
                <FileDown size={15} />
                {t.nav.resume}
              </a>
            </div>

            {/* Mobile: lang + hamburger */}
            <div className="flex md:hidden items-center gap-3" style={{ position: "relative" }}>
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: "#e2e2e2", fontSize: "0.68rem", fontFamily: FONT, fontWeight: 700,
                  letterSpacing: "0.08em", border: "1px solid rgba(255,255,255,0.18)",
                  padding: "5px 11px", borderRadius: "999px", cursor: "pointer" }}
                aria-label="Toggle language"
              >
                <Globe size={12} />
                {lang === "en" ? "ES" : "EN"}
              </button>
              <button
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Menu"
                style={{ color: "#e2e2e2", padding: "4px", lineHeight: "0" }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile floating dropdown box */}
          {mobileOpen && (
            <div
              style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    right: 0,
                    minWidth: "200px",
                    background: "rgba(22,22,22,0.98)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0.875rem",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
                    overflow: "hidden",
                    zIndex: 100,
                  }}
            >
              {/* Social links */}
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-3 hover:bg-white/5 transition-colors"
                  style={{
                        color: "#e2e2e2", padding: "0.8rem 1.1rem",
                        fontSize: "0.82rem", fontFamily: FONT,
                        borderBottom: i < socials.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.06)",
                      }}
                >
                  {icon}
                  {label}
                </a>
              ))}
              {/* Resume */}
              <a
                href={assetPath(lang === "en" ? "/resume-en.pdf" : "/resume-es.pdf")}
                download={lang === "en" ? "Joaquin_Incio_Resume.pdf" : "Joaquin_Incio_CV.pdf"}
                className="flex items-center gap-3 hover:bg-white/5 transition-colors"
                style={{
                  color: "#135090", padding: "0.8rem 1.1rem",
                  fontSize: "0.82rem", fontFamily: FONT, fontWeight: 700,
                }}
              >
                <FileDown size={18} />
                {t.nav.resume}
              </a>
            </div>
          )}
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
