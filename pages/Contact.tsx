
import React from 'react';
import { Mail, Github, Instagram, Twitter, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20 animate-in fade-in slide-in-from-top-10 duration-700">
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">LET'S <br /><span className="gradient-text">COLLABORATE</span></h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          Currently taking on new projects and inquiries for the second half of 2024.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Socials</h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Instagram size={20} />, label: 'Instagram', handle: '@aura3d_design' },
                { icon: <Twitter size={20} />, label: 'Twitter/X', handle: '@aura_vfx' },
                { icon: <Github size={20} />, label: 'GitHub', handle: 'aura-digital' }
              ].map((social, i) => (
                <a key={i} href="#" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-indigo-400">{social.icon}</span>
                    <span className="font-bold">{social.label}</span>
                  </div>
                  <span className="text-slate-500 text-sm">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <Mail size={20} className="text-indigo-400" /> Direct Mail
            </h3>
            <p className="text-slate-400 text-sm mb-2">General inquiries & business</p>
            <a href="mailto:hello@aura3d.io" className="text-xl font-bold hover:text-indigo-400 transition-colors">hello@aura3d.io</a>
          </div>
        </div>

        <div className="lg:col-span-2 glass p-8 md:p-12 rounded-[40px] animate-in fade-in slide-in-from-right-10 duration-1000">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Subject</label>
              <select className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-colors appearance-none text-slate-400">
                <option>Select Project Type</option>
                <option>Environment Design</option>
                <option>Character Sculpting</option>
                <option>Motion Graphics</option>
                <option>Consultation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
              <textarea 
                rows={5} 
                placeholder="Tell me about your vision..."
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-indigo-600/20 group">
              Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
