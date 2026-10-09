import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MILESTONES_DATA, MilestoneItem } from '../data/milestonesData';
import { NavTab } from '../components/Navbar';
import {
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ChevronDown,
  ChevronUp,
  Award,
  ExternalLink,
  Presentation,
  ShieldCheck,
} from 'lucide-react';

interface MilestonesPageProps {
  onSelectTab: (tab: NavTab) => void;
}

export const MilestonesPage: React.FC<MilestonesPageProps> = ({ onSelectTab }) => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(
    MILESTONES_DATA[2].id // default to PP2 or the active one
  );
  const [filterStatus, setFilterStatus] = useState<'All' | 'Completed' | 'In Progress' | 'Upcoming'>('All');

  const filteredMilestones = MILESTONES_DATA.filter((m) => {
    if (filterStatus === 'All') return true;
    return m.status === filterStatus;
  });

  const activeMilestone =
    MILESTONES_DATA.find((m) => m.id === selectedMilestoneId) || MILESTONES_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="text-left max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
          <Calendar className="w-4 h-4" />
          <span>Academic Assessment Stages</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Project Milestones & Assessment Timeline
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Structured academic timeline tracking deliverables, dates, allocated marks, and examination
          stages prescribed by the Sri Lanka Institute of Information Technology (SLIIT) Faculty of
          Computing.
        </p>
      </div>

      {/* University Policy Notice Banner */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            <strong>Verified Academic Records:</strong> Historical dates and deliverable records conform
            strictly to submitted project documentation. Unverified values display{' '}
            <code className="text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-[11px]">
              To be updated
            </code>{' '}
            to preserve evaluation integrity.
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">Academic Year 2025/2026</span>
      </div>

      {/* Interactive Selection Interface: Dropdown selector on Mobile + Interactive Timeline on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Milestone Picker & Timeline Navigation (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {(['All', 'Completed', 'In Progress', 'Upcoming'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  filterStatus === status
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Quick Dropdown Selector for Mobile */}
          <div className="sm:hidden space-y-1">
            <label htmlFor="milestone-select" className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Select Assessment Stage:
            </label>
            <select
              id="milestone-select"
              value={selectedMilestoneId}
              onChange={(e) => setSelectedMilestoneId(e.target.value)}
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            >
              {MILESTONES_DATA.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.order}. {m.shortTitle} ({m.status})
                </option>
              ))}
            </select>
          </div>

          {/* Vertical Stepper List */}
          <div className="space-y-3">
            {filteredMilestones.map((milestone) => {
              const isSelected = selectedMilestoneId === milestone.id;
              const statusColors = {
                Completed: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
                'In Progress': 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
                Upcoming: 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700',
              }[milestone.status];

              return (
                <div
                  key={milestone.id}
                  onClick={() => setSelectedMilestoneId(milestone.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600 dark:ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          milestone.status === 'Completed'
                            ? 'bg-emerald-600 text-white'
                            : milestone.status === 'In Progress'
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {milestone.order}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white">{milestone.title}</h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">{milestone.academicStage}</p>
                      </div>
                    </div>

                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${statusColors} shrink-0`}>
                      {milestone.status}
                    </span>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-mono">
                      Date: <strong className="text-slate-700 dark:text-slate-200">{milestone.confirmedDate}</strong>
                    </span>
                    <span className="font-mono">
                      Marks: <strong className="text-slate-700 dark:text-slate-200">{milestone.marksAllocated}</strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Assessment Milestone Card (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestoneId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 space-y-6 sticky top-24"
            >
            {/* Header of Active Milestone */}
            <div className="border-b border-slate-100 dark:border-slate-800 pb-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-100 dark:border-blue-900/60">
                  Assessment Milestone #{activeMilestone.order}
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded border ${
                    activeMilestone.status === 'Completed'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                      : activeMilestone.status === 'In Progress'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Status: {activeMilestone.status}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {activeMilestone.title}
              </h2>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Academic Stage: {activeMilestone.academicStage}
              </p>
            </div>

            {/* Assessment Details Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Scheduled Assessment Date
                </span>
                <p className="text-base font-extrabold text-slate-900 dark:text-white font-mono">
                  {activeMilestone.confirmedDate}
                </p>
                {activeMilestone.historicalNotes && (
                  <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                    ✓ {activeMilestone.historicalNotes}
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Allocated Assessment Marks
                </span>
                <p className="text-base font-extrabold text-slate-900 dark:text-white font-mono">
                  {activeMilestone.marksAllocated}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 pt-1">
                  *Per SLIIT grading syllabus guidelines
                </p>
              </div>
            </div>

            {/* Narrative Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Assessment Overview:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeMilestone.description}
              </p>
            </div>

            {/* Focus of Academic Panel */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1 text-xs">
              <span className="font-bold text-blue-900 dark:text-blue-300 block">Examination Evaluation Focus:</span>
              <p className="text-blue-950 dark:text-blue-200 leading-relaxed">{activeMilestone.assessmentFocus}</p>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Key Deliverables & Submissions:
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {activeMilestone.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions to Documents / Slides */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectTab('documents')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Related Documents</span>
              </button>
              <button
                onClick={() => onSelectTab('presentations')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Presentation className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>Presentation Slides</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
};
