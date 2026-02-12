"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (el) el.classList.add("animate-fade-in-up")
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-gym.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center opacity-0">
        <img
          src="/images/logoacademia.jpg"
          alt="Logo Academia ADM"
          className="mx-auto mb-8 h-28 w-28 rounded-full object-cover shadow-2xl lg:h-36 lg:w-36"
        />
        <h1 className="font-display text-5xl font-black uppercase leading-tight tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">{'Forca. Foco. Resultado.'}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          Transforme seu corpo e sua mente na academia que e referencia no Alto
          do Mourao. Equipamentos modernos, profissionais qualificados e
          resultados reais.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#planos"
            className="rounded-md bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-xl"
          >
            Conheca Nossos Planos
          </a>
          <a
            href="https://wa.me/5500000000000?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20a%20academia."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-2 border-primary-foreground/50 px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#planos"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-primary-foreground/60 transition-colors hover:text-primary-foreground"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
