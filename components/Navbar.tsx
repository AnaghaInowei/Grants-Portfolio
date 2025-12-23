
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Box } from 'lucide-react';
import { NAV_LINKS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-2xl' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-indigo-600 rounded-lg group-hover:bg-indigo-500 transition-colors">
            <Box size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tighter font-display">AURA<span className="text-indigo-500">3D</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-indigo-400 ${
                location.pathname === link.path ? 'text-indigo-500' : 'text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-indigo-100 transition-all transform hover:-translate-y-1"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold uppercase tracking-widest ${
                  location.pathname === link.path ? 'text-indigo-500' : 'text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
