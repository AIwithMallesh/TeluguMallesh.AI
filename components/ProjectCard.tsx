import React from 'react';
import { Project } from '../types';
import { getIconForProject } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group relative flex flex-col glass-panel rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-surfaceHighlight rounded-lg border border-borderLight group-hover:border-primary/50 transition-colors">
          {getIconForProject(project.id)}
        </div>
        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
          {project.role}
        </span>
      </div>

      <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-textMuted text-sm mb-6 flex-grow line-clamp-3">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <span key={tech} className="text-xs text-textMain bg-surfaceHighlight px-2 py-1 rounded border border-borderLight">
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="text-xs text-textMuted py-1">+ {project.techStack.length - 3}</span>
        )}
      </div>

      <div className="flex items-center text-sm text-primary font-medium mt-auto group-hover:underline decoration-primary/50 underline-offset-4">
        View Architecture & Details
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default ProjectCard;