import React from 'react';
import { PRESENTATIONS_DATA, PresentationItem } from '../data/presentationsData';
import { OneDriveActionButton, FileTypeBadge } from '../components/OneDriveActionButton';
import {
  Presentation,
  Calendar,
  CheckCircle2,
  Cloud,
} from 'lucide-react';

interface PresentationsPageProps {
  // Cleaned up maintainer guide props
}

export const PresentationsPage: React.FC<PresentationsPageProps> = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="text-left max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
          <Presentation className="w-4 h-4" />
          <span>Academic Slides Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Research Presentation Decks
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Comprehensive presentation slide decks presented before academic review panels,
          examiners, and supervisors throughout the Letter Helper research lifecycle at SLIIT,
          hosted on Microsoft OneDrive.
        </p>
      </div>

      {/* OneDrive Storage Notice Banner */}
      <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200 flex items-start gap-2.5 text-xs">
        <Cloud className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Microsoft OneDrive Presentation Access:</strong> Slide decks (PowerPoint PPTX and
          PDF) are hosted on Microsoft OneDrive. When a link is attached, clicking{' '}
          <strong>View / Download</strong> opens the specific presentation directly in a new
          browser tab for viewing in OneDrive PowerPoint Web or local download.
        </p>
      </div>

      {/* Presentations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRESENTATIONS_DATA.map((pres) => {
          return (
            <div
              key={pres.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-800/70 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Header row: Order badge, Title, FileType Badge */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center font-bold text-sm shrink-0">
                      P{pres.order}
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                        {pres.academicStage}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {pres.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <FileTypeBadge fileType={pres.fileType} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pres.description}
                </p>

                {/* Topics covered */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    <span>Key Topics Covered:</span>
                    {pres.slideCountEstimate && (
                      <span className="font-mono text-slate-400 dark:text-slate-500 font-normal lowercase">
                        {pres.slideCountEstimate}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {pres.topicsCovered.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer row: Date and View / Download Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{pres.date}</span>
                </div>

                <OneDriveActionButton
                  oneDriveUrl={pres.oneDriveUrl}
                  title={pres.title}
                  fileType={pres.fileType}
                  size="md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
