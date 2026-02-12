"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Phone } from "lucide-react"

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll("[data-animate]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="localizacao"
      className="bg-secondary py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Localizacao
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-secondary-foreground md:text-5xl">
            Onde Estamos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Venha nos visitar e conheca nossa estrutura de perto.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Info Cards */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div
              data-animate
              className="flex items-start gap-4 rounded-xl border-2 border-border bg-card p-6 opacity-0 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">Endereco</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Rua Principal, 123
                  <br />
                  Alto do Mourao, PE
                  <br />
                  CEP: 00000-000
                </p>
              </div>
            </div>

            <div
              data-animate
              className="flex items-start gap-4 rounded-xl border-2 border-border bg-card p-6 opacity-0 transition-all hover:border-primary/30 hover:shadow-lg"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">Horario</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Seg a Sex: 05h - 22h
                  <br />
                  Sabado: 07h - 14h
                  <br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div
              data-animate
              className="flex items-start gap-4 rounded-xl border-2 border-border bg-card p-6 opacity-0 transition-all hover:border-primary/30 hover:shadow-lg"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">Contato</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  (00) 00000-0000
                  <br />
                  contato@academiaadm.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            data-animate
            className="overflow-hidden rounded-2xl border-2 border-border shadow-lg opacity-0 lg:col-span-2"
          >
            <iframe
              title="Localizacao Academia ADM"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31580.0!2d-36.1!3d-8.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTQnMDAuMCJTIDM2wrAwNicwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
