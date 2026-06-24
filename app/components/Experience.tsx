"use client";

const experiences = [
  {
    role: "Senior UI Engineer",
    company: "WaveMaker India Private Limited",
    location: "Hyderabad, India",
    period: "April 2018 – Present",
    duration: "7+ years",
    current: true,
    context: "Enterprise SaaS Platform — Low-Code Web & Mobile Application Builder",
    highlights: [
      "Owned and built the WaveMaker component library — a platform-wide Angular design system powering the entire product suite, used daily by an internal team of developers across all product modules",
      "Built and maintained the WaveMaker Style Workspace — a design token and theming system (equivalent to Tokens Studio) implementing design tokens as CSS custom properties, enabling scalable, consistent theming across the full platform",
      "Maintained Storybook for both web and mobile as a living source of truth — covering component APIs, usage patterns, visual states, and accessibility guidance, enabling developer self-service",
      "Extended and customised Angular Material in a controlled, scalable way — building bespoke component variants while maintaining system consistency and predictable overrides",
      "Partnered closely with designers to validate Figma designs for feasibility, intent, and implementation accuracy — ensuring parity between Figma, Storybook, and production code",
      "Led enterprise-scale Angular migration (AngularJS → Angular 2+) independently — owning architecture, planning, and end-to-end delivery with zero disruption to the live platform",
      "Drove React Native migration for the WaveMaker mobile product — re-architecting the mobile layer to React Native while maintaining feature parity and design system consistency",
      "Integrated AI-assisted development tools into the design system workflow — accelerating component scaffolding, documentation generation, and code quality review",
      "Improved WCAG accessibility compliance platform-wide through semantic HTML, accessible component patterns, and documented accessibility guidance in Storybook",
      "Integrated front-end builds into CI/CD pipelines (GitLab CI/CD, Jenkins, Docker) — ensuring reliable, repeatable deployments in a fast-moving Agile environment",
      "Mentored junior developers on Angular, CSS architecture, and design system best practices — improving team velocity and consistency of UI output",
    ],
    stack: ["Angular 2+", "TypeScript", "React Native", "Design Tokens", "Storybook", "Angular Material", "SCSS", "CSS Custom Properties", "Style Dictionary", "D3.js", "Highcharts", "GitLab CI/CD", "Docker", "Jest"],
  },
  {
    role: "Front-End Developer",
    company: "Innominds India Pvt Ltd",
    location: "Hyderabad, India",
    period: "December 2015 – March 2018",
    duration: "2.4 years",
    current: false,
    context: "Projects: Microsoft Dynamics 365 CRM · ONE20 Operational Platform · InnoSourcing Internal Tool",
    highlights: [
      "Delivered front-end features for Microsoft Dynamics 365 CRM using React and TypeScript — replacing legacy configurations with custom, reusable UI modules aligned with product design standards",
      "Built and owned the ONE20 admin portal (Angular) for a live operational platform — responsive, accessible UI with WCAG-compliant component patterns, form logic, validation, and RESTful API integration",
      "Developed full-stack hiring workflow tool (InnoSourcing App) solo using Angular, Node.js, Express.js, and MongoDB — owning requirements, UI architecture, REST APIs, and deployment",
      "Consistently delivered accessible, responsive UIs with strong attention to colour, typography, spacing, and visual hierarchy across data-driven platforms",
    ],
    stack: ["Angular", "React", "TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB", "Bootstrap", "MS Dynamics 365"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "110px 32px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span className="section-label">Work Experience</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "14px", color: "var(--text-primary)" }}>
            Where I've worked
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75 }}>
            9+ years across enterprise design systems, Angular platforms, and full-stack applications.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: "18px", top: "6px", bottom: "6px", width: "1px", background: "var(--border-subtle)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {experiences.map((exp) => (
              <div key={exp.company} style={{ paddingLeft: "56px", position: "relative" }}>
                {/* Timeline dot */}
                <div
                  className={exp.current ? "dot-pulse" : ""}
                  style={{ position: "absolute", left: "11px", top: "28px", width: "16px", height: "16px", borderRadius: "50%", background: exp.current ? "var(--accent)" : "var(--bg-card)", border: exp.current ? "none" : "1px solid var(--border-mid)", zIndex: 1 }}
                />

                <div
                  className="card"
                  style={{ padding: "32px 36px" }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "6px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span style={{ background: "rgba(13,148,136,0.12)", border: "1px solid rgba(13,148,136,0.25)", color: "var(--accent-soft)", fontSize: "0.68rem", fontWeight: 600, padding: "2px 10px", borderRadius: "100px", letterSpacing: "0.06em" }}>
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p style={{ color: "var(--accent-soft)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "3px" }}>{exp.company}</p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: "3px" }}>{exp.location}</p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.76rem", fontStyle: "italic" }}>{exp.context}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "4px" }}>{exp.period}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.73rem", color: "var(--accent-soft)" }}>{exp.duration}</div>
                    </div>
                  </div>

                  <div className="divider" style={{ margin: "20px 0" }} />

                  {/* Highlights */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", marginTop: "6px", flexShrink: 0, width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.stack.map((tech) => (
                      <span key={tech} className="skill-badge" style={{ padding: "3px 10px", borderRadius: "5px", fontSize: "0.73rem", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
