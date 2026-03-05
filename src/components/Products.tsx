const products = [
  {
    id: "retatrutide",
    name: "Retatrutide",
    subtitle: "GLP-1 / GIP / Glucagon Agonist",
    tag: "Bestseller",
    tagColor: "#00C2FF",
    description:
      "Drievoudige receptoragonist voor metabolisch onderzoek. Hoogste zuiverheidsgraad beschikbaar op de markt.",
    purity: 99.4,
    doses: ["2mg", "5mg", "10mg", "20mg"],
    priceFrom: "€ 39",
    icon: "⬡",
    highlight: true,
  },
  {
    id: "bpc157",
    name: "BPC-157",
    subtitle: "Body Protection Compound",
    tag: "Populair",
    tagColor: "#00E5B0",
    description:
      "Synthetisch pentadecapeptide met 15 aminozuren, veelvuldig onderzocht voor weefsel- en vaatherstel.",
    purity: 99.1,
    doses: ["2mg", "5mg", "10mg"],
    priceFrom: "€ 29",
    icon: "⬡",
    highlight: false,
  },
  {
    id: "tb500",
    name: "TB-500",
    subtitle: "Thymosin Beta-4 Analoog",
    tag: "Nieuw",
    tagColor: "#A78BFA",
    description:
      "Synthetisch analoog van Thymosin Beta-4. Onderzocht op actin-binding en celmigratieprocessen.",
    purity: 99.0,
    doses: ["2mg", "5mg", "10mg"],
    priceFrom: "€ 34",
    icon: "⬡",
    highlight: false,
  },
  {
    id: "ghkcu",
    name: "GHK-Cu",
    subtitle: "Koper Tripeptide Complexe",
    tag: "Anti-Aging",
    tagColor: "#F59E0B",
    description:
      "Koper-tripeptide complex met natuurlijke structuur, onderzocht voor cellulaire regeneratieprocessen.",
    purity: 99.2,
    doses: ["50mg", "100mg", "200mg"],
    priceFrom: "€ 44",
    icon: "⬡",
    highlight: false,
  },
  {
    id: "epitalon",
    name: "Epitalon",
    subtitle: "Tetrapeptide — Epithalamine",
    tag: "Longevity",
    tagColor: "#EC4899",
    description:
      "Synthetisch tetrapeptide afgeleid van de pijnappelklier, bestudeerd in verouderings- en slaaponderzoek.",
    purity: 99.3,
    doses: ["10mg", "20mg", "50mg"],
    priceFrom: "€ 49",
    icon: "⬡",
    highlight: false,
  },
  {
    id: "pt141",
    name: "PT-141",
    subtitle: "Bremelanotide",
    tag: "Research",
    tagColor: "#8B9DC3",
    description:
      "Melanocortine-receptoragonist bestudeerd in neurofarmacologisch en hormonaal onderzoek.",
    purity: 99.0,
    doses: ["2mg", "5mg", "10mg"],
    priceFrom: "€ 32",
    icon: "⬡",
    highlight: false,
  },
];

export default function Products() {
  return (
    <section id="producten" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto mb-4">Ons Assortiment</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gecertificeerde{" "}
            <span className="gradient-text">Onderzoekspeptiden</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Alle producten worden geleverd met een Certificate of Analysis (CoA) en zijn
            uitsluitend bestemd voor wetenschappelijk onderzoek.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card p-6 flex flex-col"
              style={product.highlight ? { borderColor: "rgba(0,194,255,0.3)" } : {}}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,194,255,0.15), rgba(0,229,176,0.15))",
                    border: "1px solid rgba(0,194,255,0.2)",
                  }}
                >
                  {product.icon}
                </div>
                <span
                  className="badge"
                  style={{
                    background: `${product.tagColor}18`,
                    color: product.tagColor,
                    border: `1px solid ${product.tagColor}30`,
                  }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Name & subtitle */}
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-xs font-medium mb-3" style={{ color: "var(--accent-blue)" }}>
                {product.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
                {product.description}
              </p>

              {/* Purity bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  <span>Zuiverheid</span>
                  <span className="font-semibold" style={{ color: "white" }}>
                    {product.purity}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                  <div
                    className="purity-bar"
                    style={{ width: `${product.purity}%` }}
                  />
                </div>
              </div>

              {/* Doses */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.doses.map((dose) => (
                  <span
                    key={dose}
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{
                      background: "rgba(26,42,66,0.8)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {dose}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Vanaf
                  </span>
                  <span className="text-lg font-bold ml-1.5">{product.priceFrom}</span>
                </div>
                <a href="#contact" className="btn-glow text-xs px-4 py-2">
                  Bestellen
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs mt-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
          Alle producten zijn uitsluitend bestemd voor laboratoriumonderzoek. Niet geschikt voor menselijk of
          dierlijk gebruik. Bestelling impliceert akkoord met onze onderzoeksvoorwaarden.
        </p>
      </div>
    </section>
  );
}
