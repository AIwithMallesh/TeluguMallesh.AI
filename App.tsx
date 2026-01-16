import React, { useState } from 'react';
import { USER_INFO, SKILL_CATEGORIES, PROJECTS, EDUCATION } from './constants';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import MermaidDiagram from './components/MermaidDiagram';
import { Project } from './types';
import { Github, Linkedin, Mail, Cpu, BookOpen, Download, MapPin, ExternalLink, Box, Layers } from 'lucide-react';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-textMain font-sans selection:bg-primary/30 selection:text-textMain">

      {/* Background Ambience (Hidden in Print) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden no-print">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      {/* Navigation (Hidden in Print) */}
      <nav className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-md border-b border-borderLight shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-xl font-bold tracking-tighter text-textMain">
            TeluguMallesh<span className="text-primary">.AI</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-textMuted">
            <button onClick={() => handleScrollTo('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => handleScrollTo('skills')} className="hover:text-primary transition-colors">Skills</button>
            <button onClick={() => handleScrollTo('about')} className="hover:text-primary transition-colors">About</button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="p-2 text-textMuted hover:text-primary transition-colors"
              title="Download Resume / Print"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 md:pt-32 pb-12 print:pt-0 print:pb-0">

        {/* === WEB VIEW HERO (Hidden in Print) === */}
        <section className="max-w-7xl mx-auto px-6 mb-24 print:hidden">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            {/* Left Column: Image */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end relative order-1 md:order-1">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src={USER_INFO.image}
                  alt="Mallesh"
                  className="relative w-full h-full object-cover rounded-full border-8 border-surface shadow-2xl"
                />

                <div className="flex justify-center gap-6 mt-8 md:hidden">
                  <a href={`mailto:${USER_INFO.email}`} className="text-textMuted hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
                  <a href={USER_INFO.social.github} className="text-textMuted hover:text-textMain transition-colors"><Github className="w-6 h-6" /></a>
                  <a href={USER_INFO.social.linkedin} className="text-textMuted hover:text-secondary transition-colors"><Linkedin className="w-6 h-6" /></a>
                </div>
              </div>
            </div>

            {/* Right Column: About & Info */}
            <div className="w-full md:w-7/12 text-center md:text-left order-2 md:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-borderLight shadow-sm mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-mono text-primary font-semibold tracking-wide uppercase">AI Engineer</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-textMain tracking-tight leading-tight">
                Hello, I'm <span className="text-primary">{USER_INFO.name}</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-textMuted">
                {USER_INFO.title}
              </h2>

              <p className="text-lg text-textMain/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
                {USER_INFO.about}
              </p>

              {/* Desktop Social & Download */}
              <div className="hidden md:flex items-center gap-6 pt-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 bg-textMain text-white font-bold rounded-lg hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                <div className="h-8 w-px bg-borderLight"></div>
                <div className="flex gap-4">
                  <a href={`mailto:${USER_INFO.email}`} className="text-textMuted hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                  <a href={USER_INFO.social.github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-textMain transition-colors"><Github className="w-5 h-5" /></a>
                  <a href={USER_INFO.social.linkedin} target="_blank" rel="noreferrer" className="text-textMuted hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>

              {/* Mobile Download Button */}
              <div className="md:hidden pt-4">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-textMain text-white font-bold rounded-lg shadow-lg active:scale-95 transition-transform"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* === PRINT VIEW HEADER & SUMMARY (Visible ONLY in Print) === */}
        <div className="hidden print:block p-0 font-sans text-black max-w-[210mm] mx-auto">
          {/* Print Header - Clean & Centered Option for Professional Look */}
          <header className="border-b border-gray-300 pb-6 mb-8 text-center">
            <h1 className="text-4xl font-bold text-black uppercase tracking-tight mb-2">{USER_INFO.fullName}</h1>
            <h2 className="text-lg text-black font-medium tracking-widest uppercase mb-4">{USER_INFO.title}</h2>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-800">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {USER_INFO.location}
              </span>
              <a href={`mailto:${USER_INFO.email}`} className="flex items-center gap-1.5 hover:text-black">
                <Mail className="w-3.5 h-3.5" /> {USER_INFO.email}
              </a>
              <a href={USER_INFO.social.github} className="flex items-center gap-1.5 hover:text-black">
                <Github className="w-3.5 h-3.5" /> github.com/AIwithMallesh
              </a>
              <a href={USER_INFO.social.linkedin} className="flex items-center gap-1.5 hover:text-black">
                <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/telugu-mallesh
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3 border-b border-gray-300 pb-1">Professional Summary</h3>
            <p className="text-sm leading-relaxed text-gray-900 text-justify">
              {USER_INFO.about}
            </p>
          </section>

          {/* Skills - Clean Grid without Borders */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4 border-b border-gray-300 pb-1">Technical Skills</h3>
            <div className="grid grid-cols-3 gap-y-4 gap-x-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="break-inside-avoid">
                  <span className="font-bold text-sm text-black block mb-1">{cat.category}</span>
                  <p className="text-sm text-gray-800 leading-snug">
                    {cat.skills.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4 border-b border-gray-300 pb-1">Education</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="break-inside-avoid">
                  <h4 className="text-sm font-bold text-black">{edu.degree}</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === PRINT VIEW PROJECTS === */}
          <section className="p-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-6 border-b border-gray-300 pb-1">Key Projects</h3>
            <div className="space-y-8">
              {PROJECTS.map((project) => (
                <div key={project.id} className="break-inside-avoid mb-8" style={{ pageBreakInside: 'avoid' }}>
                  <div className="mb-2">
                    <h4 className="text-base font-bold text-black inline-block mr-2">{project.title}</h4>
                    <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
                      — {project.role}
                    </span>
                  </div>

                  <p className="text-sm text-gray-900 mb-2 leading-relaxed text-justify">
                    {project.overview}
                  </p>

                  <div className="mb-3 text-sm">
                    <span className="font-bold text-black mr-2">Stack:</span>
                    <span className="text-gray-800">{project.techStack.join(", ")}</span>
                  </div>

                  <div className="flex gap-6 mb-4 text-xs text-gray-600">
                    {project.links.docker && (
                      <a href={project.links.docker} className="flex items-center gap-1 hover:text-black hover:underline">
                        <Box className="w-3 h-3" /> Docker Hub
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} className="flex items-center gap-1 hover:text-black hover:underline">
                        <Github className="w-3 h-3" /> Source Code
                      </a>
                    )}
                  </div>

                  {/* Mermaid Diagram - Clean, centered, no border */}
                  <div className="mt-2 break-inside-avoid flex flex-col items-center">
                    <div className="w-full text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center mb-2">System Architecture</div>
                    <div className="w-full opacity-90 grayscale contrast-125 scale-95 origin-top">
                      <MermaidDiagram chart={project.mermaidChart} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* === WEB VIEW PROJECTS (Hidden in Print) === */}
        <section id="projects" className="py-24 px-6 print:hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-textMain mb-2">Featured Projects</h2>
                <p className="text-textMuted">Showcasing autonomous systems and RAG architectures.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>

        {/* === WEB VIEW SKILLS (Hidden in Print) === */}
        <section id="skills" className="py-24 px-6 bg-white border-y border-borderLight print:hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-textMain mb-12 text-center">Technical Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-borderLight bg-surfaceHighlight/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-lg text-textMain">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 rounded-md bg-white text-textMain border border-borderLight shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === WEB VIEW EDUCATION === */}
        <section id="about" className="py-24 px-6 print:hidden">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-textMain">Education</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col p-6 bg-white rounded-xl border border-borderLight shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-textMain mb-1">{edu.degree}</h3>
                  <p className="text-textMuted text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-borderLight bg-white text-center print:hidden">
          <div className="flex justify-center items-center gap-2 mb-4 text-textMain font-mono text-xl font-bold">
            TeluguMallesh<span className="text-primary">.AI</span>
          </div>
          <p className="text-textMuted text-sm">
            &copy; {new Date().getFullYear()} Telugu Mallesh.
          </p>
        </footer>

        {/* Floating Download Button (Mobile only) */}
        <button
          onClick={handleDownload}
          className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-textMain text-white rounded-full shadow-2xl shadow-black/30 active:scale-95 transition-transform print:hidden"
        >
          <Download className="w-6 h-6" />
        </button>

      </main>

      {/* Project Modal (Web Interaction) */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default App;