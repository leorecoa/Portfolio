
import { Project, ProcessStep, TechItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project Nova: AI Logic",
    description: "Um estudo de caso sobre a integração de LLMs para automação de fluxos de design complexos, reduzindo o tempo de prototipação em 60%.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "AI Engine", "Case Study"],
    link: "https://github.com/leorecoa"
  },
  {
    id: 2,
    title: "Flux UI Framework",
    description: "Desenvolvimento de um sistema de design generativo que adapta interfaces em tempo real baseando-se no comportamento do usuário.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    tags: ["TypeScript", "Next.js", "Neural UI"],
    link: "https://github.com/leorecoa"
  },
  {
    id: 3,
    title: "Quantum Dashboard",
    description: "Visualização de dados massivos processados por IA para análise preditiva em mercados de tecnologia emergente.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    tags: ["D3.js", "AI Analysis", "Web3"],
    link: "https://github.com/leorecoa"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Ideação",
    description: "Brainstorming profundo onde a inteligência artificial expande os limites do que é possível criar.",
    icon: "BrainCircuit",
    color: "from-blue-500 to-cyan-400",
    tags: ["ChatGPT", "Claude", "Mindset"]
  },
  {
    title: "Prototipação",
    description: "Design meticuloso no Figma, focado em UX intuitiva e grids matematicamente perfeitos.",
    icon: "Figma",
    color: "from-purple-500 to-pink-500",
    tags: ["Figma", "UI/UX", "Auto Layout"]
  },
  {
    title: "Desenvolvimento",
    description: "Transformando pixels em código performático e semântico, assistido pelos melhores copilotos.",
    icon: "Code2",
    color: "from-cyan-400 to-emerald-400",
    tags: ["React", "Tailwind", "Copilot"]
  },
  {
    title: "Refinamento",
    description: "Otimização de performance e motion design para garantir uma experiência inesquecível.",
    icon: "Sparkles",
    color: "from-amber-400 to-orange-500",
    tags: ["Framer", "Lighthouse", "Motion"]
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React", icon: "Code2", color: "#61DAFB" },
  { name: "TypeScript", icon: "Code2", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "Code2", color: "#38B2AC" },
  { name: "Next.js", icon: "Rocket", color: "#FFFFFF" },
  { name: "Node.js", icon: "Code2", color: "#339933" },
  { name: "Framer Motion", icon: "Sparkles", color: "#FF0066" },
  { name: "Gemini AI", icon: "BrainCircuit", color: "#8E75FF" },
  { name: "Git", icon: "Github", color: "#F05032" },
  { name: "Figma", icon: "Figma", color: "#A259FF" },
  { name: "Claude API", icon: "Zap", color: "#D97706" },
  { name: "Python", icon: "Terminal", color: "#3776AB" },
  { name: "PostgreSQL", icon: "Database", color: "#336791" }
];
