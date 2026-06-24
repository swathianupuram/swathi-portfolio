"use client";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "110px 32px 80px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

        <span className="section-label">Contact</span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px", color: "var(--text-primary)" }}>
          Let&apos;s Work Together
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 52px" }}>
          I&apos;m open to new opportunities in Sydney or remote. Whether it&apos;s a full-time role, contract, or just a chat about frontend architecture — let&apos;s talk.
        </p>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "44px" }}>
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: "Email",
              value: "swathianupuram2@gmail.com",
              href: "mailto:swathianupuram2@gmail.com",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              ),
              label: "Phone",
              value: "0421 969 781",
              href: "tel:0421969781",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ),
              label: "LinkedIn",
              value: "linkedin.com/in/swathi-anupuram-3b1b01126",
              href: "https://www.linkedin.com/in/swathi-anupuram-3b1b01126/",
            },
          ].map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "28px 20px", textDecoration: "none", color: "var(--text-primary)" }}
            >
              <div style={{ width: "46px", height: "46px", borderRadius: "10px", background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-soft)" }}>
                {icon}
              </div>
              <div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "5px" }}>{label}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", wordBreak: "break-all" }}>{value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:swathianupuram2@gmail.com"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--accent)", color: "#fff", padding: "14px 36px", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", fontFamily: "'Inter', sans-serif", letterSpacing: "0.02em", transition: "background 0.2s ease, transform 0.2s ease" }}
          onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent-mid)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseOut={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "none"; }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
          </svg>
          Say Hello
        </a>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: "80px", paddingTop: "32px", borderTop: "1px solid var(--border-subtle)" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
          © 2025 Swathi Anupuram · Built with Next.js & TypeScript · Sydney, AU
        </p>
      </div>
    </section>
  );
}
