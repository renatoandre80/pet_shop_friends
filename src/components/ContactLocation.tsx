import { siteConfig } from "@/lib/site-config";
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon, PawIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactLocation() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Venha nos visitar
          </h2>
          <p className="mt-4 text-lg text-muted">
            Estamos de portas abertas para você e seu pet.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal as="div" className="space-y-6">
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <MapPinIcon className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="font-display font-semibold">Endereço</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city} — CEP {siteConfig.address.cep}
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <ClockIcon className="h-6 w-6 shrink-0 text-accent" />
              <div className="w-full">
                <h3 className="font-display font-semibold">Horário de funcionamento</h3>
                <dl className="mt-2 space-y-1.5 text-sm text-muted">
                  {siteConfig.hours.map((item) => (
                    <div key={item.label} className="flex justify-between gap-4">
                      <dt>{item.label}</dt>
                      <dd className="font-medium text-foreground/80">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:+${siteConfig.whatsappNumber}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent"
              >
                <PhoneIcon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent"
              >
                <MailIcon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{siteConfig.email}</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal
            as="div"
            delay={150}
            className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-border bg-sage/30"
          >
            <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,var(--color-sage-dark)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="relative flex flex-col items-center gap-3 text-center text-sage-dark">
              <PawIcon className="h-10 w-10" />
              <p className="max-w-xs text-sm font-medium">
                Mapa ilustrativo — substitua por um embed real do Google Maps
                com o endereço definitivo da loja.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
