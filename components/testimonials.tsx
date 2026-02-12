"use client"

import { useEffect, useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Lucas Mendes",
    role: "Aluno ha 2 anos",
    text: "A Academia ADM mudou minha vida. Em 6 meses perdi 15kg e ganhei muito mais disposicao. A equipe e incrivel!",
    stars: 5,
  },
  {
    name: "Ana Paula Silva",
    role: "Aluna ha 1 ano",
    text: "Ambiente super motivador e profissionais de excelencia. Me sinto acolhida e desafiada ao mesmo tempo. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Ricardo Oliveira",
    role: "Aluno ha 3 anos",
    text: "Ja treinei em varias academias, mas a ADM e de outro nivel. Equipamentos de primeira e o melhor custo-beneficio da regiao.",
    stars: 5,
  },
]

export function Testimonials() {
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

    const cards = sectionRef.current?.querySelectorAll("[data-animate]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="depoimentos"
      className="bg-background py-20 lg:py-28"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Historias reais de transformacao e resultados que fazem a diferenca.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              data-animate
              className="relative flex flex-col rounded-2xl border-2 border-border bg-card p-8 opacity-0 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote
                size={32}
                className="absolute right-6 top-6 text-primary/10"
              />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                {`"${item.text}"`}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
