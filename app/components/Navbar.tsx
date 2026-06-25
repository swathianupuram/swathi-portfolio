"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => l.toLowerCase());
    const observers: IntersectionObserver[] = [];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? (light ? "rgba(245,245,244,0.97)" : "rgba(7,7,14,0.95)")
          : (light ? "rgba(245,245,244,0.7)" : "rgba(7,7,14,0.6)"),
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.2rem" }} className="gradient-text">SA</span>
          <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>/ frontend dev</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "36px" }} className="hidden-mobile">
          {links.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`nav-link${isActive ? " active" : ""}`}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.87rem",
                  fontWeight: isActive ? 600 : 500, letterSpacing: "0.01em",
                  padding: "4px 0",
                  color: isActive ? "var(--accent)" : undefined,
                }}
              >
                {link}
              </button>
            );
          })}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="hidden-mobile"
          title={light ? "Switch to dark mode" : "Switch to light mode"}
          style={{ background: "none", border: "1px solid var(--border-subtle)", borderRadius: "8px", cursor: "pointer", padding: "7px 10px", color: "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s, color 0.2s" }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--border-mid)"; e.currentTarget.style.color = "var(--text-primary)"; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
        >
          {light ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>

        {/* CTA */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=swathianupuram2@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hidden-mobile"
          style={{ background: "var(--accent)", color: "#fff", padding: "8px 22px", borderRadius: "7px", fontSize: "0.84rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em", transition: "background 0.2s ease" }}
          onMouseOver={(e) => (e.currentTarget.style.background = "var(--accent-mid)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "var(--accent)")}
        >
          Hire Me
        </a>

        {/* Mobile theme toggle + hamburger */}
        <div className="show-mobile" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <button
          onClick={toggleTheme}
          title={light ? "Switch to dark mode" : "Switch to light mode"}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)", padding: "8px", display: "flex", alignItems: "center" }}
        >
          {light ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
          )}
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: "8px" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: light ? "rgba(245,245,244,0.98)" : "rgba(7,7,14,0.98)", borderBottom: "1px solid var(--border-subtle)", padding: "20px 32px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, textAlign: "left", padding: "10px 0" }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
}
