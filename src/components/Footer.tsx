import { siteConfig } from "@/lib/site-config";
import { PawIcon, InstagramIcon, FacebookIcon } from "@/components/icons";

const SERVICE_LINKS = ["Banho & Tosa", "Consulta Veterinária", "Hotel & Day Care", "Loja de Produtos"];

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
                <PawIcon className="h-5 w-5" />
              </span>
              {siteConfig.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-accent">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-accent">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-accent">Perguntas frequentes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>{siteConfig.address.street}</li>
              <li>{siteConfig.address.city}</li>
              <li>{siteConfig.phoneDisplay}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {CURRENT_YEAR} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Site demonstrativo de portfólio — negócio fictício.</p>
        </div>
      </div>
    </footer>
  );
}
