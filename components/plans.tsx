"use client"

import { useEffect, useRef } from "react"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Mensal",
    price: "89,90",
    period: "/mes",
    popular: false,
    features: [
      "Acesso a todas as areas",
      "Avaliacao fisica inclusa",
      "Horario livre",
      "Armario individual",
    ],
  },
  {
    name: "Trimestral",
    price: "69,90",
    period: "/mes",
    popular: true,
    features: [
      "Acesso a todas as areas",
      "Avaliacao fisica mensal",
      "Horario livre",
      "Armario individual",
      "Acompanhamento de treino",
      "Acesso ao app exclusivo",
    ],
  },
  {
    name: "Anual",
    price: "49,90",
    period: "/mes",
    popular: false,
    features: [
      "Acesso a todas as areas",
      "Avaliacao fisica mensal",
      "Horario livre",
      "Armario individual",
      "Acompanhamento de treino",
      "Acesso ao app exclusivo",
      "Desconto em suplementos",
    ],
  },
]

export function Plans() {
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
    <section id="planos" className="bg-background py-20 lg:py-28" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
            Planos
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Escolha o Plano Ideal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Invista no seu corpo com o melhor custo-beneficio da regiao.
            Todos os planos incluem acesso completo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              data-animate
              className={`relative flex flex-col rounded-2xl border-2 p-8 opacity-0 transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-primary bg-primary text-primary-foreground shadow-lg scale-[1.03]"
                  : "border-border bg-card text-card-foreground"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-md">
                  <Star size={14} className="fill-current" /> Mais Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold uppercase">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm font-medium opacity-70">R$</span>
                <span className="font-display text-5xl font-black">
                  {plan.price}
                </span>
                <span className="text-sm opacity-70">{plan.period}</span>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check
                      size={18}
                      className={
                        plan.popular
                          ? "shrink-0 text-primary-foreground"
                          : "shrink-0 text-primary"
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5500000000000?text=Ola!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(plan.name)}."
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-md py-3.5 text-center text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] hover:shadow-lg ${
                  plan.popular
                    ? "bg-primary-foreground text-primary"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Quero Este Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
