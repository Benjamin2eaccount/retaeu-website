const steps = [
  {
    number: "01",
    title: "Kies uw product",
    desc: "Selecteer het gewenste peptide en de benodigde dosis uit ons uitgebreide assortiment. Twijfelt u? Ons team adviseert u graag.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12h6M9 16h4"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plaatst u uw bestelling",
    desc: "Vul het bestelformulier in of neem contact op via e-mail. Wij bevestigen uw bestelling binnen enkele uren.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Betaling & bevestiging",
    desc: "Na betaling ontvangt u een orderbevestiging met alle details. Uw bestelling wordt direct klaargezet voor verzending.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="6" width="20" height="14" rx="2"/>
        <path d="M16 2H8a2 2 0 00-2 2v2h12V4a2 2 0 00-2-2z"/>
        <path d="M12 12v4M10 14h4"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Verzending & ontvangst",
    desc: "Uw bestelling wordt discreet verpakt en verstuurd. Met track & trace volgt u uw pakket tot aan de deur.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto mb-4">Hoe het werkt</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bestellen in{" "}
            <span className="gradient-text">4 eenvoudige stappen</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Van bestelling tot levering — snel, betrouwbaar en discreet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-teal), transparent)" }}
          />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 relative z-10"
                style={{
                  background: "linear-gradient(135deg, rgba(0,194,255,0.15), rgba(0,229,176,0.15))",
                  border: "1px solid rgba(0,194,255,0.3)",
                }}
              >
                <span style={{ color: "var(--accent-blue)" }}>{step.icon}</span>
              </div>

              {/* Number */}
              <span
                className="text-xs font-bold tracking-widest mb-2"
                style={{ color: "var(--accent-teal)" }}
              >
                {step.number}
              </span>

              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contact" className="btn-glow text-base px-10 py-4">
            Begin nu met bestellen
          </a>
        </div>
      </div>
    </section>
  );
}
