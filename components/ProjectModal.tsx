import React from 'react';
import { Project } from '../types';
import MermaidDiagram from './MermaidDiagram';
import { X, ExternalLink, Box } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-surface rounded-2xl border border-borderLight shadow-2xl animate-fade-in scrollbar-hide">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-surface/95 border-b border-borderLight backdrop-blur-md">
          <div>
            <h2 className="text-2xl font-bold text-textMain">{project.title}</h2>
            <p className="text-primary text-sm font-mono mt-1">{project.role}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surfaceHighlight transition-colors text-textMuted hover:text-textMain"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">

          {/* Overview */}
          <section>
            <h3 className="text-lg font-semibold text-textMain mb-3">Overview</h3>
            <p className="text-textMuted leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Tech & Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="text-sm font-semibold text-textMain uppercase tracking-wider mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-textMain uppercase tracking-wider mb-3">Associated Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.associatedSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-surfaceHighlight text-textMain border border-borderLight rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Architecture Diagram */}
          <section>
            <h3 className="text-lg font-semibold text-textMain mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" /> Agent Architecture
            </h3>
            <div className="w-full">
              <MermaidDiagram chart={project.mermaidChart} />
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-borderLight">
            {project.links.docker && (
              <a
                href={project.links.docker}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0db7ed] hover:bg-[#0db7ed]/90 text-white font-bold rounded-lg transition-transform hover:-translate-y-1 shadow-md shadow-cyan-500/20"
              >
                <Box className="w-5 h-5" />
                View on Docker Hub
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-surfaceHighlight hover:bg-slate-200 text-textMain font-bold rounded-lg transition-transform hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5" />
                GitHub
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;