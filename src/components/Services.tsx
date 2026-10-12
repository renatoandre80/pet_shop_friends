import {
  BathIcon,
  StethoscopeIcon,
  HotelIcon,
  ShopIcon,
  CheckIcon,
} from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";
import { buildWhatsAppLink } from "@/lib/site-config";

const SERVICES = [
  {
    icon: BathIcon,
    title: "Banho & Tosa",
    description:
      "Banho relaxante e tosa na tesoura ou máquina, com produtos hipoalergênicos e muito carinho.",
    bullets: ["Produtos hipoalergênicos", "Tosa higiênica ou na tesoura", "Perfume e laço de cortesia"],
  },
  {
    icon: StethoscopeIcon,
    title: "Consulta Veterinária",
    description:
      "Atendimento clínico completo, check-up, vacinas e acompanhamento com veterinários especializados.",
    bullets: ["Clínica geral e vacinação", "Exames e check-up completo", "Acompanhamento contínuo"],
  },
  {
    icon: HotelIcon,
    title: "Hotel & Day Care",
    description:
      "Hospedagem segura e supervisionada para quando você precisar viajar ou passar o dia fora.",
    bullets: ["Ambiente climatizado", "Monitoramento constante", "Atividades e socialização"],
  },
  {
    icon: ShopIcon,
    title: "Loja de Produtos",
    description:
      "Ração, petiscos, acessórios e brinquedos das melhores marcas, com orientação especializada.",
    bullets: ["Marcas premium selecionadas", "Orientação nutricional", "Entrega para a região"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que o seu pet precisa, em um só lugar
          </h2>
          <p className="mt-4 text-lg text-muted">
            Da estética ao bem-estar: conheça os serviços pensados para a
            saúde e a felicidade do seu companheiro.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.title}
              as="article"
              delay={index * 100}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-foreground/80">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal as="div" className="mt-12 text-center">
          <a
            href={buildWhatsAppLink("Olá! Gostaria de saber mais sobre os serviços disponíveis 🐾")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-base font-semibold text-background transition-colors hover:bg-accent"
          >
            Consultar disponibilidade
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
