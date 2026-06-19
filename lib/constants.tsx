import { Project, ProcessStep, TechItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "RagResover",
    description: "Aplicacao RAG para upload, indexacao e consulta de documentos privados com busca semantica, respostas com fontes e arquitetura local-first.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    tags: ["FastAPI", "React", "pgvector", "PostgreSQL", "MinIO", "Docker"],
    link: "https://github.com/leorecoa/RagResover"
  },
  {
    id: 2,
    title: "Job-e-Comiss-es",
    description: "Sistema de agendamento e controle de comissoes para barbearias, com booking publico, agenda interna, Supabase e regras de acesso.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "TypeScript", "Supabase", "RLS", "Vite", "Tailwind CSS"],
    link: "https://github.com/leorecoa/Job-e-Comiss-es"
  },
  {
    id: 3,
    title: "Mansao Maromba",
    description: "E-commerce com catalogo, carrinho, checkout protegido, autenticacao Google, historico de pedidos e regras de seguranca no Supabase.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "TypeScript", "Supabase", "Auth", "RLS", "Vercel"],
    link: "https://github.com/leorecoa/Projeto-Site-Mansao-Maromba"
  },
  {
    id: 4,
    title: "clinic-system",
    description: "API com FastAPI, PostgreSQL e Docker para estudo de backend, endpoints REST, integracao com banco e ambiente containerizado.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    tags: ["FastAPI", "PostgreSQL", "Docker", "REST API"],
    link: "https://github.com/leorecoa/clinic-system"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Escopo",
    description: "Levantamento do problema, fluxos principais, regras de negocio e criterios claros para entregar valor sem complexidade desnecessaria.",
    icon: "ListChecks",
    color: "from-blue-500 to-cyan-400",
    tags: ["Produto", "UX", "Regras"]
  },
  {
    title: "Arquitetura",
    description: "Organizacao de componentes, contratos de API, modelo de dados e controle de acesso antes da implementacao.",
    icon: "Network",
    color: "from-purple-500 to-pink-500",
    tags: ["React", "FastAPI", "Supabase"]
  },
  {
    title: "Desenvolvimento",
    description: "Implementacao com TypeScript, interfaces responsivas, logica de negocio legivel e integracao segura com dados.",
    icon: "Code2",
    color: "from-cyan-400 to-emerald-400",
    tags: ["TypeScript", "Tailwind", "RLS"]
  },
  {
    title: "Validacao",
    description: "Revisao de build, responsividade, acessibilidade basica e comportamento em producao antes do deploy.",
    icon: "ShieldCheck",
    color: "from-amber-400 to-orange-500",
    tags: ["Build", "Mobile", "Vercel"]
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React", icon: "Code2", color: "#61DAFB" },
  { name: "TypeScript", icon: "Code2", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "Code2", color: "#38B2AC" },
  { name: "Vite", icon: "Zap", color: "#A855F7" },
  { name: "Framer Motion", icon: "Sparkles", color: "#FF0066" },
  { name: "FastAPI", icon: "Server", color: "#009688" },
  { name: "Supabase", icon: "Database", color: "#3ECF8E" },
  { name: "PostgreSQL", icon: "Database", color: "#336791" },
  { name: "Docker", icon: "Container", color: "#2496ED" },
  { name: "Git", icon: "Github", color: "#F05032" },
  { name: "Vercel", icon: "Rocket", color: "#FFFFFF" }
];
