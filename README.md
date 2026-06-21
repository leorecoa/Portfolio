# Leandro Jesse | Developer Portfolio

Portfolio pessoal para apresentar posicionamento profissional, projetos reais, stack tecnica e formas de contato.

## Posicionamento

Full Stack Developer focused on React, TypeScript, FastAPI, Supabase and product-driven web applications.

I build practical systems with clear architecture, reliable business logic, secure data access and polished user experience.

## Projetos em destaque

- **RagResover**: aplicacao RAG para upload, indexacao e consulta de documentos privados com busca semantica, respostas com fontes e arquitetura local-first.
- **Job-e-Comiss-es**: sistema de agendamento e controle de comissoes para barbearias, com booking publico, agenda interna, Supabase e regras de acesso.
- **Mansao Maromba**: e-commerce com catalogo, carrinho, checkout protegido, autenticacao Google, historico de pedidos e regras de seguranca no Supabase.
- **clinic-system**: API com FastAPI, PostgreSQL e Docker para estudo de backend, endpoints REST, integracao com banco e ambiente containerizado.

## Stack

| Camada | Tecnologias |
| --- | --- |
| Interface | React, TypeScript, Tailwind CSS |
| Build | Vite |
| Animacoes | Framer Motion |
| Icones | Lucide React |
| Backend em projetos | FastAPI |
| Dados em projetos | Supabase, PostgreSQL |
| Infra em projetos | Docker, Vercel |

## Funcionalidades do portfolio

- Interface responsiva para desktop e mobile.
- Estrutura baseada em componentes.
- Secoes de apresentacao, processo, stack, projetos e contato.
- Background interativo com particulas.
- Animacoes controladas com Framer Motion.
- PWA com manifest, icones e pagina publica de privacidade.

## Estrutura

```txt
.
+-- components/
|   +-- effects/
|   +-- layout/
|   +-- sections/
|   +-- ui/
+-- docs/
+-- hooks/
+-- lib/
+-- public/
+-- types/
+-- App.tsx
+-- index.tsx
+-- globals.css
+-- tailwind.config.js
+-- vite.config.ts
+-- package.json
```

## Como executar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Quality checks

```bash
npm run lint
npm run test:run
npm run build
```

The project uses ESLint for static analysis, Vitest and React Testing Library for automated tests, and Vite for production builds.

The interface includes accessibility baseline improvements such as visible focus states, keyboard-friendly navigation, ARIA labels and reduced-motion support.

The app uses Vite bundle splitting, lazy-loaded sections and resource hints to improve initial loading performance.

The project includes SEO metadata, Open Graph/Twitter Card tags, structured data, robots.txt and sitemap.xml.

The portfolio includes project case studies covering problem context, technical decisions, stack and implementation outcomes.

## Deploy

Publicado na Vercel:

https://portfolio-vert-alpha-h2mwblh056.vercel.app

## Links

- GitHub: https://github.com/leorecoa
- LinkedIn: https://www.linkedin.com/in/leandro-jess%C3%A9-7b575539a/
- Privacidade: `/privacy.html`
