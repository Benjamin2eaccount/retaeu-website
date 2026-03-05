export default function Hero() {
  return (
    <section className="hero-bg grid-bg relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Decorative glows */}
      <div
        className="floating-glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,194,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="floating-glow absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,229,176,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "2s",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="section-label mb-6">
            <span className="pulse-dot" />
            Vertrouwd door 1.000+ onderzoekers in Europa
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Premium{" "}
            <span className="gradient-text">Onderzoekspeptiden</span>
            {" "}voor Wetenschappelijk Onderzoek
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Gecertificeerde peptiden met 99%+ zuiverheid. Gedistilleerd uit laboratoria van wereldklasse —
            discreet verpakt, binnen 24 uur verstuurd vanuit Nederland.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#producten" className="btn-glow text-base px-8 py-3.5">
              Bekijk Assortiment
            </a>
            <a href="#kwaliteit" className="btn-outline text-base px-8 py-3.5">
              Kwaliteitsgarantie →
            </a>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {[
              { value: "99%+", label: "Gegarandeerde zuiverheid" },
              { value: "24u", label: "Verzendtijd" },
              { value: "1.200+", label: "Tevreden klanten" },
              { value: "85+", label: "Trustpilot reviews" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="stat-number">{stat.value}</span>
                <span className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
      />
    </section>
  );
}
