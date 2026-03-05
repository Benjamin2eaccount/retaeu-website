"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Producten", href: "#producten" },
  { label: "Kwaliteit", href: "#kwaliteit" },
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Recensies", href: "#recensies" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
            background: "linear-gradient(135deg, #00C2FF, #00E5B0)"
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L14 6V12L9 16L4 12V6L9 2Z" fill="#060912" strokeWidth="0"/>
              <circle cx="9" cy="9" r="2.5" fill="#060912"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Reta<span className="gradient-text">EU</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-glow text-sm">
            Bestellen
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18"/>
                <line x1="18" y1="4" x2="4" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7"/>
                <line x1="3" y1="11" x2="19" y2="11"/>
                <line x1="3" y1="15" x2="19" y2="15"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mobile-menu border-t" style={{ borderColor: "var(--border)" }}>
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t" style={{ borderColor: "var(--border)" }}>
              <a href="#contact" className="btn-glow w-full text-center block text-sm">
                Bestellen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
