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
    subtitle: 'RAG para consultar documentos privados com busca semantica e respostas acompanhadas de fontes.',
    repositoryUrl: 'https://github.com/leorecoa/RagResover',
    status: 'Em desenvolvimento',
    stack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'MinIO', 'Docker', 'OpenAI', 'Ollama'],
    problem: 'Consultar acervos privados exige transformar arquivos heterogeneos em contexto pesquisavel sem perder a origem de cada resposta.',
    solution: 'Uma pipeline recebe documentos, faz parsing e chunking, gera embeddings e persiste vetores para busca semantica. O chat recupera contexto relevante e apresenta as fontes utilizadas.',
    highlights: ['Upload e parsing de documentos', 'Chunking e embeddings', 'Busca vetorial com pgvector', 'Chat RAG com fontes', 'Dashboard React'],
    technicalDecisions: ['PostgreSQL e pgvector mantem dados e vetores no mesmo ambiente', 'MinIO armazena os arquivos brutos', 'Isolamento por tenant delimita documentos e consultas', 'Provedores OpenAI e Ollama permitem operacao cloud ou local-first'],
    outcome: 'A base funcional integra ingestao, recuperacao semantica e chat com fontes, com evolucao ativa da qualidade de retrieval e da operacao multi-tenant.',
  },
  {
    slug: 'job-e-comiss-es',
    title: 'Job e Comissoes',
    subtitle: 'Sistema comercial para agenda, atendimento e comissoes de uma barbearia.',
    repositoryUrl: 'https://github.com/leorecoa/Job-e-Comiss-es',
    status: 'MVP funcional',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'RLS'],
    problem: 'Uma operacao de barbearia precisa conciliar booking publico, agenda por profissional e dados financeiros sem permitir conflitos ou acesso indevido.',
    solution: 'O produto combina agendamento publico com uma area interna para barbeiros, servicos, agenda diaria, status de atendimento e conexao com comissoes.',
    highlights: ['Booking publico', 'Agenda diaria por barbeiro', 'Cadastro de servicos e profissionais', 'Status de agendamento', 'Integracao com financeiro e comissoes'],
    technicalDecisions: ['Supabase concentra autenticacao e banco PostgreSQL', 'Politicas RLS protegem dados por perfil de acesso', 'Validacao de horarios evita reservas conflitantes', 'Status explicitos representam o ciclo do atendimento'],
    outcome: 'O MVP cobre o fluxo comercial principal, do agendamento do cliente ao acompanhamento interno e aos dados usados no calculo de comissoes.',
  },
  {
    slug: 'mansao-maromba',
    title: 'Mansao Maromba',
    subtitle: 'E-commerce com catalogo, carrinho, checkout autenticado e historico de pedidos.',
    repositoryUrl: 'https://github.com/leorecoa/Projeto-Site-Mansao-Maromba',
    status: 'Projeto funcional',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Zustand', 'React Router', 'TanStack Query'],
    problem: 'Um e-commerce precisa manter navegacao fluida enquanto protege checkout, estoque e dados de pedidos associados ao usuario autenticado.',
    solution: 'A aplicacao organiza catalogo, carrinho e autenticacao Google, conduz o checkout protegido e disponibiliza historico de pedidos para o cliente.',
    highlights: ['Catalogo de produtos', 'Carrinho', 'Checkout autenticado', 'Login Google', 'Historico de pedidos', 'Controle de estoque'],
    technicalDecisions: ['Zustand gerencia o estado local do carrinho', 'TanStack Query coordena dados remotos e cache', 'Uma funcao SQL cria o pedido de forma centralizada', 'RLS protege pedidos, produtos e reviews'],
    outcome: 'O projeto implementa o fluxo essencial de compra e conecta estado de interface, autenticacao e regras de persistencia no Supabase.',
  },
  {
    slug: 'clinic-system',
    title: 'Clinic System',
    subtitle: 'Base de API para clinica com FastAPI, PostgreSQL e ambiente Docker reproduzivel.',
    repositoryUrl: 'https://github.com/leorecoa/clinic-system',
    status: 'Base backend em evolucao',
    stack: ['FastAPI', 'PostgreSQL', 'Docker Compose', 'PgAdmin'],
    problem: 'O estudo de um backend clinico precisa de uma base reproduzivel para API e persistencia antes da expansao das regras do dominio.',
    solution: 'O projeto estrutura a API FastAPI e um ambiente Docker Compose com PostgreSQL e PgAdmin para desenvolvimento e verificacao da integracao.',
    highlights: ['API backend', 'Ambiente Docker Compose', 'PostgreSQL', 'Teste de conexao com banco'],
    technicalDecisions: ['Containers padronizam a execucao local', 'PostgreSQL fornece a camada relacional', 'PgAdmin facilita inspecao durante o desenvolvimento', 'Teste de conexao valida a infraestrutura inicial'],
    outcome: 'A entrega atual e uma fundacao backend verificavel para evoluir entidades, endpoints e regras de um sistema clinico.',
  },
];
