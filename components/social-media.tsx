"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Instagram, ExternalLink } from "lucide-react"

const reels = [
  {
    id: "reel-1",
    title: "Treino de Peito Completo",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=700&fit=crop",
    url: "https://www.instagram.com/reel/",
    views: "12.4K",
  },
  {
    id: "reel-2",
    title: "Desafio 30 dias de Agachamento",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=700&fit=crop",
    url: "https://www.instagram.com/reel/",
    views: "8.7K",
  },
  {
    id: "reel-3",
    title: "Dia de Costas na ADM",
    thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=700&fit=crop",
    url: "https://www.instagram.com/reel/",
    views: "15.2K",
  },
  {
    id: "reel-4",
    title: "Transformacao - 3 Meses",
    thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=700&fit=crop",
    url: "https://www.instagram.com/reel/",
    views: "22.1K",
  },
  {
    id: "reel-5",
    title: "Dica de Suplementacao",
    thumbnail: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=700&fit=crop",
    url: "https://www.instagram.com/reel/",
    views: "6.3K",
  },
  {
    id: "reel-6",
    title: "Tour pela Academia ADM",
    thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=700&fit=crop",
    url: "https://www.instagram.com/reel/",
    views: "18.9K",
  },
  {
    id: "reel-7",
    title: "Receita Fit do Dia",
    thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=700&fit=crop",
    url: "https://www.instagram.com/reel/",
    views: "9.5K",
  },
]

export function SocialMedia() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>("[data-reel]")?.offsetWidth ?? 220
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + 20) : cardWidth + 20,
      behavior: "smooth",
    })
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        }
      },
      { threshold: 0.1 }
    )
    const items = sectionRef.current?.querySelectorAll("[data-animate]")
    items?.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="social"
      className="bg-foreground py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div data-animate className="opacity-0 text-center md:text-left">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-background">
              <Instagram size={14} />
              Instagram
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-background md:text-5xl">
              Siga-nos nas Redes
            </h2>
            <p className="mt-3 max-w-md text-background/60">
              Acompanhe nossos treinos, dicas e transformacoes. Faca parte da
              comunidade ADM no Instagram.
            </p>
          </div>

          <div data-animate className="flex items-center gap-4 opacity-0">
            {/* Follow button */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] px-6 py-3 text-sm font-bold text-background transition-all hover:scale-105 hover:shadow-lg"
            >
              <Instagram size={18} />
              Seguir @academiaadm
            </a>

            {/* Navigation arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background/70 transition-all hover:border-background/50 hover:text-background disabled:opacity-30"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background/70 transition-all hover:border-background/50 hover:text-background disabled:opacity-30"
                aria-label="Proximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Reels Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reels.map((reel, index) => (
            <a
              key={reel.id}
              data-reel
              data-animate
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[200px] shrink-0 opacity-0 md:w-[220px]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border-2 border-background/10 transition-all duration-300 group-hover:border-primary group-hover:shadow-2xl group-hover:shadow-primary/20">
                <img
                  src={reel.thumbnail || "/placeholder.svg"}
                  alt={reel.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-6 w-6 text-background"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Reel views */}
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3 text-background"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  <span className="text-[10px] font-bold text-background">
                    {reel.views}
                  </span>
                </div>

                {/* Instagram icon */}
                <div className="absolute right-3 top-3 rounded-full bg-black/50 p-1.5 backdrop-blur-sm">
                  <Instagram size={12} className="text-background" />
                </div>

                {/* Title + CTA */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-bold leading-tight text-background">
                    {reel.title}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs font-medium text-background/70 transition-colors group-hover:text-primary-foreground">
                    Ver no Instagram
                    <ExternalLink size={10} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
