import { useNavigate } from "react-router";

const FONT = "'Montserrat', sans-serif";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-8 pt-40 pb-24" style={{ fontFamily: FONT }}>
      <p className="uppercase tracking-widest mb-4" style={{ color: "#5a6a80", fontSize: "0.65rem" }}>404</p>
      <h1
        className="mb-6"
        style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#135090" }}
      >
        Page not found.
      </h1>
      <button
        onClick={() => navigate("/")}
        className="underline underline-offset-4 hover:opacity-60 transition-opacity"
        style={{ color: "#135090", fontSize: "0.875rem" }}
      >
        Back to home
      </button>
    </div>
  );
}
