
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-indigo-500/50">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-md border border-indigo-500/30">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            {project.tools.slice(0, 2).map(tool => (
              <span key={tool} className="text-[10px] text-slate-500">#{tool}</span>
            ))}
          </div>
          <button className="p-2 rounded-full bg-white text-black hover:bg-indigo-500 hover:text-white transition-colors">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
