
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
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

export interface TechItem {
  name: string;
  icon: string;
}
