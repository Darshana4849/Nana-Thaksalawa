import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RESEARCH_OBJECTIVES,
  RESEARCH_GAPS,
  RESEARCH_PROBLEM_STATEMENT,
  RESEARCH_METHODOLOGY_PHASES,
  TECHNOLOGIES_USED,
} from '../data/projectData';
import {
  RESEARCH_COMPONENTS,
  SINHALA_22_CLASSES,
} from '../data/componentsData';
import { RESEARCH_TEAM } from '../data/teamData';
import { IMAGES_CONFIG } from '../data/imagesConfig';
import { LightboxModal } from '../components/LightboxModal';
import {
  Compass,
  Cpu,
  Maximize2,
  Calculator,
  Server,
  Database,
  Code2,
  Gamepad2,
  CheckCircle2,
} from 'lucide-react';

interface DomainPageProps {
  initialComponentId?: string;
}

export const DomainPage: React.FC<DomainPageProps> = ({ initialComponentId }) => {
  const [selectedComponentId, setSelectedComponentId] = useState<string>(
    initialComponentId || 'component-1'
  );

  // Interactive Adaptive Scaffolding Calculator state
  const [attempt1, setAttempt1] = useState<number>(55);
  const [attempt2, setAttempt2] = useState<number>(62);
  const [attempt3, setAttempt3] = useState<number>(78);

  // Selected character glyph preview in 22-class grid
  const [selectedGlyphIndex, setSelectedGlyphIndex] = useState<number>(0);

  // Lightbox modal state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    title: '',
    caption: '',
    type: 'architecture' as 'architecture' | 'cnn' | 'tracing' | 'sentence',
  });

  const selectedComponent =
    RESEARCH_COMPONENTS.find((c) => c.id === selectedComponentId) || RESEARCH_COMPONENTS[0];

  const rollingAverage = Math.round((attempt1 + attempt2 + attempt3) / 3);

  const getScaffoldLevel = (avg: number) => {
    if (avg < 60) {
      return {
        level: 'High Support',
        color: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800',
        description:
          'Full stroke outline visible, sequential directional numbered keypoints, and tightest boundary tolerance to prevent improper motor habits.',
      };
    } else if (avg < 80) {
      return {
        level: 'Medium Support',
        color: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800',
        description:
          'Faint background character template, primary intermediate anchor keypoints, and moderate deviation tolerance.',
      };
    } else {
      return {
        level: 'Low Support (Autonomous Practice)',
        color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800',
        description:
          'Starting anchor dot only. Child executes freehand handwriting canvas practice with post-stroke accuracy evaluation.',
      };
    }
  };

  const scaffoldResult = getScaffoldLevel(rollingAverage);

  const openLightbox = (
    title: string,
    caption: string,
    type: 'architecture' | 'cnn' | 'tracing' | 'sentence'
  ) => {
    setLightboxData({ title, caption, type });
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      {/* Page Header */}
      <div className="text-left max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>Academic Research Domain</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Research Domain & Technical Architecture
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Comprehensive academic documentation detailing the pedagogical context, literature review,
          research gap, formal problem statement, research objectives, and the four integrated
          investigations underpinning Letter Helper.
        </p>
      </div>

      {/* 8.1 INTRODUCTION */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Section 8.1</span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Introduction & Educational Context
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="space-y-4">
            <p>
              Handwriting is a foundational developmental milestone in early childhood education.
              It directly correlates with reading fluency, phonological decoding, cognitive
              retention, and fine motor coordination. In Sri Lankan primary schools, mastery of the
              Sinhala script represents one of the earliest and most cognitively demanding challenges
              for young learners.
            </p>
            <p>
              Unlike Latin scripts characterized by rectilinear strokes, the Sinhala script belongs
              to the Brahmic family of alphabets. It is renowned for its predominant circularity,
              subtle ligature modifications, and precise starting stroke conventions. A child who
              initiates a stroke from the wrong tangent or draws clockwise instead of counter-clockwise
              risks ingraining persistent motor-memory errors that impair subsequent writing fluency.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              While contemporary educational technologies provide robust handwriting recognition and
              guided practice for major global languages, Sinhala has historically suffered from a
              scarcity of specialized pedagogical tools. Existing mobile utilities are frequently
              confined to rudimentary video demonstrations or static touch traces that lack
              intelligent character recognition, tactile stroke validation, or performance-adaptive
              scaffolding.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
              <span className="font-semibold text-slate-900 dark:text-white">Purpose of Letter Helper:</span>
              <p className="text-slate-600 dark:text-slate-300">
                To bridge this educational gap by engineering an integrated digital learning support
                system that combines deep learning character recognition, real-time geometric
                stroke guidance, developmental gamification, and curriculum-level sentence
                management into a cohesive assistive platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8.2 LITERATURE SURVEY */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Section 8.2</span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Literature Survey
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Academic synthesis across eight foundational sub-domains. Structured with placeholder
            IEEE references pending final camera-ready dissertation publication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>Sinhala Handwritten Character Recognition</span>
              <span className="text-[10px] text-slate-400 font-mono">[1, 2]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Prior optical character recognition (OCR) literature for Indic and Brahmic scripts
              frequently highlights the challenge of high intra-class variance and low inter-class
              dissimilarity between glyphs (e.g., differentiating ක and ත, or බ and ඩ). Traditional
              approaches relying on hand-crafted structural features (zoning, chain codes) proved
              fragile against children's irregular handwriting.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>CNN-Based Image Classification in Education</span>
              <span className="text-[10px] text-slate-400 font-mono">[3, 4]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Convolutional Neural Networks (CNNs) have established state-of-the-art benchmarks in
              offline handwritten digit and character datasets (MNIST, EMNIST). However, massive
              architectures (e.g. ResNet-152) impose latency bottlenecks when deployed on client
              browsers or lightweight educational servers. Compact residual topologies with fewer
              stages offer an optimal trade-off between parameter size and feature discrimination.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>Intelligent Handwriting Learning Systems</span>
              <span className="text-[10px] text-slate-400 font-mono">[5, 6]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Pedagogical studies emphasize that intelligent handwriting systems must provide feedback
              not merely at the final rendering stage, but throughout the motor-generation process.
              Systems that fail to detect stroke sequence often validate visually plausible glyphs
              that were formed through incorrect and detrimental writing habits.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>Tracing & Guided Writing Methods</span>
              <span className="text-[10px] text-slate-400 font-mono">[7, 8]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Canvas-based vector tracking using Bezier interpolation and ordered checkpoints enables
              real-time kinematic validation. Research demonstrates that spatial boundary corridors
              with elastic tolerance help preserve children's intrinsic writing cadence while
              preventing gross deviations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>Adaptive Learning & Scaffolding (ZPD)</span>
              <span className="text-[10px] text-slate-400 font-mono">[9, 10]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Vygotskian scaffolding theory asserts that educational aids must fade systematically as
              competence develops. Static tracing interfaces risk fostering "scaffolding dependence,"
              where learners replicate guides passively without developing true mental schema of
              letter geometry.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>Gamification in Primary Education</span>
              <span className="text-[10px] text-slate-400 font-mono">[11, 12]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Extrinsic gamification (flashy leaderboards, intense countdown timers) often induces
              unwanted cognitive load and motor anxiety in young children. Recent literature supports
              "quiet gamification"—immediate positive reinforcement micro-interactions tied directly
              to stroke accuracy.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>Sentence-Based Learning & Reading Transition</span>
              <span className="text-[10px] text-slate-400 font-mono">[13, 14]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Literacy theory highlights the crucial transition from graphomotor character practice
              to orthographic sentence production. Coupling visual sentence cues with multi-word
              writing prompts fosters contextual reading comprehension simultaneously with manual
              writing skills.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
              <span>Educational Progress Monitoring</span>
              <span className="text-[10px] text-slate-400 font-mono">[15, 16]</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Longitudinal telemetry tracking allows educators to isolate specific graphemes
              exhibiting persistent error rates, transitioning interventions from generalized drills
              to targeted, personalized clinical remediation.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>*Detailed IEEE bibliographic entries will be populated upon thesis submission.</span>
          <span className="font-medium text-slate-700 dark:text-slate-300">[SLIIT Faculty of Computing Format]</span>
        </div>
      </section>

      {/* 8.3 & 8.4 RESEARCH GAP & RESEARCH PROBLEM */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Research Gap (7 cols) */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Section 8.3
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">Research Gap</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Key pedagogical and architectural deficiencies identified in current educational
              software.
            </p>
          </div>

          <div className="space-y-4">
            {RESEARCH_GAPS.map((gap, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/80 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  {gap.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-3.5">{gap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Problem Statement (5 cols) */}
        <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 dark:bg-slate-900/90 text-white shadow-xl flex flex-col justify-between space-y-6 border border-slate-800">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Section 8.4
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Research Problem Statement
              </h2>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm leading-relaxed text-slate-200 font-serif italic">
              "{RESEARCH_PROBLEM_STATEMENT}"
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Formulated in accordance with SLIIT undergraduate research standards to guide the
              systematic investigation across machine learning, tactile canvas interaction, and
              curriculum architecture.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Scope: Primary Sinhala Learners</span>
            <span className="text-blue-400 font-semibold">22 Core Glyph Classes</span>
          </div>
        </div>
      </section>

      {/* 8.5 RESEARCH OBJECTIVES */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Section 8.5</span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Research Objectives
          </h2>
        </div>

        {/* Overall Objective */}
        <div className="p-5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/90 dark:border-blue-900/60 space-y-2">
          <span className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
            Overall Research Objective
          </span>
          <p className="text-sm font-medium text-blue-950 dark:text-blue-200 leading-relaxed">
            {RESEARCH_OBJECTIVES.overall}
          </p>
        </div>

        {/* Specific Objectives Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Specific Research Objectives:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESEARCH_OBJECTIVES.specific.map((obj, idx) => (
              <div
                key={obj.id}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{obj.title}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-7">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.6 RESEARCH COMPONENTS — IN DEPTH */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Section 8.6
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Research Components — In Depth
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Select any component to inspect its verified architecture, experimental results, and
              methodological models.
            </p>
          </div>

          {/* Component Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {RESEARCH_COMPONENTS.map((comp) => {
              const isActive = selectedComponentId === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponentId(comp.id)}
                  className={`relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="relative z-10">C{comp.number}: {comp.shortTitle}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-domain-comp-tab"
                      className="absolute inset-0 bg-white dark:bg-slate-700 rounded-lg shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Component Card with Smooth Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedComponentId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 space-y-8"
          >
          {/* Header of Component */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 px-2.5 py-1 rounded">
                  Component {selectedComponent.number}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {selectedComponent.statusNote}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">{selectedComponent.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">{selectedComponent.purpose}</p>
            </div>

            <div className="text-left lg:text-right shrink-0">
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                Research Ownership
              </span>
              {(() => {
                const lead = RESEARCH_TEAM.find((r) => r.componentNumber === selectedComponent.number);
                return (
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">
                    {lead ? `${lead.fullName} [${lead.studentId}]` : selectedComponent.leadResearcherPlaceholder}
                  </span>
                );
              })()}
            </div>
          </div>

          {/* Component 1 Specific View: Residual CNN & 22 Classes Visualizer */}
          {selectedComponent.id === 'component-1' && (
            <div className="space-y-8">
              {/* Reported Evaluation Metrics Grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Model Evaluation Metrics (Reported on Curated Dataset)
                  </h4>
                  <span className="text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded font-medium">
                    *Pending Final Thesis Verification
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedComponent.evaluationSummary?.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1"
                    >
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                        {metric.label}
                      </span>
                      <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 block font-mono">
                        {metric.value}
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight pt-1">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Residual CNN Architecture Stages & Interactive Diagram */}
              <div className="p-6 rounded-xl bg-slate-900 dark:bg-slate-950 text-white space-y-4 border border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-400" />
                      <span>Compact Residual CNN [2, 2, 2] Architecture Blueprint</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Input: 80×80 Grayscale Single-Channel Image · Output: 22 Softmax Class Probabilities
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      openLightbox(
                        'Compact Residual CNN Architecture',
                        '80x80 Single-channel grayscale input passing through 3 residual stages [2,2,2] with BatchNorm and Dropout (p=0.4) feeding into 22 output classes.',
                        'cnn'
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand Diagram</span>
                  </button>
                </div>

                {/* Architecture Stages Diagram Flow */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs pt-2">
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
                    <span className="text-[10px] text-blue-400 font-mono">Input</span>
                    <p className="font-bold text-white">80 × 80</p>
                    <span className="text-[10px] text-slate-400 block">Grayscale [0,1]</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
                    <span className="text-[10px] text-blue-400 font-mono">Stem Conv</span>
                    <p className="font-bold text-white">3×3 Conv</p>
                    <span className="text-[10px] text-slate-400 block">BN + ReLU</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
                    <span className="text-[10px] text-blue-400 font-mono">Stage 1 [2]</span>
                    <p className="font-bold text-white">2× ResBlocks</p>
                    <span className="text-[10px] text-slate-400 block">32 Filters</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
                    <span className="text-[10px] text-blue-400 font-mono">Stage 2 [2]</span>
                    <p className="font-bold text-white">2× ResBlocks</p>
                    <span className="text-[10px] text-slate-400 block">64 Filters</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
                    <span className="text-[10px] text-blue-400 font-mono">Stage 3 [2]</span>
                    <p className="font-bold text-white">2× ResBlocks</p>
                    <span className="text-[10px] text-slate-400 block">128 Filters</span>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-900/60 border border-blue-600/70 space-y-1">
                    <span className="text-[10px] text-amber-400 font-mono">Head</span>
                    <p className="font-bold text-white">Linear (22)</p>
                    <span className="text-[10px] text-blue-200 block">Softmax</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 font-mono">
                  <span>Inference Endpoint: POST /api/recognition/predict</span>
                  <span>Framework: PyTorch 3.10+</span>
                </div>
              </div>

              {/* 22 Evaluated Character Classes Reference Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Evaluated 22 Character Classes (Select to inspect)
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Selected: <strong>{SINHALA_22_CLASSES[selectedGlyphIndex].glyph}</strong> ({SINHALA_22_CLASSES[selectedGlyphIndex].name})
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-2">
                  {SINHALA_22_CLASSES.map((cls, idx) => {
                    const isSelected = selectedGlyphIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedGlyphIndex(idx)}
                        className={`p-2.5 rounded-xl text-center transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md scale-105'
                            : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700'
                        }`}
                      >
                        <span className="font-sinhala text-xl font-bold block">{cls.glyph}</span>
                        <span className={`text-[10px] font-mono block ${isSelected ? 'text-blue-100' : 'text-slate-400 dark:text-slate-400'}`}>
                          {cls.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Component 2 Specific View: Tracing & Interactive Scaffolding Calculator */}
          {selectedComponent.id === 'component-2' && (
            <div className="space-y-8">
              {/* Scaffolding Simulation Tool */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Interactive Scaffolding Logic Simulator (3-Attempt Rolling Evaluation)</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      Test the adaptive logic algorithm governing transition between High, Medium, and Low Support based on learner mastery.
                    </p>
                  </div>
                </div>

                {/* Sliders for Attempts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">Attempt 1 Score:</span>
                      <span className="text-blue-700 dark:text-blue-400 font-mono">{attempt1} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={attempt1}
                      onChange={(e) => setAttempt1(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">Attempt 2 Score:</span>
                      <span className="text-blue-700 dark:text-blue-400 font-mono">{attempt2} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={attempt2}
                      onChange={(e) => setAttempt2(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">Attempt 3 Score:</span>
                      <span className="text-blue-700 dark:text-blue-400 font-mono">{attempt3} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={attempt3}
                      onChange={(e) => setAttempt3(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Calculation Result */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Rolling 3-Attempt Mean:</span>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                      {rollingAverage} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ 100</span>
                    </div>
                  </div>

                  <div className="space-y-1 max-w-md">
                    <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${scaffoldResult.color}`}>
                      Assigned State: {scaffoldResult.level}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {scaffoldResult.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tracing Approaches Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedComponent.approachDetails.map((approach, aIdx) => (
                  <div key={aIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{approach.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{approach.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Component 3 Specific View: Gamified Learning */}
          {selectedComponent.id === 'component-3' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-2">
                <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>Academic Restraint & Child-Centric Gamification</span>
                </h4>
                <p className="text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                  This component explores pedagogical incentives designed specifically to avoid cognitive overload. Specific point tallies, leaderboard configurations, and empirical engagement statistics remain in progress under ethical school trials and will be updated once formal research thesis documentation is verified.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedComponent.approachDetails.map((approach, aIdx) => (
                  <div key={aIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{approach.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{approach.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Component 4 Specific View: Sentences & Progress Tracking */}
          {selectedComponent.id === 'component-4' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Spring Boot REST Backend</span>
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Clean Controller-Service-DTO enterprise architecture handling sentence repositories, image file storage, and API routing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Relational Persistence</span>
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Stores structured entities for sentences, student writing attempt histories, character accuracy scores, and audio/image metadata.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Curriculum CRUD Actions</span>
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Provides educators full administrative control to author, update, and categorize practice sentences suited for Grades 1–3.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950 text-white font-mono text-xs space-y-2 border border-slate-800">
                <div className="text-slate-400"># Spring Boot REST API Endpoint Blueprint:</div>
                <div className="text-emerald-400">GET /api/sentences <span className="text-slate-500">// Fetch curriculum sentence library</span></div>
                <div className="text-emerald-400">POST /api/sentences <span className="text-slate-500">// Upload new sentence + multipart illustrative image</span></div>
                <div className="text-emerald-400">GET /api/progress/student/&#123;id&#125; <span className="text-slate-500">// Aggregate longitudinal accuracy metrics</span></div>
              </div>
            </div>
          )}

          {/* Architecture Details Bullet List */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
              Technical Architectural Implementation:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
              {selectedComponent.architectureDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>

      {/* 8.7 OVERALL RESEARCH METHODOLOGY */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Section 8.7</span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Overall Research Methodology
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Structured eight-phase academic lifecycle governing design, dataset curation, algorithmic
            experimentation, and empirical evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESEARCH_METHODOLOGY_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 font-mono">Phase {phase.phase}</span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">{phase.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8.8 TECHNOLOGIES USED TABLE */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Section 8.8</span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Technologies Used
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Technology</th>
                <th className="py-3 px-4">Domain Category</th>
                <th className="py-3 px-4">Role in Letter Helper System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {TECHNOLOGIES_USED.map((tech, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{tech.name}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-[11px]">
                      {tech.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{tech.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8.9 SYSTEM ARCHITECTURE */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Section 8.9
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              System Architecture & Data Flow
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              *Illustrative conceptual architecture diagram representing component interfaces.
            </p>
          </div>
          <button
            onClick={() =>
              openLightbox(
                'Letter Helper System Architecture',
                'Illustrative schematic demonstrating data flow between the Client Browser, Spring Boot Application Layer, PyTorch Deep Learning Microservice, and Relational Database.',
                'architecture'
              )
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold self-start border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Enlarge Schematic</span>
          </button>
        </div>

        {/* Conceptual Visual Diagram Box */}
        <div className="p-6 rounded-xl bg-slate-900 dark:bg-slate-950 text-white space-y-6 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-xs">
            {/* Box 1 */}
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <span className="text-[10px] text-blue-400 font-mono uppercase">User Layer</span>
              <p className="font-bold text-white text-sm">Primary Student / Teacher</p>
              <p className="text-[11px] text-slate-400 leading-tight">
                Stylus touch input, letter selection, feedback prompts
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-4 rounded-xl bg-slate-800 border border-blue-500/50 space-y-2">
              <span className="text-[10px] text-blue-400 font-mono uppercase">Presentation Layer</span>
              <p className="font-bold text-white text-sm">React 19 Canvas Client</p>
              <p className="text-[11px] text-slate-400 leading-tight">
                Vector keypoint tracker, boundary checks, scaffolding state engine
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-4 rounded-xl bg-slate-800 border border-teal-500/50 space-y-2">
              <span className="text-[10px] text-teal-400 font-mono uppercase">Backend Services</span>
              <p className="font-bold text-white text-sm">Spring Boot 3 + PyTorch</p>
              <p className="text-[11px] text-slate-400 leading-tight">
                Sentence CRUD REST API, image handling, and 80×80 CNN inference endpoint
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-4 rounded-xl bg-slate-800 border border-purple-500/50 space-y-2">
              <span className="text-[10px] text-purple-400 font-mono uppercase">Persistence Layer</span>
              <p className="font-bold text-white text-sm">Relational Database</p>
              <p className="text-[11px] text-slate-400 leading-tight">
                Curriculum sentences, student attempt telemetry, longitudinal accuracy
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-400 text-xs flex items-center justify-between">
            <span>Communication Protocol: Secure REST API over JSON / HTTPS</span>
            <span>Microservice Payload: 80×80 Grayscale Base64 / Blob</span>
          </div>
        </div>
      </section>

      {/* 8.10 RESEARCH EVALUATION & GALLERY */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Section 8.10
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Research Evaluation & Interface Gallery
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Structured placeholders reserved for genuine system screenshots and evaluation graphs
            derived from the final thesis submission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Component 1 Evaluation Plot */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800/60 flex flex-col group hover:shadow-md transition-all">
            <div
              className="h-44 bg-slate-900 flex items-center justify-center overflow-hidden relative cursor-pointer"
              onClick={() =>
                openLightbox(
                  IMAGES_CONFIG.gallery.c1Evaluation.title,
                  IMAGES_CONFIG.gallery.c1Evaluation.caption,
                  'cnn'
                )
              }
            >
              <img
                src={IMAGES_CONFIG.gallery.c1Evaluation.src}
                alt={IMAGES_CONFIG.gallery.c1Evaluation.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5">
                <Maximize2 className="w-4 h-4" />
                <span>Click to enlarge</span>
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{IMAGES_CONFIG.gallery.c1Evaluation.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {IMAGES_CONFIG.gallery.c1Evaluation.caption}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Test Acc: 96.75%</span>
                <span>/public/images/gallery/c1-evaluation.svg</span>
              </div>
            </div>
          </div>

          {/* Card 2: Component 2 Writing Canvas */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800/60 flex flex-col group hover:shadow-md transition-all">
            <div
              className="h-44 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative cursor-pointer border-b border-slate-200 dark:border-slate-700"
              onClick={() =>
                openLightbox(
                  IMAGES_CONFIG.gallery.c2Canvas.title,
                  IMAGES_CONFIG.gallery.c2Canvas.caption,
                  'tracing'
                )
              }
            >
              <img
                src={IMAGES_CONFIG.gallery.c2Canvas.src}
                alt={IMAGES_CONFIG.gallery.c2Canvas.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5">
                <Maximize2 className="w-4 h-4" />
                <span>Click to enlarge</span>
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{IMAGES_CONFIG.gallery.c2Canvas.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {IMAGES_CONFIG.gallery.c2Canvas.caption}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="text-teal-600 dark:text-teal-400 font-semibold">Adaptive Scaffolding</span>
                <span>/public/images/gallery/c2-canvas.svg</span>
              </div>
            </div>
          </div>

          {/* Card 3: Component 4 Progress View */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800/60 flex flex-col group hover:shadow-md transition-all">
            <div
              className="h-44 bg-slate-900 flex items-center justify-center overflow-hidden relative cursor-pointer"
              onClick={() =>
                openLightbox(
                  IMAGES_CONFIG.gallery.c4Dashboard.title,
                  IMAGES_CONFIG.gallery.c4Dashboard.caption,
                  'sentence'
                )
              }
            >
              <img
                src={IMAGES_CONFIG.gallery.c4Dashboard.src}
                alt={IMAGES_CONFIG.gallery.c4Dashboard.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5">
                <Maximize2 className="w-4 h-4" />
                <span>Click to enlarge</span>
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{IMAGES_CONFIG.gallery.c4Dashboard.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {IMAGES_CONFIG.gallery.c4Dashboard.caption}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Spring Boot REST</span>
                <span>/public/images/gallery/c4-dashboard.svg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={lightboxData.title}
        caption={lightboxData.caption}
      >
        <div className="p-6 bg-slate-900 text-white rounded-xl w-full max-w-2xl text-center space-y-4">
          <p className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            Schematic Representation
          </p>
          <div className="py-12 border border-slate-700 rounded-lg flex flex-col items-center justify-center space-y-3">
            <Cpu className="w-12 h-12 text-blue-500" />
            <span className="text-sm font-semibold">{lightboxData.title}</span>
            <span className="text-xs text-slate-400 max-w-md">{lightboxData.caption}</span>
          </div>
          <p className="text-[11px] text-slate-500">
            High-resolution vector assets can be linked directly inside src/pages/DomainPage.tsx.
          </p>
        </div>
      </LightboxModal>
    </div>
  );
};
