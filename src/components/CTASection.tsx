import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { ArrowRightIcon, PawIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <ScrollReveal as="div" className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-8 py-14 text-center sm:px-16 sm:py-20">
          <PawIcon className="absolute -left-6 -top-6 h-40 w-40 text-white/5" />
          <PawIcon className="absolute -bottom-10 -right-10 h-48 w-48 rotate-12 text-white/5" />

          <h2 className="relative font-display text-3xl font-bold text-background sm:text-4xl">
            Pronto para dar ao seu pet o cuidado que ele merece?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-background/70">
            Agende agora pelo WhatsApp e garanta o melhor horário para o seu
            melhor amigo.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Agendar no WhatsApp
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={`tel:+${siteConfig.whatsappNumber}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-background transition-colors hover:bg-white/10"
            >
              Ligar: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
