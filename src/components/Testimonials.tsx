import { StarIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Mariana Silva",
    pet: "tutora da Bela",
    quote:
      "A Bela sempre volta tranquila e cheirosa do banho e tosa. A equipe é extremamente cuidadosa e carinhosa com ela.",
  },
  {
    name: "Carlos Eduardo",
    pet: "tutor do Thor",
    quote:
      "Levei o Thor para uma consulta de emergência e fui super bem atendido. Profissionalismo e empatia em cada etapa.",
  },
  {
    name: "Fernanda Lima",
    pet: "tutora do Mingau",
    quote:
      "Deixo o Mingau no hotel pet sempre que viajo e tenho total tranquilidade. Recebo fotos e atualizações o tempo todo.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Quem confia, recomenda
          </h2>
          <p className="mt-4 text-lg text-muted">
            Histórias reais de tutores e seus pets que já fazem parte da
            nossa família.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              as="figure"
              delay={index * 100}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex gap-1 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/60 font-display text-sm font-semibold text-sage-dark">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.pet}</p>
                </div>
              </figcaption>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
