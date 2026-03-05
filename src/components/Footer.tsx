"use client";

const links = {
  Producten: ["Retatrutide", "BPC-157", "TB-500", "GHK-Cu", "Epitalon", "PT-141"],
  Informatie: ["Kwaliteitsgarantie", "Verzending & Levering", "Betaalmethoden", "Retourbeleid"],
  Bedrijf: ["Over RetaEU", "KVK: 97410292", "Contact", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-card)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00C2FF, #00E5B0)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L14 6V12L9 16L4 12V6L9 2Z" fill="#060912"/>
                  <circle cx="9" cy="9" r="2.5" fill="#060912"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">
                Reta<span className="gradient-text">EU</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              Premium onderzoekspeptiden met gecertificeerde kwaliteit. Snel, discreet en betrouwbaar vanuit Nederland.
            </p>
            {/* Trustpilot mini badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ background: "rgba(26,42,66,0.6)", border: "1px solid var(--border)" }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#F59E0B">
                    <path d="M6 1l1.2 3.5H11L8.1 6.8l1.1 3.5L6 8.5 2.9 10.3 4 6.8 1 4.5h3.8L6 1z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs font-medium">4.9 op Trustpilot</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--accent-blue)" }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="gradient-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
            © {new Date().getFullYear()} RetaEU B.V. — Leidschendam, Nederland. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-center" style={{ color: "var(--text-secondary)", opacity: 0.5 }}>
            Producten zijn uitsluitend bestemd voor wetenschappelijk laboratoriumonderzoek. Niet voor menselijk gebruik.
          </p>
        </div>
      </div>
    </footer>
  );
}
