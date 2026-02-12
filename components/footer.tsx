import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logoacademia.jpg"
                alt="Logo Academia ADM"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-primary-foreground">
                  Academia ADM
                </h3>
                <p className="text-xs text-primary-foreground/60">
                  Alto do Mourao
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Sua evolucao comeca aqui. Equipamentos modernos, profissionais
              qualificados e resultados reais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Navegacao
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Planos", href: "#planos" },
                { label: "Sobre", href: "#sobre" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Localizacao", href: "#localizacao" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Redes Sociais
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground transition-all hover:bg-primary-foreground/20 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground transition-all hover:bg-primary-foreground/20 hover:scale-110"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Siga-nos para dicas de treino e novidades!
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            {`\u00A9 ${new Date().getFullYear()} Academia ADM \u2013 Alto do Mourao. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
