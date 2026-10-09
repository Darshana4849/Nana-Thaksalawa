import React from 'react';
import { NavTab } from '../components/Navbar';
import { PROJECT_METADATA, PROJECT_STATS, TECHNOLOGIES_USED } from '../data/projectData';
import { RESEARCH_COMPONENTS, SINHALA_22_CLASSES } from '../data/componentsData';
import { RESEARCH_TEAM } from '../data/teamData';
import { IMAGES_CONFIG } from '../data/imagesConfig';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
  Gamepad2,
  FileCheck2,
  Sliders,
  CheckCircle,
  GraduationCap,
  Calendar,
  FolderGit2,
  Presentation,
  Users,
  Compass,
  Image as ImageIcon,
} from 'lucide-react';

interface HomePageProps {
  onSelectTab: (tab: NavTab, targetComponentId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTab }) => {
  const [heroImageError, setHeroImageError] = React.useState(false);

  return (
    <div className="space-y-24 py-4 sm:py-8">
      {/* HERO SECTION — ACADEMIC & RESEARCH SHOWCASE */}
      <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-subtle-grid">
        {/* Modern ambient atmospheric glow */}
        <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-4 left-10 -z-10 w-96 h-96 bg-teal-50/60 dark:bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Headline and Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Academic Metadata Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wider">{PROJECT_METADATA.institution}</span>
                <span className="text-slate-300 dark:text-slate-700">/</span>
                <span className="text-slate-700 dark:text-slate-300">Faculty of Computing</span>
                <span className="text-slate-300 dark:text-slate-700">/</span>
                <span>Final-Year Research 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Empowering Sinhala Handwriting Learning Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-600 dark:from-blue-400 dark:via-indigo-300 dark:to-teal-300">
                  Intelligent Technology
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Letter Helper is an interactive Sinhala handwriting learning support research project designed
                to assist young primary school learners with character recognition, guided stroke tracing,
                gamified handwriting practice, and longitudinal sentence-level progress tracking.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onSelectTab('domain')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectTab('documents')}
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 shadow-2xs transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <BookOpen className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>Research Documents</span>
                </button>
              </div>

              {/* Research Scope Trust Markers */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium">22 Sinhala Character Classes</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium">Compact Residual CNN (96.75% Acc)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium">3-Attempt Adaptive Scaffolding</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl p-4 sm:p-5 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-blue-400/60 dark:hover:border-blue-700/60 group">
                {/* macOS / Research Console Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800 mb-3.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-3 h-3 rounded-full bg-red-400/90 inline-block shrink-0" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block shrink-0" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block shrink-0" />
                    <span className="ml-2 text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                      {IMAGES_CONFIG.homeHero.title || 'Letter Helper · Interactive Learning Suite'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/60">
                      Live Preview
                    </span>
                  </div>
                </div>

                {/* Hero Image / High-Tech Fallback Vector Container */}
                <div className="relative rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 group min-h-[280px] flex items-center justify-center">
                  {!heroImageError ? (
                    <img
                      src={IMAGES_CONFIG.homeHero.src}
                      alt={IMAGES_CONFIG.homeHero.alt}
                      onError={() => setHeroImageError(true)}
                      className="w-full h-auto max-h-[380px] object-cover sm:object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="eager"
                    />
                  ) : (
                    /* Rich Authentic Fallback Vector Preview */
                    <div className="p-6 w-full flex flex-col items-center justify-center text-center space-y-4">
                      <div className="relative w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 border-2 border-dashed border-blue-200 dark:border-blue-800 flex items-center justify-center shadow-inner">
                        <span className="text-6xl font-sinhala font-bold text-blue-600 dark:text-blue-400 select-none">
                          අ
                        </span>
                        {/* Simulated keypoint dots */}
                        <span className="absolute top-6 left-8 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950/60 animate-ping" />
                        <span className="absolute top-6 left-8 w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="absolute bottom-8 right-10 w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="absolute top-1/2 right-7 w-2.5 h-2.5 rounded-full bg-blue-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                          Sinhala Handwriting Learning System
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                          Character recognition, guided stroke trajectory & adaptive practice
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub-card: Dynamic Subtitle and Quick Navigation */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 min-w-0 pr-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate font-medium">
                      {IMAGES_CONFIG.homeHero.subtitle || 'Sinhala Handwriting Recognition & Guided Tracing'}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectTab('domain')}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-xs flex items-center gap-1 shrink-0 transition-colors"
                  >
                    <span>Domain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.2 — RESEARCH PROJECT AT A GLANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-6">
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Academic Scope & Overview
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Research Project at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
                <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mt-1">{stat.label}</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 leading-normal">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7.3 — ABOUT LETTER HELPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-2xl text-white p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Academic Motivation & Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Addressing the Unique Structural Complexities of Sinhala Handwriting
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Handwriting instruction in early primary grades is critical for motor memory,
                orthographic awareness, and cognitive development. In the Sinhala script,
                characters feature intricate loops, curved arcs, and delicate diacritics
                requiring strict stroke sequence adherence.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Complex Glyph Geometry
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unlike alphabets dominated by linear strokes, Sinhala characters (e.g. අ, ක, ම)
                  demand fluid curvilinear paths, making stroke reversal and spatial distortion
                  common hurdles for young children.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  Tactile Real-Time Scaffolding
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Traditional paper copybooks cannot inform a learner if they started from the wrong
                  anchor point. Letter Helper provides instantaneous boundary and keypoint
                  validation as the stylus moves.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Adaptive Assistance Engine
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rather than static tracing lines, the system dynamically calculates a 3-attempt
                  moving average, fading visual support as writing competence grows to encourage
                  freehand mastery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Curriculum Sentence Continuity
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Progressing from isolated letters to full sentences with Spring Boot-backed
                  content management and longitudinal progress monitoring for teachers and
                  parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.4 — FOUR RESEARCH COMPONENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Collaborative Research Architecture
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Four Integrated Research Components
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
            Letter Helper is structured around four distinct research investigations, combining
            deep learning computer vision, interactive vector geometry, educational UX, and
            full-stack progress tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {RESEARCH_COMPONENTS.map((comp) => {
            const icons = {
              'component-1': Cpu,
              'component-2': Sliders,
              'component-3': Gamepad2,
              'component-4': Layers,
            };
            const IconComponent = icons[comp.id as keyof typeof icons] || Layers;
            const leadResearcher = RESEARCH_TEAM.find((r) => r.componentNumber === comp.number);

            return (
              <div
                key={comp.id}
                className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-700/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
                        0{comp.number}
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block">
                          Research Component {comp.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug">
                          {comp.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Lead Researcher Credit */}
                  {leadResearcher && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Lead:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {leadResearcher.fullName}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        [{leadResearcher.studentId}]
                      </span>
                    </div>
                  )}

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                    {comp.purpose}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-left">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {comp.keyHighlights.slice(0, 3).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0 mt-1.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="hidden sm:inline">Stack: </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{comp.technologies.slice(0, 2).join(' · ')}</span>
                  </div>
                  <button
                    onClick={() => onSelectTab('domain', comp.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 px-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50"
                  >
                    <span>View Research</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 7.5 — HOW LETTER HELPER SUPPORTS LEARNING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10">
          <div className="text-left mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pedagogical Workflow</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              How Letter Helper Supports Learning
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              *Note: This sequence illustrates the conceptual learning journey designed for
              students, rather than a claim that all four components operate in a single rigid
              technical pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 relative">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Recognise Sinhala Letters</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Learners explore letter phonology and visual shapes, validated by our 22-class
                compact residual CNN model running at 80×80 resolution.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 relative">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Practise Letter Formation</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Structured tactile tracing with ordered keypoints and boundary validation enforcing
                correct stroke sequence and spatial accuracy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 relative">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Engage with Learning Activities</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Developmentally appropriate gamified challenges provide positive reinforcement,
                fostering intrinsic motivation and sustained practice.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 relative">
              <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Practise Sentences & Review Progress</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Applying letter skills to full Sinhala sentences, supported by Spring Boot CRUD
                services and longitudinal student progress dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.6 — TECHNOLOGIES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Technical Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Project Technologies
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
            Architected using modern, maintainable frameworks across deep learning, frontend
            rendering, and enterprise backend services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECHNOLOGIES_USED.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 mt-0.5">
                <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h3>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    {tech.category}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7.7 — RESEARCH HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Core Contributions
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Research Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Intelligent Sinhala Character Recognition</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Trained on 22 character classes with compact residual CNN stages [2, 2, 2], recording
              project-reported test accuracy of 96.75% and test macro F1-score of 96.76%.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Guided Handwriting Practice</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Novel ordered keypoints enforcing circular stroke order, directionality, and
              geometric boundary tolerance checking tailored to Sinhala orthography.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Adaptive Writing Support</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Moving average performance evaluation dynamically calibrating High (&lt;60),
              Medium (60–79), and Low (≥80) visual scaffolding levels.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Child-Friendly Engagement</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Developmentally appropriate gamification without hyper-stimulating distractions,
              reinforcing consistent daily writing practice.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Sentence-Based Learning</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Full curriculum sentence management with Spring Boot REST API, relational schema,
              and illustrative image support bridging letters to sentences.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Learning Progress Tracking</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Structured recording of writing attempts and accuracy trends to help educators and
              parents pinpoint letters requiring remedial practice.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7.8 — EXPLORE THE PROJECT PORTAL CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Explore the Research Project
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Browse through our academic documentation, assessment milestones, presentation slide
              decks, and research team details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onSelectTab('domain')}
              className="p-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <Compass className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white">Research Domain</h3>
                <p className="text-xs text-slate-400 mt-1">Literature survey, gap, and architecture</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-blue-400">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>

            <button
              onClick={() => onSelectTab('milestones')}
              className="p-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <Calendar className="w-5 h-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white">Milestones</h3>
                <p className="text-xs text-slate-400 mt-1">SLIIT assessment stages and defense dates</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-emerald-400">
                <span>View Timeline</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>

            <button
              onClick={() => onSelectTab('documents')}
              className="p-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <BookOpen className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white">Documents</h3>
                <p className="text-xs text-slate-400 mt-1">Proposals, reports, and individual theses</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-amber-400">
                <span>Browse Archive</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>

            <button
              onClick={() => onSelectTab('about')}
              className="p-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <Users className="w-5 h-5 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white">Research Team</h3>
                <p className="text-xs text-slate-400 mt-1">Researchers, supervisors, and SLIIT</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-purple-400">
                <span>Meet Team</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
