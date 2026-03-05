"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "rgba(13,20,35,0.4)" }}>
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 w-[600px] h-64 rounded-full pointer-events-none -translate-x-1/2"
        style={{
          background: "radial-gradient(ellipse, rgba(0,194,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="section-label mb-6">Bestellen & Contact</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar om te{" "}
              <span className="gradient-text">bestellen?</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Vul het formulier in of stuur ons een e-mail. Wij reageren doorgaans
              binnen enkele uren en helpen u graag verder met uw onderzoek.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 3h12l-6 7-6-7zM3 3v10a1 1 0 001 1h10a1 1 0 001-1V3"/>
                    </svg>
                  ),
                  label: "E-mail",
                  value: "info@retaeu.nl",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
                    </svg>
                  ),
                  label: "Adres",
                  value: "Weidestraat 11, 2266 AL Leidschendam",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="9" cy="9" r="7"/>
                      <path d="M9 5v4l3 2"/>
                    </svg>
                  ),
                  label: "Reactietijd",
                  value: "Binnen 4 uur op werkdagen",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="feature-icon" style={{ color: "var(--accent-blue)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-secondary)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,194,255,0.2), rgba(0,229,176,0.2))",
                    border: "1px solid rgba(0,229,176,0.4)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--accent-teal)" strokeWidth="2.5">
                    <path d="M5 14l6 6L23 8"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Bericht ontvangen!</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold mb-1">Stuur ons een bericht</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      Naam *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Uw naam"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: "rgba(26,42,66,0.5)",
                        border: "1px solid var(--border)",
                        color: "white",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      E-mail *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="email@uw-lab.nl"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: "rgba(26,42,66,0.5)",
                        border: "1px solid var(--border)",
                        color: "white",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Organisatie / Instelling
                  </label>
                  <input
                    type="text"
                    placeholder="Naam laboratorium of universiteit"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: "rgba(26,42,66,0.5)",
                      border: "1px solid var(--border)",
                      color: "white",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Product(en) van interesse
                  </label>
                  <input
                    type="text"
                    placeholder="bijv. Retatrutide 10mg × 5"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: "rgba(26,42,66,0.5)",
                      border: "1px solid var(--border)",
                      color: "white",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Bericht *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Uw vraag of aanvraag..."
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                    style={{
                      background: "rgba(26,42,66,0.5)",
                      border: "1px solid var(--border)",
                      color: "white",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-blue)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                <p className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
                  Door dit formulier in te sturen bevestigt u dat de producten uitsluitend voor
                  wetenschappelijk onderzoek worden gebruikt.
                </p>

                <button type="submit" className="btn-glow w-full text-center py-3.5 text-sm">
                  Verstuur aanvraag →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
