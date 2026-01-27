
import { Project, ProcessStep, TechItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Canvas Pro",
    description: "Editor visual de prompts e fluxos generativos utilizando React e WebGL.",
    image: "https://picsum.photos/seed/ai-canvas/800/600",
    tags: ["React", "AI", "Canvas"],
    link: "https://github.com/leorecoa"
  },
  {
    id: 2,
    title: "Neural Dashboard",
    description: "Visualização de dados complexos com integração de modelos LLM locais.",
    image: "https://picsum.photos/seed/neural/800/600",
    tags: ["TypeScript", "Next.js", "D3.js"],
    link: "https://github.com/leorecoa"
  },
  {
    id: 3,
    title: "VoiceFlow Engine",
    description: "Sistema de automação residencial controlado por voz processada por IA.",
    image: "https://picsum.photos/seed/voice/800/600",
    tags: ["Python", "Node.js", "AI"],
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
  { name: "Gemini API", icon: "BrainCircuit", color: "#8E75FF" },
  { name: "Git", icon: "Github", color: "#F05032" },
  { name: "Figma", icon: "Figma", color: "#A259FF" }
];
