"use client";

import { useEffect, useRef } from "react";
import { Dumbbell, Users, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Dumbbell,
    title: "Equipamentos Modernos",
    desc: "Linha completa de equipamentos de ultima geracao para treinos de alta performance.",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    desc: "Equipe de personal trainers certificados prontos para guiar sua evolucao.",
  },
  {
    icon: Target,
    title: "Foco em Resultado",
    desc: "Metodologia comprovada para voce alcancar seus objetivos de forma eficiente.",
  },
  {
    icon: Zap,
    title: "Ambiente Motivador",
    desc: "Espaco energetico e acolhedor que inspira voce a dar o seu melhor a cada treino.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = sectionRef.current?.querySelectorAll("[data-animate]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="bg-primary py-20 lg:py-28" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div data-animate className="opacity-0">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/about-gym.jpg"
                alt="Interior da Academia ADM com equipamentos modernos"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div data-animate className="opacity-0">
              <span className="mb-3 inline-block rounded-full bg-primary-foreground/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                Sobre nos
              </span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary-foreground md:text-5xl">
                Sua Evolução Comeca Aqui
              </h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/80">
                A Academia ADM e a referencia em treinamento fisico no Alto do
                Mourao. Com um ambiente moderno, equipamentos de ponta e uma
                equipe dedicada, oferecemos tudo o que voce precisa para
                transformar sua vida atraves do exercicio.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  data-animate
                  className="flex gap-4 rounded-xl bg-primary-foreground/5 p-4 opacity-0 transition-colors hover:bg-primary-foreground/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-primary-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
