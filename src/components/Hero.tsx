import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import PetIllustration from "@/components/PetIllustration";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <ScrollReveal as="div">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/60 px-4 py-1.5 text-sm font-semibold text-sage-dark">
            <StarIcon className="h-4 w-4" />
            Pet shop &amp; clínica veterinária
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.3rem]">
            Seu pet merece{" "}
            <span className="relative text-accent">
              cuidado de verdade
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            {siteConfig.description} Agende em poucos minutos e dê ao seu
            melhor amigo o carinho que ele merece.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Agendar horário
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Ver serviços
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <ScrollReveal as="div" delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <PetIllustration className="w-full animate-float-slow" />
        </ScrollReveal>
      </div>
    </section>
  );
}
