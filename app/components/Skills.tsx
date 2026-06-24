"use client";

const skillGroups = [
  {
    category: "Angular & Core UI",
    icon: "🅰️",
    color: "#5eead4",
    skills: ["Angular 2+", "AngularJS", "TypeScript", "JavaScript (ES6+)", "RxJS", "Angular Material", "Angular Directives & Pipes"],
  },
  {
    category: "Design Systems",
    icon: "🎨",
    color: "#5eead4",
    skills: ["Component Library Architecture", "Design Tokens", "CSS Custom Properties", "Style Dictionary", "WaveMaker Style Workspace", "Storybook (Web & Mobile)", "Figma–Dev Parity", "Angular Material Customisation"],
  },
  {
    category: "CSS & Styling",
    icon: "✨",
    color: "#5eead4",
    skills: ["CSS3", "SCSS / SASS", "LESS", "CSS Custom Properties", "Theming Systems", "Responsive Design", "Bootstrap", "Material UI", "Tailwind CSS", "FELA CSS-in-JS"],
  },
  {
    category: "React Ecosystem",
    icon: "⚛️",
    color: "#5eead4",
    skills: ["React", "Next.js", "Redux", "React Native", "React Hooks", "SSR / Next.js Routing", "NextJS App Router"],
  },
  {
    category: "Accessibility & DX",
    icon: "♿",
    color: "#5eead4",
    skills: ["WCAG 2.1 Compliance", "Semantic HTML", "Accessible Component Patterns", "Keyboard Navigation", "Screen Reader Support", "Component Documentation", "Sensible Defaults & Reusable APIs"],
  },
  {
    category: "AI-Assisted Dev",
    icon: "🤖",
    color: "#5eead4",
    skills: ["AI Workflow Integration", "Stitch AI (Design Generation)", "Agentic Tooling", "MCP", "Codex", "Claude", "Cursor", "Scaffolding Automation", "Code Review Acceleration"],
  },
  {
    category: "Testing",
    icon: "✅",
    color: "#5eead4",
    skills: ["Jest", "Jasmine", "Karma", "Playwright", "Cypress", "Unit & Integration Testing", "Snapshot Testing"],
  },
  {
    category: "Backend & Data",
    icon: "🛠️",
    color: "#5eead4",
    skills: ["Node.js", "Express.js", "MongoDB", "Supabase (PostgreSQL)", "RESTful APIs", "SQL"],
  },
  {
    category: "Data Visualisation",
    icon: "📊",
    color: "#5eead4",
    skills: ["D3.js", "Highcharts", "NVD3", "React Leaflet"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    color: "#5eead4",
    skills: ["GitLab CI/CD", "Jenkins", "Docker", "AWS (S3, EC2, CloudFront)", "Vercel", "Webpack", "Gulp", "Grunt"],
  },
  {
    category: "Tools & Workflow",
    icon: "🔧",
    color: "#5eead4",
    skills: ["Git", "GitLab", "Bitbucket", "JIRA", "Confluence", "Agile / Scrum", "VS Code", "WebStorm"],
  },
];

const topBadges = ["Angular 2+", "Design Systems", "Component Libraries", "TypeScript", "CSS Architecture", "Storybook", "WCAG Accessibility", "React", "Next.js", "React Native", "Design Tokens"];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "110px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span className="section-label">Technical Skills</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "14px", color: "var(--text-primary)" }}>
            What I work with
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "520px", lineHeight: 1.75 }}>
            Deep expertise in Angular, design systems, and component libraries — built over 9+ years of enterprise-scale delivery.
          </p>
        </div>

        {/* Top badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "56px" }}>
          {topBadges.map((skill) => (
            <span key={skill} style={{
              background: "rgba(13,148,136,0.1)",
              border: "1px solid rgba(13,148,136,0.22)",
              color: "var(--accent-soft)",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "0.82rem",
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
            }}>
              {skill}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: "48px" }} />

        {/* Skill cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {skillGroups.map(({ category, icon, skills }) => (
            <div
              key={category}
              className="card"
              style={{ padding: "28px 30px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.01em" }}>
                  {category}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge" style={{ padding: "4px 11px", borderRadius: "5px", fontSize: "0.76rem", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, cursor: "default" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
