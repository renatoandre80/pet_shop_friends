import { ChevronDownIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";

const FAQS = [
  {
    question: "Preciso agendar horário para banho e tosa?",
    answer:
      "Sim, recomendamos agendar com antecedência pelo WhatsApp para garantir o melhor horário para você e seu pet, evitando esperas.",
  },
  {
    question: "Vocês atendem emergências veterinárias?",
    answer:
      "Atendemos urgências dentro do nosso horário de funcionamento. Entre em contato pelo telefone para que possamos te orientar rapidamente.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartão de crédito, débito, PIX e dinheiro. Também é possível parcelar serviços e pacotes maiores.",
  },
  {
    question: "O hotel pet tem acompanhamento durante a estadia?",
    answer:
      "Sim! Nossa equipe monitora os pets continuamente durante o período de hospedagem e enviamos atualizações para os tutores.",
  },
  {
    question: "Posso levar meu pet mesmo sem raça definida ou de porte grande?",
    answer:
      "Com certeza. Atendemos pets de todos os portes e raças, com estrutura adequada para cada necessidade.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Ainda com dúvidas? Fale com a gente pelo WhatsApp.
          </p>
        </ScrollReveal>

        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group p-6 open:bg-background-alt/40 first:rounded-t-3xl last:rounded-b-3xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-foreground marker:content-none">
                {faq.question}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180 group-open:text-accent" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
