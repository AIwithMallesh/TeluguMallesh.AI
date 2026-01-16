export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  techStack: string[];
  associatedSkills: string[];
  mermaidChart: string;
  links: {
    docker?: string;
    github?: string; // Placeholder if user adds later
    demo?: string;
  };
  metrics?: string[];
  role: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution?: string; // Optional if not provided
  year?: string; // Optional if not provided
}

export interface Achievement {
  title: string;
  metric: string;
}