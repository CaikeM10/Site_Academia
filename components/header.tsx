"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Suplementos", href: "#suplementos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localizacao", href: "#localizacao" },
  { label: "Instagram", href: "#social" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/logoacademia.jpg"
            alt="Logo Academia ADM - Alto do Mourao"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold uppercase tracking-wider text-primary-foreground">
              Academia ADM
            </span>
            <span className="text-xs tracking-wide text-primary-foreground/70">
              Alto do Mourao
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-primary-foreground px-5 py-2 text-sm font-bold text-primary transition-all hover:scale-105 hover:shadow-lg"
          >
            Matricule-se
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-primary-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-primary-foreground/10 bg-primary px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-md bg-primary-foreground px-5 py-3 text-center text-sm font-bold text-primary"
          >
            Matricule-se
          </a>
        </nav>
      )}
    </header>
  );
}
