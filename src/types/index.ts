export type ProjectCategory = 'mern' | 'frontend' | 'bubble' | 'webflow';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryBadge: string;
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  features?: string[];
  image: string;
  thumbnail?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  badge: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  location?: string;
  period?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'code' | 'server' | 'database' | 'sliders' | 'terminal' | 'badge-check';
  iconBg: string;
  iconColor: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: 'code' | 'monitor' | 'sliders' | 'layout';
  iconBg: string;
  iconColor: string;
}
