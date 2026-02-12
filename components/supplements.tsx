"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    name: "Whey Protein Isolado",
    brand: "Growth Supplements",
    price: "R$ 149,90",
    originalPrice: "R$ 189,90",
    rating: 4.9,
    reviews: 234,
    image: "/whey.webp",
    tag: "Mais Vendido",
    description:
      "30g de proteina por dose. Ideal para ganho de massa muscular.",
  },
  {
    name: "Creatina Monohidratada",
    brand: "Growth Supplements",
    price: "R$ 89,90",
    originalPrice: "R$ 109,90",
    rating: 4.8,
    reviews: 187,
    image: "/creatina.webp",
    tag: "Oferta",
    description: "5g por dose. Aumento de forca e performance nos treinos.",
  },
  {
    name: "Pre-Treino Extreme",
    brand: "Max Titanium",
    price: "R$ 119,90",
    originalPrice: "R$ 139,90",
    rating: 4.7,
    reviews: 156,
    image: "/pre-treino.webp",
    tag: "Novo",
    description: "Energia explosiva com cafeina, beta-alanina e taurina.",
  },
  {
    name: "BCAA 2:1:1",
    brand: "Integralmedica",
    price: "R$ 69,90",
    originalPrice: "R$ 89,90",
    rating: 4.6,
    reviews: 98,
    image: "/bcaa.webp",
    tag: null,
    description: "Aminoacidos essenciais para recuperacao e anti-catabolico.",
  },
  {
    name: "Glutamina Pura",
    brand: "Growth Supplements",
    price: "R$ 79,90",
    originalPrice: "R$ 99,90",
    rating: 4.7,
    reviews: 112,
    image: "/glutamina.jpg",
    tag: null,
    description:
      "Recuperacao muscular e fortalecimento do sistema imunologico.",
  },
  {
    name: "Multivitaminico Daily",
    brand: "Max Titanium",
    price: "R$ 49,90",
    originalPrice: "R$ 64,90",
    rating: 4.5,
    reviews: 76,
    image: "/multivitaminico.webp",
    tag: "Essencial",
    description: "Vitaminas e minerais essenciais para saude e desempenho.",
  },
];

export function Supplements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 320;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        }
      },
      { threshold: 0.1 },
    );
    const items = sectionRef.current?.querySelectorAll("[data-animate]");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="suplementos"
      className="bg-background py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div data-animate className="opacity-0 text-center md:text-left">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
              Loja
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              Suplementos
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Os melhores suplementos para potencializar seus resultados.
              Disponivel na recepcao da academia.
            </p>
          </div>

          {/* Navigation arrows */}
          <div data-animate className="flex gap-3 opacity-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Proximo"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.name}
              data-card
              data-animate
              className="group relative w-[280px] shrink-0 opacity-0 md:w-[300px]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                {/* Tag */}
                {product.tag && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {product.tag}
                  </span>
                )}

                {/* Image */}
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/10">
                    <a
                      href="https://wa.me/5500000000000?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground opacity-0 transition-all duration-300 hover:scale-105 group-hover:opacity-100"
                    >
                      <ShoppingCart size={16} />
                      Comprar
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {product.brand}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-card-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={`star-${product.name}-${i}`}
                          size={13}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-border text-border"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
