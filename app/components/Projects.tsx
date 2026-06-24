"use client";
import { useState } from "react";

const projects = [
  {
    id: "handzy",
    badge: "Personal Project",
    title: "Handzy — End-to-End Product Build",
    subtitle: "On-demand Home Services · Design → Deployment",
    description:
      "Sole owner of the full Handzy product — from zero to deployed. Used Stitch AI to generate UI designs from business requirements, then built and shipped both the Admin Dashboard and the Customer Mobile App, all sharing a single Supabase backend.",
    featured: true,
    highlights: [
      "Used Stitch AI to generate UI/UX designs directly from business requirements — accelerating design-to-dev handoff solo",
      "Admin Dashboard — Next.js 14 ops panel with live GPS map (React Leaflet), helper management, job tracker, SOS emergency system with audio, and OTP phone auth",
      "Customer App — React Native mobile app for end users to browse services, book jobs, and track helpers in real time",
      "Shared Supabase backend (PostgreSQL + Auth) powering both the admin dashboard and the customer mobile app",
      "27 incremental SQL migrations via Supabase covering full schema evolution from initial setup to GPS, SOS, and pricing",
      "Next.js Route Handlers as a clean REST layer between frontend and Supabase; Zustand for auth state; SSR-safe Supabase client via @supabase/ssr",
      "Route-level auth guard via Next.js middleware — unauthenticated users redirected to login automatically",
      "Full deployment pipeline: Vercel (web), Expo (mobile), Supabase (database + auth)",
    ],
    stack: ["Next.js 14", "React Native", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "React Leaflet", "Zustand", "Expo", "Stitch AI", "Vercel"],
    type: "Full-Stack + Mobile",
  },
  {
    id: "wavemaker",
    badge: "Enterprise · 7 years",
    title: "WaveMaker Design System & Component Library",
    subtitle: "Angular · Design Tokens · Storybook · Enterprise SaaS",
    description:
      "Owned and built the platform-wide Angular component library and design token system (WaveMaker Style Workspace) for an enterprise low-code SaaS — the foundation every developer on the product relied on daily.",
    featured: true,
    highlights: [
      "Built WaveMaker Style Workspace — a design token and theming system equivalent to Tokens Studio, implementing tokens as CSS custom properties for scalable, predictable design changes platform-wide",
      "Owned the Angular component library powering all product modules — reusable directives, pipes, services, and shared modules with sensible defaults and clear component APIs",
      "Maintained Storybook for web and mobile as the living source of truth — component APIs, visual states, usage patterns, and accessibility guidance enabling full developer self-service",
      "Extended and customised Angular Material with bespoke component variants — maintaining system consistency and predictable overrides at scale",
      "Partnered with designers to validate Figma feasibility and ensure Figma-to-Storybook-to-production parity across every component",
      "Led AngularJS → Angular 2+ migration independently — architecture, planning, and end-to-end delivery with zero platform disruption",
      "Drove React Native migration for the WaveMaker mobile product — re-architecting the mobile layer to React Native while preserving design system consistency and feature parity",
      "Integrated AI-assisted development tools for component scaffolding, documentation generation, and code review acceleration",
      "Improved WCAG 2.1 accessibility compliance platform-wide through semantic HTML and documented accessible component patterns in Storybook",
    ],
    stack: ["Angular 2+", "TypeScript", "React Native", "Design Tokens", "Style Dictionary", "Storybook", "Angular Material", "SCSS", "CSS Custom Properties", "RxJS", "D3.js", "Highcharts", "Jest", "GitLab CI/CD", "Docker"],
    type: "Frontend / Design System",
  },
  {
    id: "unified-config",
    badge: "CRM",
    title: "Microsoft Dynamics 365 — Unified Config",
    subtitle: "CRM Customization · Sales Intelligence",
    description:
      "Delivered front-end features for Microsoft Dynamics 365 CRM — replacing legacy configurations with custom, reusable React/TypeScript UI modules aligned with product design standards. Features include Relationship Assistant, Email Engagement, and Auto Capture.",
    featured: false,
    highlights: [
      "Replaced legacy CRM configurations with custom reusable UI modules in React and TypeScript",
      "Worked with FELA CSS-in-JS architecture for dynamic styling across Unified Config modules",
      "Analyzed and mapped XML-based CRM entity data structures (COLAC entities)",
      "Implemented SQL-based custom configuration entries for proper CRM workflow integration",
    ],
    stack: ["React", "TypeScript", "FELA CSS-in-JS", "Microsoft Dynamics 365", "SQL", "XML"],
    type: "CRM / Frontend",
  },
  {
    id: "one20",
    badge: "Mobile + Web",
    title: "ONE20 — Truck Driver Platform",
    subtitle: "Admin Portal · Angular · WCAG Accessible",
    description:
      "Built and owned the ONE20 admin portal (Angular) for a live operational platform serving truck drivers across the US and Canada — responsive, WCAG-compliant UI with real-time PoI management, deals, and partner promotions.",
    featured: false,
    highlights: [
      "Built responsive, accessible Angular UI with WCAG-compliant component patterns",
      "Form logic, validation, and RESTful API integration for PoI, deals, and partner data",
      "Cross-browser and multi-device testing for consistent production behavior",
    ],
    stack: ["Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap", "REST APIs"],
    type: "Frontend",
  },
  {
    id: "innosourcing",
    badge: "Full-Stack",
    title: "InnoSourcing App",
    subtitle: "Full-Stack · Solo Delivery · Angular + Node.js",
    description:
      "Sole developer on an internal HR tool to track candidate interview status, prevent duplicate scheduling, and enforce 90-day look-back validation — owned requirements through to deployment.",
    featured: false,
    highlights: [
      "Angular frontend + Node.js/Express REST APIs + MongoDB",
      "90-day interview look-back logic and duplicate detection",
      "Solo delivery from requirements to production deployment",
    ],
    stack: ["Angular", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    type: "Full-Stack",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>("handzy");

  return (
    <section id="projects" style={{ padding: "110px 32px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span className="section-label">Projects</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "14px", color: "var(--text-primary)" }}>
            Work I'm proud of
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75 }}>
            From personal full-product builds to enterprise design systems — shipped and production-ready.
          </p>
        </div>

        {/* Featured projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "56px" }}>
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              className="card"
              style={{ padding: "36px 40px", cursor: "pointer", borderColor: expanded === project.id ? "rgba(13,148,136,0.3)" : undefined }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
                    <span style={{ background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.2)", color: "var(--accent-soft)", fontSize: "0.68rem", fontWeight: 700, padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.07em", textTransform: "uppercase" }}>
                      {project.badge}
                    </span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.73rem", fontFamily: "'JetBrains Mono', monospace" }}>{project.type}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>{project.title}</h3>
                  <p style={{ color: "var(--accent-soft)", fontSize: "0.83rem", fontWeight: 500 }}>{project.subtitle}</p>
                </div>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid var(--border-mid)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.3s ease", transform: expanded === project.id ? "rotate(180deg)" : "none" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-soft)" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.75, marginTop: "16px" }}>{project.description}</p>

              {expanded === project.id && (
                <div style={{ marginTop: "28px" }}>
                  <div className="divider" style={{ marginBottom: "24px" }} />
                  <h4 style={{ color: "var(--text-muted)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Key Highlights</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                    {project.highlights.map((h, i) => (
                      <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: "8px", display: "inline-block" }} />
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.87rem", lineHeight: 1.7 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 style={{ color: "var(--text-muted)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Tech Stack</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.stack.map((tech) => (
                      <span key={tech} className="skill-badge" style={{ padding: "4px 11px", borderRadius: "5px", fontSize: "0.76rem", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Other projects */}
        <h3 style={{ color: "var(--text-muted)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>Other Projects</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px" }}>
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.id}
              onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              className="card"
              style={{ padding: "24px 26px", cursor: "pointer", borderColor: expanded === project.id ? "rgba(13,148,136,0.25)" : undefined }}
            >
              <div style={{ marginBottom: "10px" }}>
                <span style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.18)", color: "var(--accent-soft)", fontSize: "0.65rem", fontWeight: 700, padding: "2px 9px", borderRadius: "100px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{project.badge}</span>
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.98rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-primary)" }}>{project.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "16px" }}>{project.description}</p>
              {expanded === project.id && (
                <ul style={{ listStyle: "none", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", gap: "8px", fontSize: "0.79rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "6px", width: "3px", height: "3px", borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />{h}
                    </li>
                  ))}
                </ul>
              )}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="skill-badge" style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace" }}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
