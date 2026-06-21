export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  repositoryUrl: string;
  status: string;
  stack: string[];
  problem: string;
  solution: string;
  highlights: string[];
  technicalDecisions: string[];
  outcome: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'ragresover',
    title: 'RagResover',
    subtitle: 'RAG para consultar documentos privados com busca semântica e respostas acompanhadas de fontes.',
    repositoryUrl: 'https://github.com/leorecoa/RagResover',
    status: 'Em desenvolvimento',
    stack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'MinIO', 'Docker', 'OpenAI', 'Ollama'],
    problem: 'Consultar acervos privados exige transformar arquivos heterogêneos em contexto pesquisável sem perder a origem de cada resposta.',
    solution: 'Uma pipeline recebe documentos, faz parsing e chunking, gera embeddings e persiste vetores para busca semântica. O chat recupera contexto relevante e apresenta as fontes utilizadas.',
    highlights: ['Upload e parsing de documentos', 'Chunking e embeddings', 'Busca vetorial com pgvector', 'Chat RAG com fontes', 'Dashboard React'],
    technicalDecisions: ['PostgreSQL e pgvector mantêm dados e vetores no mesmo ambiente', 'MinIO armazena os arquivos brutos', 'Isolamento por tenant delimita documentos e consultas', 'Provedores OpenAI e Ollama permitem operação cloud ou local-first'],
    outcome: 'A base funcional integra ingestão, recuperação semântica e chat com fontes, com evolução ativa da qualidade de retrieval e da operação multi-tenant.',
  },
  {
    slug: 'job-e-comiss-es',
    title: 'Job e Comissões',
    subtitle: 'Sistema comercial para agenda, atendimento e comissões de uma barbearia.',
    repositoryUrl: 'https://github.com/leorecoa/Job-e-Comiss-es',
    status: 'MVP funcional',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'RLS'],
    problem: 'Uma operação de barbearia precisa conciliar booking público, agenda por profissional e dados financeiros sem permitir conflitos ou acesso indevido.',
    solution: 'O produto combina agendamento público com uma área interna para barbeiros, serviços, agenda diária, status de atendimento e conexão com comissões.',
    highlights: ['Booking público', 'Agenda diária por barbeiro', 'Cadastro de serviços e profissionais', 'Status de agendamento', 'Integração com financeiro e comissões'],
    technicalDecisions: ['Supabase concentra autenticação e banco PostgreSQL', 'Políticas RLS protegem dados por perfil de acesso', 'Validação de horários evita reservas conflitantes', 'Status explícitos representam o ciclo do atendimento'],
    outcome: 'O MVP cobre o fluxo comercial principal, do agendamento do cliente ao acompanhamento interno e aos dados usados no cálculo de comissões.',
  },
  {
    slug: 'mansao-maromba',
    title: 'Mansão Maromba',
    subtitle: 'E-commerce com catálogo, carrinho, checkout autenticado e histórico de pedidos.',
    repositoryUrl: 'https://github.com/leorecoa/Projeto-Site-Mansao-Maromba',
    status: 'Projeto funcional',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Zustand', 'React Router', 'TanStack Query'],
    problem: 'Um e-commerce precisa manter navegação fluida enquanto protege checkout, estoque e dados de pedidos associados ao usuário autenticado.',
    solution: 'A aplicação organiza catálogo, carrinho e autenticação Google, conduz o checkout protegido e disponibiliza histórico de pedidos para o cliente.',
    highlights: ['Catálogo de produtos', 'Carrinho', 'Checkout autenticado', 'Login Google', 'Histórico de pedidos', 'Controle de estoque'],
    technicalDecisions: ['Zustand gerencia o estado local do carrinho', 'TanStack Query coordena dados remotos e cache', 'Uma função SQL cria o pedido de forma centralizada', 'RLS protege pedidos, produtos e reviews'],
    outcome: 'O projeto implementa o fluxo essencial de compra e conecta estado de interface, autenticação e regras de persistência no Supabase.',
  },
  {
    slug: 'clinic-system',
    title: 'Clinic System',
    subtitle: 'Base de API para clínica com FastAPI, PostgreSQL e ambiente Docker reproduzível.',
    repositoryUrl: 'https://github.com/leorecoa/clinic-system',
    status: 'Base backend em evolução',
    stack: ['FastAPI', 'PostgreSQL', 'Docker Compose', 'PgAdmin'],
    problem: 'O estudo de um backend clínico precisa de uma base reproduzível para API e persistência antes da expansão das regras do domínio.',
    solution: 'O projeto estrutura a API FastAPI e um ambiente Docker Compose com PostgreSQL e PgAdmin para desenvolvimento e verificação da integração.',
    highlights: ['API backend', 'Ambiente Docker Compose', 'PostgreSQL', 'Teste de conexão com banco'],
    technicalDecisions: ['Containers padronizam a execução local', 'PostgreSQL fornece a camada relacional', 'PgAdmin facilita inspeção durante o desenvolvimento', 'Teste de conexão valida a infraestrutura inicial'],
    outcome: 'A entrega atual é uma fundação backend verificável para evoluir entidades, endpoints e regras de um sistema clínico.',
  },
];
