"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Voor welke doeleinden zijn de producten bedoeld?",
    a: "Alle producten van RetaEU zijn uitsluitend bestemd voor wetenschappelijk en laboratoriumonderzoek (in vitro). Ze zijn niet goedgekeurd voor menselijk of dierlijk gebruik, medische diagnose of therapie.",
  },
  {
    q: "Hoe snel wordt mijn bestelling verzonden?",
    a: "Bestellingen die vóór 14:00 uur worden geplaatst, worden doorgaans dezelfde werkdag verwerkt en verstuurd. De meeste klanten ontvangen hun bestelling binnen 1-3 werkdagen na verzending.",
  },
  {
    q: "Wat is de zuiverheid van uw producten?",
    a: "Al onze peptiden worden getest met behulp van HPLC-analyse en hebben een gegarandeerde zuiverheid van 99%+. Bij elke bestelling ontvangt u een Certificate of Analysis (CoA) van een onafhankelijk laboratorium.",
  },
  {
    q: "Hoe worden de producten verpakt en bewaard?",
    a: "Producten worden gelyofiliseerd (vriesgedroogd) geleverd in steriele, afgesloten vials. Tijdens transport worden temperatuurgevoelige producten voorzien van koelelementen. Bij ontvangst bewaren wij aan u de aanbevolen opbergcondities mee.",
  },
  {
    q: "Zijn mijn gegevens veilig bij RetaEU?",
    a: "Uw privacy is onze prioriteit. Wij verwerken uw gegevens conform de AVG/GDPR. Factuurinformatie wordt niet gedeeld met derden en bestellingen worden discreet verzonden zonder herkenbare afzendervermelding.",
  },
  {
    q: "Welke betaalmethoden accepteren jullie?",
    a: "Wij accepteren bankoverschrijving (IBAN), iDEAL en diverse cryptovaluta. Na het plaatsen van uw bestelling ontvangt u de betalingsinstructies per e-mail.",
  },
  {
    q: "Kan ik een retour aanvragen?",
    a: "Vanwege de aard van de producten (laboratoriumchemicaliën) zijn retouren beperkt. Mocht er sprake zijn van een kwaliteitsprobleem of beschadiging, neem dan binnen 48 uur na ontvangst contact op en wij lossen dit direct op.",
  },
  {
    q: "Leveren jullie ook buiten Nederland?",
    a: "Ja, wij verzenden door heel Europa. Levertijden en verzendkosten variëren per land. Neem contact op voor specifieke informatie over uw land.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veelgestelde{" "}
            <span className="gradient-text">vragen</span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>
            Staat uw vraag er niet bij? Neem gerust contact met ons op.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`accordion-item ${open === i ? "open" : ""}`}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm md:text-base">{faq.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    color: open === i ? "var(--accent-blue)" : "var(--text-secondary)",
                  }}
                >
                  <path d="M4 6l5 5 5-5"/>
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === i ? "300px" : "0",
                }}
              >
                <p
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
