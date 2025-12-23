
import React from 'react';
import { SKILLS, SOFTWARE } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-indigo-500/20 rounded-2xl blur-2xl group-hover:bg-indigo-500/30 transition-all duration-700" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800">
            <img 
              src="https://picsum.photos/id/64/800/1000" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block">
            <p className="text-indigo-400 font-bold text-lg">Aura Designs</p>
            <p className="text-slate-400 text-xs">Based in Tokyo, Japan</p>
          </div>
        </div>

        <div>
          <h2 className="text-indigo-500 font-bold tracking-widest uppercase mb-4">The Story</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">I BREATHE LIFE INTO DIGITAL POLYGONS</h1>
          <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
            <p>
              Starting as a traditional sculptor, I transitioned into the digital realm to push the boundaries of what's possible. My work focuses on the intersection of surrealism and high-fidelity realism.
            </p>
            <p>
              Whether it's designing a futuristic metropolis for a feature film or creating bespoke avatars for the metaverse, I approach every project with a meticulous eye for detail and a passion for atmosphere.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-indigo-500" /> Expertise
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {SKILLS.map(skill => (
                  <li key={skill} className="text-slate-400 hover:text-indigo-400 transition-colors cursor-default">• {skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-purple-500" /> Arsenal
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {SOFTWARE.map(sw => (
                  <li key={sw} className="text-slate-400 hover:text-purple-400 transition-colors cursor-default">• {sw}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-40 text-center glass p-12 md:p-24 rounded-[40px] border border-white/5">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to bring your vision <br /> to the next dimension?</h2>
        <button className="px-12 py-5 bg-white text-black text-xl font-black rounded-full hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
          Let's Start a Project
        </button>
      </section>
    </div>
  );
};

export default About;
