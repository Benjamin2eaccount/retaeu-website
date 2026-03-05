const badges = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11.5 5H15L12.5 8L13.5 12L9 10L4.5 12L5.5 8L3 5H6.5L9 2Z" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
    label: "99%+ Zuiverheid",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="5" width="14" height="10" rx="2"/>
        <path d="M5 5V4a4 4 0 018 0v1"/>
      </svg>
    ),
    label: "Discreet Verzonden",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="9" r="7"/>
        <path d="M9 5v4l3 2"/>
      </svg>
    ),
    label: "Verzending binnen 24u",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 2l2 4 4.5.5-3.3 3.1.8 4.4L9 12l-3.9 2 .8-4.4L2.5 6.5 7 6z"/>
      </svg>
    ),
    label: "Trustpilot Uitstekend",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 2L3 5v4c0 4 3 6.5 6 7.5 3-1 6-3.5 6-7.5V5L9 2z"/>
        <path d="M6 9l2 2 4-4"/>
      </svg>
    ),
    label: "Laboratorium Gecertificeerd",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 14l4-6 3 3 3-4 4 7H2z"/>
        <circle cx="5" cy="6" r="1.5" fill="currentColor" stroke="none" opacity="0.8"/>
      </svg>
    ),
    label: "HPLC Kwaliteitstest",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-8 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <div key={badge.label} className="trust-badge">
              <span style={{ color: "var(--accent-blue)" }}>{badge.icon}</span>
              <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
