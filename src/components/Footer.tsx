import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PROJECT_METADATA } from '../data/projectData';
import { RESEARCH_COMPONENTS } from '../data/componentsData';
import { NavTab, NAV_ITEMS } from './Navbar';
import { ThemeToggle } from './ThemeToggle';
import { Mail, MapPin, GraduationCap, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/90 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Academic Overview (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" size="md" />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An intelligent Sinhala handwriting learning support system for primary school
              learners, integrating deep residual character recognition, adaptive guided tracing,
              gamified engagement, and curriculum sentence tracking.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Final-Year Undergraduate Research Project · {PROJECT_METADATA.institution}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Faculty of Computing · Malabe, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSelectTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors text-left font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Research Components */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Research Modules
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {RESEARCH_COMPONENTS.map((comp) => (
                <li key={comp.id}>
                  <button
                    onClick={() => {
                      onSelectTab('domain');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left line-clamp-1 font-medium"
                    title={comp.title}
                  >
                    C{comp.number}: {comp.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Institutional Attribution & Compliance */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Institutional Info
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Conducted under academic supervision at the Sri Lanka Institute of Information
              Technology (SLIIT) Faculty of Computing.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                Display Appearance:
              </span>
              <ThemeToggle variant="segmented" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© 2026 Letter Helper Research Project · SLIIT Faculty of Computing</p>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <span>Educational AI Research</span>
            <span>·</span>
            <span>Undergraduate Dissertation Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
