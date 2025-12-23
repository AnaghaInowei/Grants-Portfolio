
import React from 'react';
import { MousePointer2, Sparkles, ChevronDown } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="px-6">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center relative max-w-5xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-8">
            <Sparkles size={14} /> Available for projects
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            CRAFTING <span className="gradient-text">DIMENSIONS</span> <br />
            BEYOND IMAGINATION
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            I am a 3D designer and visual storyteller building immersive digital worlds 
            through high-fidelity modeling, lighting, and animation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20">
              View Work <ChevronDown size={20} />
            </button>
            <button className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all">
              The Process
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
      </section>

      {/* Grid Section */}
      <section id="work" className="max-w-7xl mx-auto py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">SELECTED WORKS</h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full" />
          </div>
          <p className="text-slate-400 max-w-sm">
            A curated collection of environments, characters, and motion design experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto py-24 border-t border-slate-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Experience', value: '5+ Years' },
            { label: 'Projects', value: '150+' },
            { label: 'Awards', value: '12' },
            { label: 'Clients', value: '45' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
