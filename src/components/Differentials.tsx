import { ShieldIcon, HeartIcon, UsersIcon, MapPinIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

const ITEMS = [
  {
    icon: UsersIcon,
    title: "Equipe especializada",
    description: "Veterinários e groomers certificados, atualizados com as melhores práticas do setor.",
  },
  {
    icon: ShieldIcon,
    title: "Produtos premium",
    description: "Trabalhamos apenas com marcas confiáveis e produtos testados para a saúde do seu pet.",
  },
  {
    icon: HeartIcon,
    title: "Atendimento humanizado",
    description: "Paciência, escuta e carinho em cada visita — para o pet e para o tutor.",
  },
  {
    icon: MapPinIcon,
    title: "Localização fácil",
    description: "Estacionamento próprio e fácil acesso, para chegar sem complicação.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ScrollReveal as="div">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Por que escolher a gente
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Cuidado que você sente desde a primeira visita
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Não é só sobre banho e tosa. É sobre construir confiança com
              quem mais importa: o seu pet e a sua família.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {ITEMS.map((item, index) => (
              <ScrollReveal
                key={item.title}
                as="div"
                delay={index * 100}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage/60 text-sage-dark">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
