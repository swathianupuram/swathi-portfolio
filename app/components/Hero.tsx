"use client";
import { useEffect, useState } from "react";

const roles = [
  "Senior UI Engineer",
  "Angular & Design Systems Expert",
  "React & Next.js Specialist",
  "Component Library Architect",
  "Full-Stack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingTop: "68px",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "500px", background: "radial-gradient(ellipse, rgba(13,148,136,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>

        {/* Status badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.2)", borderRadius: "100px", padding: "6px 18px", marginBottom: "40px" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block", flexShrink: 0 }} />
          <span style={{ color: "var(--accent-soft)", fontSize: "0.8rem", fontWeight: 500, fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}>
            Available · Sydney, NSW · Permanent Resident
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "20px", color: "var(--text-primary)" }}>
          Swathi <span className="gradient-text">Anupuram</span>
        </h1>

        {/* Typewriter */}
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.95rem, 2vw, 1.2rem)", color: "var(--text-muted)", marginBottom: "32px", height: "1.8em", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
          <span style={{ color: "var(--accent-soft)", opacity: 0.6 }}>$</span>
          <span style={{ color: "var(--text-secondary)" }}>{displayed}</span>
          <span className="cursor" style={{ color: "var(--accent-soft)" }}>|</span>
        </div>

        {/* Bio */}
        <p style={{ color: "var(--text-secondary)", fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.85, maxWidth: "640px", margin: "0 auto 52px", fontWeight: 400 }}>
          9+ years building production-grade{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Angular</span> applications,{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>design systems</span>, and{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>component libraries</span>{" "}
          for enterprise SaaS platforms — with deep expertise in CSS architecture, design tokens, Storybook, and Figma-to-production parity.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 72px)", marginBottom: "52px", flexWrap: "wrap" }}>
          {[
            { value: "9+", label: "Years Experience" },
            { value: "5", label: "Major Projects" },
            { value: "20+", label: "Technologies" },
            { value: "PR", label: "Work Rights" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{value}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "6px" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: "var(--accent)", color: "#fff", border: "none", padding: "13px 32px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", letterSpacing: "0.02em", transition: "background 0.2s ease, transform 0.2s ease" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#0f766e"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "none"; }}
          >
            View My Work
          </button>
          <a
            href="mailto:swathianupuram2@gmail.com"
            style={{ background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", padding: "13px 32px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 500, cursor: "pointer", fontFamily: "'Inter', sans-serif", letterSpacing: "0.02em", textDecoration: "none", transition: "all 0.2s ease", display: "inline-block" }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(13,148,136,0.35)"; e.currentTarget.style.color = "var(--text-primary)"; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
          style={{ marginTop: "72px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer" }}
          className="animate-float"
        >
          <span style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scroll</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
