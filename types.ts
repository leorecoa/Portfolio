
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
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
