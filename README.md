# Patas Felizes — Landing Page (Pet Shop)

Landing page moderna e responsiva para pet shop/clínica veterinária, construída como peça de portfólio para trabalhos freelance. Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, sem backend — 100% estática, pronta para hospedagem gratuita.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Personalizando para um cliente real

Quase toda a identidade do site (nome, telefone, WhatsApp, endereço, horários, redes sociais e estatísticas de destaque) vive em um único arquivo:

```
src/lib/site-config.ts
```

Edite esse arquivo para reaproveitar o template em outros clientes sem mexer nos componentes. Cores da marca ficam em `src/app/globals.css` (bloco `:root`), e a tipografia (Poppins + Inter) é configurada em `src/app/layout.tsx`.

Antes de publicar para um cliente real:
- Troque o número de WhatsApp e telefone em `site-config.ts`.
- Substitua o bloco "mapa ilustrativo" em `src/components/ContactLocation.tsx` por um embed real do Google Maps com o endereço definitivo.
- Ajuste textos de serviços/depoimentos/FAQ para o negócio real.

## Deploy no Vercel (grátis)

O projeto não precisa de nenhuma configuração extra — é um app Next.js padrão.

**Opção 1 — via GitHub (recomendado, com deploy automático a cada push):**
1. Crie um repositório no GitHub e suba este projeto (`git push`).
2. Acesse [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Vercel detecta o Next.js automaticamente — clique em "Deploy". Pronto.

**Opção 2 — via CLI, direto desta pasta:**
```bash
npx vercel login   # autentica sua conta (abre o navegador)
npx vercel --prod  # publica em produção
```

Qualquer uma das opções fica no plano gratuito (Hobby) do Vercel, suficiente para este site.

## Qualidade

- `npm run lint` — ESLint (Next.js core-web-vitals + TypeScript).
- `npm run build` — build de produção; falha se houver erro de tipos.
