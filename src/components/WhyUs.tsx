const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M11 2L4 5.5V10c0 4.4 3.2 8.5 7 9.8 3.8-1.3 7-5.4 7-9.8V5.5L11 2z"/>
        <path d="M7.5 11l2.5 2.5 5-5"/>
      </svg>
    ),
    title: "CoA bij elk product",
    desc: "Elk product wordt geleverd met een Certificate of Analysis (CoA) van een onafhankelijk, accrediteerd lab dat de zuiverheid bevestigt.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3l2 2M19 3l-2 2M3 19l2-2M19 19l-2-2"/>
        <rect x="7" y="7" width="8" height="8" rx="2"/>
        <path d="M11 7V5M11 17v-2M7 11H5M17 11h-2"/>
      </svg>
    ),
    title: "HPLC Kwaliteitsanalyse",
    desc: "Wij gebruiken High-Performance Liquid Chromatography (HPLC) analyse voor nauwkeurige zuiverheidsmeting van elk batch.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L4 6v6c0 5.5 3.5 9 8 10.5C16.5 21 20 17.5 20 12V6L12 2z"/>
        <path d="M8 12l2.5 2.5L15 9"/>
      </svg>
    ),
    title: "Discreet & Veilig",
    desc: "Neutrale, onherkenbare verpakking. Uw privacy staat voorop bij iedere bestelling die wij verwerken.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8"/>
        <path d="M11 6v5l3.5 3.5"/>
      </svg>
    ),
    title: "Snelle verwerking",
    desc: "Bestellingen worden dezelfde of volgende werkdag verwerkt en verstuurd. Altijd traceerbaar met track & trace.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8h1a2 2 0 010 4h-1M2 8h16v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8zM6 2v4M10 2v4M14 2v4"/>
      </svg>
    ),
    title: "Koude keten gewaarborgd",
    desc: "Peptiden worden opgeslagen en verstuurd met temperatuurbeheersing om maximale stabiliteit te garanderen.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/>
      </svg>
    ),
    title: "Persoonlijke klantenservice",
    desc: "Ons team staat klaar om uw onderzoeksvragen te beantwoorden. Snelle reactietijden via e-mail en chat.",
  },
];

export default function WhyUs() {
  return (
    <section id="kwaliteit" className="py-24 relative" style={{ background: "rgba(13,20,35,0.4)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto mb-4">Waarom RetaEU?</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kwaliteit die{" "}
            <span className="gradient-text">u kunt vertrouwen</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Wij zetten wetenschap voorop. Elk product doorloopt strikte kwaliteitscontroles
            voordat het uw laboratorium bereikt.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="gradient-border p-6 group"
            >
              <div className="feature-icon mb-4" style={{ color: "var(--accent-blue)" }}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider stat row */}
        <div className="mt-16 pt-12 gradient-divider" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
          {[
            { value: "99%+", label: "Gemiddelde zuiverheid" },
            { value: "< 24u", label: "Gemiddelde verzendtijd" },
            { value: "100%", label: "Bestellingen getraceerd" },
            { value: "0%", label: "Retourpercentage kwaliteitsklachten" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="stat-number mb-1">{s.value}</div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
