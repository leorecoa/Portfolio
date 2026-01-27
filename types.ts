
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  // Optional GitHub metadata
  stars?: number;
  forks?: number;
}

export interface ProcessStep {
  title: string;
  icon: string;
  description: string;
  color: string;
  tags: string[];
}

// Fixed: Added color property to resolve type errors in lib/constants.tsx and TechStack components
export interface TechItem {
  name: string;
  icon: string;
  color: string;
}