const reviews = [
  {
    name: "Dr. M. van den Berg",
    role: "Moleculair bioloog, Utrecht",
    stars: 5,
    text: "Uitstekende kwaliteit peptiden. De CoA sloot perfect aan bij de verwachte zuiverheidswaarden. Snelle levering en professionele verpakking. Zeker weer bestellen.",
    date: "feb 2025",
  },
  {
    name: "Prof. J. Hendriksen",
    role: "Onderzoeker, Leiden University",
    stars: 5,
    text: "Al meer dan een jaar gebruik ik RetaEU als primaire leverancier voor mijn laboratorium. Consistente kwaliteit, vlotte communicatie en concurrerende prijzen.",
    date: "jan 2025",
  },
  {
    name: "R. Smeets",
    role: "Farmaceutisch onderzoeker",
    stars: 5,
    text: "De retatrutide was van top kwaliteit — HPLC resultaten bevestigd door eigen analyse. Verzendtijd was geweldig, binnen 48u na bestelling ontvangen.",
    date: "mrt 2025",
  },
  {
    name: "T. Bakker",
    role: "Biotechnologie lab, Amsterdam",
    stars: 5,
    text: "Discrete verpakking, snelle levering en goede klantenservice. Vragen werden snel en professioneel beantwoord. Highly recommended.",
    date: "dec 2024",
  },
  {
    name: "Dr. S. Martens",
    role: "Neurowetenschapper",
    stars: 5,
    text: "BPC-157 van topkwaliteit. Certificate of Analysis was direct beschikbaar. Ik ben zeer tevreden met de service en zal zeker terugkomen.",
    date: "jan 2025",
  },
  {
    name: "K. de Vries",
    role: "Sportwetenschap onderzoeker",
    stars: 4,
    text: "Goede productkwaliteit en snelle verzending. Een kleine vertraging bij klantenservice, maar het probleem werd snel opgelost. Zeker een betrouwbare leverancier.",
    date: "feb 2025",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < count ? "#F59E0B" : "none"}
          stroke={i < count ? "#F59E0B" : "var(--border)"}
          strokeWidth="1.5"
        >
          <path d="M7 1.5l1.5 3 3.3.5-2.4 2.3.6 3.2L7 9 4 10.5l.6-3.2L2.2 5l3.3-.5L7 1.5z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="recensies" className="py-24 relative" style={{ background: "rgba(13,20,35,0.3)" }}>
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,229,176,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto mb-4">Klantenrecensies</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wat onze klanten{" "}
            <span className="gradient-text">zeggen</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#F59E0B">
                  <path d="M10 2l2 5.5h5.5l-4.5 3.3 1.7 5.2L10 13l-4.7 3 1.7-5.2L2.5 7.5H8L10 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-xl font-bold">4.9</span>
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              op basis van 85+ Trustpilot beoordelingen
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-6 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <Stars count={review.stars} />
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,194,255,0.2), rgba(0,229,176,0.2))",
                      color: "var(--accent-blue)",
                    }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{review.role}</p>
                  </div>
                </div>
                <span className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot link */}
        <div className="text-center mt-10">
          <a
            href="https://www.trustpilot.com/review/retaeu.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            Alle reviews op Trustpilot →
          </a>
        </div>
      </div>
    </section>
  );
}
