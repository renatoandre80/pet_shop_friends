export const siteConfig = {
  name: "Patas Felizes",
  shortName: "Patas Felizes",
  tagline: "Cuidado, carinho e saúde para o seu melhor amigo",
  description:
    "Pet shop e clínica veterinária com banho & tosa, consultas, hotel para pets e os melhores produtos. Atendimento humanizado em São Paulo.",
  url: "https://patasfelizes.com.br",

  phoneDisplay: "(11) 4002-8922",
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Gostaria de agendar um horário para o meu pet 🐾",
  email: "contato@patasfelizes.com.br",

  address: {
    street: "Rua das Flores, 482 — Vila Mariana",
    city: "São Paulo - SP",
    cep: "04101-000",
  },

  hours: [
    { label: "Segunda a Sexta", value: "08:00 – 19:00" },
    { label: "Sábado", value: "08:00 – 16:00" },
    { label: "Domingo", value: "Fechado" },
  ],

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  stats: [
    { value: "8+", label: "anos de experiência" },
    { value: "3.200+", label: "pets atendidos" },
    { value: "4.9/5", label: "avaliação média" },
    { value: "12", label: "profissionais especializados" },
  ],
} as const;

export function buildWhatsAppLink(message: string = siteConfig.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
